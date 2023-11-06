'use clien'
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Props {
  data: Texts | undefined
}

const ArticleBox: React.FC<Props> = ({
  data
}) => {

  const { toast } = useToast()
  const [open, setOpen] = useState(data?.isSlider)

  useEffect(() => {
    if(data && open !== data.isSlider) {
      const handleUpdate = async () => {
        try {
        const formBody = {
          isSlider: open
        }
        const token = localStorage.getItem("token")
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}settings/slider?seo=${data?.seo}`, formBody, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(res.data.error) {
          toast({title : res.data.message})
        } else {
          toast({title : res.data.message})
        }
        } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
    }
    handleUpdate()
    }
  }, [data, open, toast])

  return (
    <div className="w-full rounded-xl">
            <div className="w-full aspect-[4/3] sm:aspect-[5/3] rounded-xl overflow-hidden relative flex">
                <Image alt="banner" src={data?.image ? data.image : '/images/logo.png'} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
                <span className="absolute top-1 left-1 sm:top-2 sm:left-2">
                    {data?.category &&
                    <Badge>
                        {data?.category?.name}
                    </Badge>}
                </span>

            </div>
            <div className="p-2 pb-0 flex flex-col gap-3">
                <div className="articleHeading hover:underline duration-300 min-h-[48px]">
                    {data?.title}
                </div>

                <div className="flex items-center space-x-2">
                  <Switch checked={open} onClick={() => setOpen(!open)} id="read-mode" />
                  <Label htmlFor="read-mode">Kapalı/Açık</Label>
            </div>
            </div>
        </div>
  )
}

export default ArticleBox