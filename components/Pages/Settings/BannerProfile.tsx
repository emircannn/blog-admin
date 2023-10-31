'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { useToast } from "@/components/ui/use-toast"
import { handleSelectImage } from "@/utils/helper"
import axios from "axios"
import { ImageIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Image {
    image: string | null | undefined,
    bannerImage: string | null | undefined,
    username: string | null | undefined,
}

const BannerProfile: React.FC<Image> = ({
    image,
    bannerImage,
    username,
}) => {

    const [banner, setBanner] = useState()
    const [bannerPre, setBannerPre] = useState()
    const [imageP, setImageP] = useState()
    const [imagePre, setImagePre] = useState()
    const { toast } = useToast()

    useEffect(() => {
        if(imageP) {
            const uploadImage = async() => {
                try {
                    const token = localStorage.getItem("token")
                    const formData = new FormData()
                    formData.append('image', imageP)
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}user/updateImage?username=${username}`, formData,{
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

            uploadImage()
        }
    } , [imageP])

    useEffect(() => {
        if(banner) {
            const uploadImage = async() => {
                try {
                    const token = localStorage.getItem("token")
                    const formData = new FormData()
                    formData.append('image', banner)
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}user/updateCoverImage?username=${username}`, formData,{
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

            uploadImage()
        }
    } , [banner])

  return (
    <div className="w-full h-[200px] relative backgroundColor border-2 border-thirth">
            <Image alt="banner" src={bannerPre ? bannerPre : bannerImage ? bannerImage : '/images/logo.png'} fill quality={100} priority className="object-cover"/>
            <span className="absolute w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-2 opacity-0 hover:opacity-100 duration-300 cursor-pointer">
                <ImageIcon/>
                <span className="text-sm font-semibold">Kapak Resmi Seç</span>
                <input type="file" onChange={(e) => handleSelectImage(e, setBanner, setBannerPre)} className="absolute top-0 left-0 w-full h-full z-10 opacity-0"/>
            </span>

            <div className="absolute z-20 w-24 aspect-square rounded-full border-2 border-thirth backgroundColor left-12 -bottom-12 overflow-hidden">
                <div className="w-full h-full">
                <Image alt="profil" src={imagePre ? imagePre : image ? image : '/images/logo.png'} fill quality={100} priority className="object-cover"/>
                <span className="absolute w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-2 opacity-0 hover:opacity-100 duration-300 cursor-pointer">
                    <ImageIcon/>
                    <span className="text-xs font-semibold text-center">Profil Resmi Seç</span>
                    <input type="file" onChange={(e) => handleSelectImage(e, setImageP, setImagePre)} className="absolute top-0 left-0 w-full h-full z-10 opacity-0"/>
                </span>
                </div>
            </div>
        </div>
  )
}

export default BannerProfile