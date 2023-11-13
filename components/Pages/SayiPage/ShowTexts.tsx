'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye } from "lucide-react"
import { useEffect, useState } from "react"
import Yazi from "./Yazi"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"

interface Props {
    seo: string
}
const ShowTexts: React.FC<Props> = ({
    seo
}) => {
    const [open, setOpen] = useState(false)

    const [data, setData] = useState<Contributions[]>([])
    const { toast } = useToast()

    useEffect(() => {
        const getData = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}magazine/getContributions?seo=${seo}`)
            if(res.data.error) {
                toast({title : res.data.message})
            } else {
                setData(res.data.data)
            }
        } catch (error: any) {
            toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
        }

        if(open) {
            getData()
        }
    }, [open, seo, toast])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <button onClick={() => setOpen(true)} className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
                <Eye size={16} className="dark:text-darkerColor text-white"/>
            </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[650px]">
            <DialogHeader>
                <DialogTitle>Sayıya Ait Yazılar</DialogTitle>
            </DialogHeader>
                <div className="flex flex-col gap-3 h-[600px] overflow-y-auto px-2">
                    {data?.length > 0 ?
                    data?.map((_,i) => (
                        <Yazi key={i} data={_}/>
                    ))
                : 
                <p className="text-sm font-semibold">
                    Bu Sayıya ait henüz yazı yok...
                </p>
                }
                </div>
        </DialogContent>
    </Dialog>
  )
}

export default ShowTexts