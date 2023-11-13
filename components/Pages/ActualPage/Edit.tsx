/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handleSelectImage } from "@/utils/helper"
import { ImageIcon } from "lucide-react"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { AuthContext } from "@/context/AuthContext"
import axios from "axios"
import { useParams } from "next/navigation"
const Editor = dynamic(() => import('../../Editor'), { 
  ssr: false 
});

const EditPage = () => {
  const [_text, setText_] = useState<any>()
    const [image, setImage] = useState<any>()
    const [name, setName] = useState<any>()
    const [imagePre, setImagePre] = useState<any>()
    const [text, setText] = useState<any>()
    const [note, setNote] = useState<any>()
    const { toast } = useToast()
    const {auth} = useContext<any>(AuthContext)
    const params = useParams()

    useEffect(() => {
      const getData = async() => {
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}actual/getText?seo=${params.seo}`)
          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setText_(res.data.data)
          }
        } catch (error: any) {
          toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
      }

      getData()
    }, [])

    useEffect(() => {
      if(_text) {
        setText(_text?.text)
        setNote(_text?.note)
      }
    }, [_text])


    const handleSubmit = async() => {
      try {
          const token = localStorage.getItem("token")
          const formData = new FormData()
          name && formData.append('name', name)
          formData.append('textImage', image)
          formData.append('text', text)
          formData.append('note', note)
          formData.append('user', _text.userId)
          const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}actual/update?seo=${params.seo}`,formData,{
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
      } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }

  return (
    <div className="p-8 flex flex-col gap-3 w-full max-h-screen overflow-y-auto">
        <div className="flex flex-col items-center gap-4">
            <div className="w-full h-[260px] relative rounded-xl border border-primary overflow-hidden">
                <Image alt="" src={imagePre ? imagePre : _text?.image} fill quality={100} priority className="object-cover"/>
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
                    <Input id="title" type="text" placeholder={_text?.title} onChange={(e) => setName(e.target.value)}/>
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
            Güncelle
          </Button>
        </div>
    </div>
  )
}

export default EditPage