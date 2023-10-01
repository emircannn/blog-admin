import { ImageIcon } from "lucide-react"
import Image from "next/image"

const BannerProfile = () => {
  return (
    <div className="w-full h-[200px] relative backgroundColor border-2 border-thirth">
            <Image alt="banner" src='/images/wallpaper.jpg' fill quality={100} priority className="object-cover"/>
            <span className="absolute w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-2 opacity-0 hover:opacity-100 duration-300 cursor-pointer">
                <ImageIcon/>
                <span className="text-sm font-semibold">Kapak Resmi Seç</span>
            </span>

            <div className="absolute z-20 w-24 aspect-square rounded-full border-2 border-thirth backgroundColor left-12 -bottom-12 overflow-hidden">
                <div className="w-full h-full">
                <Image alt="profil" src='/images/user.png' fill quality={100} priority className="object-cover"/>
                <span className="absolute w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-2 opacity-0 hover:opacity-100 duration-300 cursor-pointer">
                    <ImageIcon/>
                    <span className="text-xs font-semibold text-center">Profil Resmi Seç</span>
                </span>
                </div>
            </div>
        </div>
  )
}

export default BannerProfile