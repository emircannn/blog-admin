'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { handleSelectImage } from "@/utils/helper"
import axios from "axios"
import { ImageIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function AddCategory() {

  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState()
  const [imagePre, setImagePre] = useState()
  const [name, setName] = useState('')

  const handleAdd = async () => {
    try {
      setLoading(true)
      if(image && name) {
        const token = localStorage.getItem("token")
      const formData = new FormData()
      formData.append('image', image)
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}category/add?name=${name}`, formData,{
      headers: {
          'Authorization': `Bearer ${token}`,
      },
      })

      if(res.data.error) {
        setLoading(false)
          toast({title : res.data.message})
          window.location.reload()
        } else {
          setLoading(false)
          toast({title : res.data.message})
          setOpen(false)
          window.location.reload()
        }
      } else {
        setLoading(false)
        toast({title : 'Tüm alanlar zorunludur'})
      }
    } catch (error: any) {
      setLoading(false)
      toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Ekle</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Kategori Ekle</DialogTitle>
        </DialogHeader>
          <div className="flex items-center flex-col gap-4">
            <div className="flex flex-col items-center gap-2">
            <div className="w-28 aspect-square rounded-full border-2 border-thirth backgroundColor overflow-hidden relative">
              <div className="w-full h-full">
              {imagePre &&<Image alt="profil" src={imagePre} fill quality={100} priority className="object-cover"/>}
              <span className="absolute w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-2 opacity-0 hover:opacity-100 duration-300 cursor-pointer">
                  <ImageIcon/>
                  <span className="text-xs font-semibold text-center">Kategori Resmi Seç</span>
                  <input type="file" onChange={(e) => handleSelectImage(e, setImage, setImagePre)} className="absolute top-0 left-0 w-full h-full z-10 opacity-0"/>
              </span>
              </div>
            </div>
            <p className="font-semibold text-sm">Kategori Resmi Seç</p>
            </div>

            <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="category" className="">
              Kategori Adı
            </Label>
            <Input
              id="category"
              placeholder="Bir şeyler yazın..."
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            </div>
          </div>
        <DialogFooter>
            <Button onClick={handleAdd} disabled={loading}>
                  {loading ? 'Yükleniyor...' : 'Kaydet'}
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
