'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { handleSelectImage } from "@/utils/helper"
import axios from "axios"
import { File, ImageIcon, Pencil } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Props {
    data: Magazine
  }
  
  const Edit: React.FC<Props> = ({
    data
  }) => {

    const { toast } = useToast()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState<any>()
    const [imagePre, setImagePre] = useState<any>(data.image)
    const [file, setFile] = useState<any>()
    const [title, setTitle] = useState<any>()
    const [desc, setDesc] = useState<any>(data.desc)

    const handleFileChange = (event: any) => {
        const _file = event.target.files[0];
        if (_file) {
            setFile(_file)
        }
    };

    const handleSubmit = async() => {
        try {
            setLoading(true);
            if(image || file || title || desc) {
                const token = localStorage.getItem("token")
                const formData = new FormData()
                image && formData.append('textImage', image)
                file && formData.append('textFile', file)
                title && formData.append('title', title)
                desc && formData.append('desc', desc)
                const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}magazine/update?seo=${data.seo}`, formData,{
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                })
            
                if(res.data.error) {
                    toast({title : res.data.message})
                    setLoading(false)
                    window.location.reload()
                    } else {
                    toast({title : res.data.message})
                    setLoading(false)
                    setOpen(false)
                    window.location.reload()
                    }
                } else {
                    toast({title : 'En az bir zorunludur'})
            }
        } catch (error: any) {
            setLoading(false)
            toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <button onClick={() => setOpen(true)} className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
                <Pencil size={16} className="dark:text-darkerColor text-white"/>
            </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[825px]">
            <DialogHeader>
                <DialogTitle>Sayı Düzenle</DialogTitle>
            </DialogHeader>
            <div className="flex">
                <div className="relative w-[40%] shrink-0 overflow-hidden aspect-[9/16] rounded-xl border border-thirth">
                    <div className="w-full h-full">
                        {imagePre &&<Image alt="profil" src={imagePre} fill quality={100} priority className="object-cover"/>}
                        <span className="absolute w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-2 opacity-0 hover:opacity-100 duration-300 cursor-pointer">
                            <ImageIcon/>
                            <span className="text-xs font-semibold text-center">Sayı Kapak Resmi Seç</span>
                            <input type="file" onChange={(e) => handleSelectImage(e, setImage, setImagePre)} className="absolute top-0 left-0 w-full h-full z-10 opacity-0"/>
                        </span>
                    </div>
                </div>
                
                <div className="flex flex-col justify-between pl-4 w-[60%]">
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col gap-2">
                        <Label>
                            Sayı Başlığı
                        </Label>
                        <Input placeholder={data.title} onChange={(e) => setTitle(e.target.value)} value={title}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>
                            Sayı Açıklaması
                        </Label>
                        <Textarea placeholder="Bir şeyler yazın..." onChange={(e) => setDesc(e.target.value)} value={desc} className="min-h-[300px] resize-none"/>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl backgroundColor relative cursor-pointer">
                        <File/>
                        <span className="line-clamp-1 font-semibold text-sm">
                            {file ? file.name: 'Sayı Dosyası Seç'}
                        </span>

                        <input type="file" accept=".pdf" onChange={handleFileChange} className="absolute top-0 left-0 w-full h-full opacity-0" />
                    </div>
                    </div>

                    <div className="flex justify-end">
                        <Button onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Yükleniyor...' : 'Kaydet'}
                        </Button>
                    </div>
                </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default Edit