'use client'

import { useEffect, useState } from "react"
import SelectDialog from "./SelectDialog"
import SliderWrapper from "./SliderWrapper"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"

const Page = () => {

    const [data, setData] = useState<Texts[]>([])
    const { toast } = useToast()

    useEffect(() => {
        const getData = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}settings/getSlider`)
            if(res.data.error) {
            toast({title : res.data.message})
            } else {
            setData(res.data.data)
            }
        } catch (error: any) {
            toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
        }

    getData()
  }, [toast])

  return (
    <div className="max-w-[966px] w-full space-y-3">
        <div className="p-3 flex justify-between">
            <div className="flex flex-col gap-2">
            <p className="heading">
                Slider Ayarı
            </p>
                <p className="text-sm font-medium opacity-70">
                    Ana sayfanızda öne çıkacak yazıları buradan belirleyin. (En az iki tane seçmek zorundasınız!)
                </p>
            </div>

            <SelectDialog/>
        </div>
        <SliderWrapper data={data}/>
    </div>
  )
}

export default Page