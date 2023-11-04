'use client'
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "./ui/use-toast";
import axios from "axios";
import Confirm from "./AlertDialog";

interface Props {
    data: Texts
    url?: any
    actual?: boolean
}

const Article: React.FC<Props> = ({
    data,
    url= `${process.env.NEXT_PUBLIC_URL}article/delete?seo=${data?.seo}`,
    actual=false
}) => {

    const { toast } = useToast()

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios.post(url, {} ,{
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
        <div className="w-full rounded-xl">
            <div className="w-full aspect-[4/3] sm:aspect-[5/3] rounded-xl overflow-hidden relative flex">
                <Image alt="banner" src={data?.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
                <span className="absolute top-1 left-1 sm:top-2 sm:left-2">
                    {data?.category &&
                    <Badge>
                        {data?.category?.name}
                    </Badge>}
                </span>

                <div className="absolute top-2 right-2 flex items-center gap-2">
                    <Link href={actual ? `/aktuel/duzenle/${data?.seo}`: `/yazi/duzenle/${data?.seo}`} className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
                        <Pencil size={16} className="dark:text-darkerColor text-white"/>
                    </Link>
                    <Confirm
                    action={handleDelete}
                    button={
                    <button className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
                    <Trash2 size={16} className="dark:text-darkerColor text-white"/>
                    </button>
                    }
                    title="Bu yazıyı silmek istediğinize emin misiniz?"
                    desc={` ${data.title} yazısını silmek üzeresiniz.`}
                    />
                </div>
            </div>
            <div className="p-2 pb-0 flex flex-col gap-3">
                <div className="articleHeading hover:underline duration-300 min-h-[48px]">
                    {data?.title}
                </div>
                <UserInfo
                    data={data?.user}
                    createdAt={data?.createdAt}
                    _readCount={data?.readCount}
                />
            </div>
        </div>
     );
}
 
export default Article;