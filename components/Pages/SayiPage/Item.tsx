import Confirm from "@/components/AlertDialog"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { dateFormater, formatReadCount } from "@/utils/helper"
import axios from "axios"
import { Pencil, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Edit from "./Edit"
import ShowTexts from "./ShowTexts"

interface Props {
    data: Magazine
}

const Item: React.FC<Props> = ({
    data
}) => {

    const { toast } = useToast()

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}magazine/delete?seo=${data.seo}`, {} ,{
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
    <div className="w-full flex flex-col p-3 backgroundColor rounded-xl gap-3">
        <div className="aspect-[1/1.35] shrink-0 w-full relative overflow-hidden rounded-xl flex">
        <Image alt="banner" src={data.image} fill quality={100} priority className="object-cover hover:scale-105 duration-300"/>

        <span className="absolute bottom-2 right-2">
            <Badge>{dateFormater(data.createdAt)}</Badge>
        </span>

        <div className="absolute top-2 right-2 flex items-center gap-2">
            <ShowTexts data={data?.contributions}/>
            <Edit data={data}/>
            <Confirm
            action={handleDelete}
            button={
            <button className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
            <Trash2 size={16} className="dark:text-darkerColor text-white"/>
            </button>
            }
            title="Bu Sayıyı silmek istediğinize emin misiniz?"
            desc={`Eğer ${data.title} sayısını silerseniz, bu sayıya ait tüm yazılar silinecektir.`}
            />
        </div>

        </div>

        <div className="flex items-center justify-between gap-2">
        <Link href={data?.file ? data.file : '/'} target="_blank" className="articleHeading hover:underline !line-clamp-1">
            {data.title}
        </Link>

        <span className="text-xs font-semibold opacity-60">{formatReadCount(data.readCount)} okunma</span>
        </div>
    </div>
  )
}

export default Item