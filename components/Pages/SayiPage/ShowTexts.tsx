'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye } from "lucide-react"
import { useState } from "react"
import Yazi from "./Yazi"

interface Props {
    data: Contributions[] | []
}
const ShowTexts: React.FC<Props> = ({
    data
}) => {
    const [open, setOpen] = useState(false)
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
                    {data.length > 0 ?
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