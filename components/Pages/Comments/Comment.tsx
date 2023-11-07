import Confirm from "@/components/AlertDialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { dateFormater } from "@/utils/helper"
import axios from "axios"

interface Props {
  data: Comments
}

const CommentItem: React.FC<Props> = ({
  data
}) => {

  const { toast } = useToast()
  const handleDelete = async () => {
    try {
        const token = localStorage.getItem("token")
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}comment/delete?id=${data.id}`, {},{
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
    <div className="w-full rounded-xl flex flex-col gap-3 p-3 backgroundColor">
        <div className="flex gap-3 flex-col">
            <h2 className="articleHeading">{data.actual?.title || data.text?.title || data.magazine?.title}</h2>

            <p className="text-sm">
              {data.comment}
            </p>
            
            <div className="flex items-center gap-3 flex-wrap">
            <p className="text-sm font-semibold">{data?.name}</p>
            <p className="text-xs font-semibold opacity-75">{data?.email}</p>
            <span className="text-xs">{dateFormater(data?.createdAt)}</span>
            </div>

            <div>
            
            <Confirm
            action={handleDelete}
            button={
              <Button variant='destructive'>
                Sil
              </Button>
            }
            title="Bu yorumu silmek istediğinize emin misiniz?"
            />
            </div>
        </div>
    </div>
  )
}

export default CommentItem