import Confirm from "@/components/AlertDialog";
import { Avatar } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { dateFormater } from "@/utils/helper";
import { AvatarImage } from "@radix-ui/react-avatar";
import axios from "axios";
import { Trash2 } from "lucide-react";
import Link from "next/link"
import EditCon from "./EditCon";

interface Props {
  data: Contributions;
}
const Yazi: React.FC<Props> = ({
  data
}) => {

  const { toast } = useToast()

  const handleDelete = async () => {
    try {
        const token = localStorage.getItem("token")
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}contribution/delete?id=${data?.id}`, {} ,{
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        })
    
        if(res.data.error) {
            toast({title : res.data.message})
            window.location.reload()
            } else {
            toast({title : res.data.message})
            window.location.reload()
            }
    } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
    }
}

  return (
        <div className="flex flex-col h-fit justify-between w-full gap-2 p-3 backgroundColor rounded-xl">
            <Link href={data.file} target='_blank' className="articleHeading hover:underline duration-300">{data?.title}</Link>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={data.user.image ? data.user.image : '/images/logo.png'}/>
                </Avatar>

                <span className="text-xs font-semibold">
                  {data.user.name} - {data.user.username}
                </span>
              </div>

              <div className="flex items-center gap-2">
              <EditCon data={data}/>
              <Confirm
                action={handleDelete}
                button={
                <button className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
                <Trash2 size={16} className="dark:text-darkerColor text-white"/>
                </button>
                }
                title="Bu yazıyı silmek istediğinize emin misiniz?"
                desc={`${data.title} yazısını silmek üzeresiniz.`}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-medium opacity-75 w-full">
              <span className="">
                  Sayfa: {data?.startPage} - {data?.endPage}
              </span>

              <span>
                {dateFormater(data?.createdAt)}
              </span>
            </div>
        </div>
  )
}

export default Yazi