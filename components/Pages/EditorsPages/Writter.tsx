
import Confirm from "@/components/AlertDialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface RequestProps {
    data: User
  }

const Writer: React.FC<RequestProps> = ({
    data
}) => {

    const { toast } = useToast()
    const {refresh,} = useRouter()

    const handleDelete = async () => {
        try {
            const token = typeof window != "undefined" && window.localStorage && window.localStorage.getItem("token");
            const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}admin/deleteUser?username=${data?.username}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            if(res.data.error) {
                refresh()
                toast({title : res.data.message})
            } else {
                refresh()
                toast({title : res.data.message})
                window.location.reload()
            }
        } catch (error: any) {
            toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
    }

    return (
        <div className="w-full aspect-[1/1.25] rounded-xl backgroundColor flex flex-col overflow-hidden">
            <div className="w-full !h-[40%] md:h-1/2 relative">
                <Image alt="banner" src={data?.coverImage ? data.coverImage : '/images/logo.png'} fill quality={100} className="object-cover"/>

                <div className="w-full absolute -bottom-5 md:-bottom-10 left-0 flex items-center justify-center">
                    <div className="w-1/4 md:w-20 aspect-square rounded-full overflow-hidden relative border-2 border-thirth">
                        <Image alt="image" src={data?.image ? data.image : '/images/logo.png'} fill quality={100} className="object-cover"/>
                    </div>
                </div>
            </div>

            <div className="w-full !h-[60%] md:h-1/2 pt-6 md:pt-12 px-4 pb-4 flex flex-col justify-between text-center">
                <p className="line-clamp-1 w-full font-semibold text-sm sm:text-base hover:underline duration-300">{data?.name}</p>
                <p className="line-clamp-1 font-semibold text-xs sm:text-sm opacity-60">@{data?.username}</p>

                <Confirm
                    action={handleDelete}
                    button={
                    <Button variant='destructive'>
                        Sil
                    </Button>
                    }
                    title="Bu editörü silmek istediğinize emin misiniz?"
                    desc={` ${data?.name} editörünü silerseniz bu editöre ait tüm yazılar silinecektir.`}
                    />
                
            </div>
        </div>
  )
}

export default Writer