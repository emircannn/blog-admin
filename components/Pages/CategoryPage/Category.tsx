
import { Trash2 } from "lucide-react"
import Image from "next/image"
import EditCategory from "./EditCategory"
import Confirm from "@/components/AlertDialog"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"

interface Props {
    data: CategoryType
}

const Category: React.FC<Props> = ({
    data
}) => {

    const { toast } = useToast()

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}category/delete?seo=${data?.seo}`, {} ,{
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
    <div className="w-full rounded-xl p-3 backgroundColor aspect-square flex flex-col justify-evenly items-center relative">
        <div  className="w-24 aspect-square rounded-full overflow-hidden relative border-thirth border-2">
            <Image alt="" src={data?.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </div>

        <div className="flex flex-col gap-1 items-center">
        <h6 className="text-sm font-semibold sm:text-base hover:underline duration-300">{data.name}</h6>
        <p className="text-xs sm:text-sm font-medium opacity-60">{data.articles.length} Yazı</p>
        </div>

        <div className="absolute top-2 right-2 flex items-center gap-2">
            <EditCategory data={data}/>
            <Confirm
            action={handleDelete}
            button={
            <button className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
            <Trash2 size={16} className="dark:text-darkerColor text-white"/>
            </button>
            }
            title="Bu Kategoriyi silmek istediğinize emin misiniz?"
            desc={`Eğer ${data.name} kategorisini silerseniz, bu kategoriye ait tüm yazılar silinecektir.`}
            />
            
        </div>
    </div>
  )
}

export default Category