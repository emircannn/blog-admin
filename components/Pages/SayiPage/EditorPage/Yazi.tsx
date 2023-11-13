import { dateFormater } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link"
import EditCon from "../EditCon";
import Confirm from "@/components/AlertDialog";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

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
    <div className="flex gap-3 w-full rounded-xl p-3 backgroundColor relative">
        <div className="relative h-[100px] shrink-0 aspect-[7/9] rounded-xl border border-thirth overflow-hidden">
            <Image alt="image" src={data?.magazine?.image} fill className="object-cover"/>
        </div>

        <div className="flex flex-col h-full justify-between w-full">
          <div className="flex items-center justify-between">
            <Link href={data?.magazine?.file} target='_blank' className="articleHeading hover:underline duration-300">{data?.magazine?.title}</Link>

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
            <Link href={data?.file} target="_blank"  className="text-xs font-semibold hover:underline duration-300">{data?.title}</Link>
            <div className="flex items-center justify-between text-xs font-medium opacity-75 w-full">
              <span className="">
                  Sayfa: {data?.startPage} - {data?.endPage}
              </span>

              <span>
                {dateFormater(data?.createdAt)}
              </span>
            </div>
        </div>
    </div>
  )
}

export default Yazi