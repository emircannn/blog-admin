'use client'
import { useContext, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handleSelectImage } from "@/utils/helper"
import { ImageIcon } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"
import { AuthContext } from "@/context/AuthContext"
const Editor = dynamic(() => import('../../Editor'), { 
  ssr: false 
});


const AddPage = () => {
  const [image, setImage] = useState('')
  const [imagePre, setImagePre] = useState('')
  const [text, setText] = useState("")
  const [note, setNote] = useState("")
  const [name, setName] = useState("")

  const { toast } = useToast()
  const {auth} = useContext<any>(AuthContext)

  const handleSubmit = async() => {
    try {
      if (imagePre && text && name) {
        const token = localStorage.getItem("token")
        const formData = new FormData()
        formData.append('name', name)
        formData.append('textImage', image)
        formData.append('text', text)
        formData.append('note', note)
        formData.append('user', auth?.id)
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}actual/create`,formData,{
          headers: {
              'Authorization': `Bearer ${token}`,
          },
          })

          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            toast({title : res.data.message})
            window.location.replace('/aktuel')
          }
      } else {
        toast({title : 'Resim, Yazı ve Başlık alanları zorunludur'})
      }
    } catch (error:any) {
      toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
    }
  }

  return (
    <div className="p-8 flex flex-col gap-3 w-full max-h-screen overflow-y-auto">
        <Label htmlFor="title">
        Aktüel
        </Label>
        <div className="flex flex-col items-center gap-4">
            <div className="w-full h-[260px] relative rounded-xl border border-primary overflow-hidden">
                {image && <Image alt="" src={imagePre} fill quality={100} priority className="object-cover"/>}
                <span className={`absolute w-full h-full z-10 bg-black/50 flex items-center justify-center 
                flex-col gap-2 ${image && 'opacity-0'} hover:opacity-100 duration-300 cursor-pointer`}>
                    <ImageIcon/>
                    <span className="text-xs font-semibold text-center">Yazı Resmi Seç</span>
                    <input 
                    onChange={(e) => handleSelectImage(e, setImage, setImagePre)}
                    type="file" 
                    accept="image/*"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10" />
                </span>
            </div>

            <div className="w-full flex items-end gap-4">
                <div className="flex flex-col gap-3 w-full">
                    <Label htmlFor="title">
                    Başlık
                    </Label>
                    <Input id="title" type="text" placeholder="Yazı Başlığı" onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
            <Label>
            Yazı
            </Label>
            <div className="w-full h-[600px]">
              <Editor
              setData={setText}
              data={text}
              />
            </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
            <Label>
            Notlar
            </Label>
            <div className="w-full h-[200px]">
              <Editor
              setData={setNote}
              data={note}
              />
            </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSubmit}>
            Yayımla
          </Button>
        </div>
    </div>
  )
}

export default AddPage