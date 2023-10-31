import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import { Check, X } from "lucide-react"
import { useRouter } from "next/navigation"

interface RequestProps {
    data: User
  }

const Request: React.FC<RequestProps> = ({
    data
}) => {

    const { toast } = useToast()
    const {refresh} = useRouter()

    const handleConfirm = async () => {
        try {
            const token = typeof window != "undefined" && window.localStorage && window.localStorage.getItem("token");
            const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}admin/confirmUser?username=${data?.username}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            if(res.data.error) {
                toast({title : res.data.message})
                window.location.reload()
                refresh()
            } else {
                toast({title : res.data.message})
                window.location.reload()
                refresh()
            }
        } catch (error: any) {
            toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
    }

    const handleDelete = async () => {
        try {
            const token = typeof window != "undefined" && window.localStorage && window.localStorage.getItem("token");
            const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}admin/deleteUser?username=${data?.username}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            if(res.data.error) {
                toast({title : res.data.message})
                window.location.reload()
                refresh()
            } else {
                toast({title : res.data.message})
                window.location.reload()
                refresh()
            }
        } catch (error: any) {
            toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
    }

  return (
    <div className="flex items-center justify-between p-3 backgroundColor rounded-xl">
        <div className="flex flex-col gap-2 text-sm font-medium">
            <p className="font-semibold">Ad Soyad: {data?.name}</p>
            <p className="">Kullanıcı Adı: @{data?.username}</p>
            <p className="">Mail: {data?.email}</p>
        </div>

        <div className="flex items-center gap-2" onClick={handleConfirm}>
            <Button size='icon'>
                <Check/>
            </Button>
            <Button size='icon' variant='destructive' onClick={handleDelete}>
                <X/>
            </Button>
        </div>
    </div>
  )
}

export default Request