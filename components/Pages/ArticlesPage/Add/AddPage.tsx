/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handleSelectImage } from "@/utils/helper"
import { ImageIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Combobox from "./Select"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
const Editor = dynamic(() => import('../../../Editor'), { 
  ssr: false 
});

const AddPage = () => {
    const [image, setImage] = useState()
    const [imagePre, setImagePre] = useState('')
    const [value, setValue] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [text, setText] = useState("")
    const [note, setNote] = useState("")

    const categories = [
        {
          value: "1",
          label: "Tarih",
        },
        {
          value: "2",
          label: "Felsefe",
        },
        {
          value: "3",
          label: "Siyaset",
        },
        {
          value: "4",
          label: "Din",
        },
        {
          value: "5",
          label: "Aktüel",
        },
    ]

    useEffect(() => {
        if (value) {
            const category = categories.find((c) => c.label.toLocaleLowerCase() === value.toLocaleLowerCase());
            if (category) {
                setSelectedCategory(category.value);
            }
        }
    }, [categories, value]);

  return (
    <div className="p-8 flex flex-col gap-3 w-full max-h-screen overflow-y-auto">
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
                    <Input id="title" type="text" placeholder="Yazı Başlığı"/>
                </div>
                <div className="shrink-0">
                <div className="flex flex-col gap-3 w-full">
                    <Label>
                        Kategori
                    </Label>
                    <Combobox
                    value={value}
                    setValue={setValue}
                    categories={categories}/>
                </div>
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
          <Button>
            Yayımla
          </Button>
        </div>
    </div>
  )
}

export default AddPage