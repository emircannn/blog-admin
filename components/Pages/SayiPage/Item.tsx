import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const Item = () => {
  return (
    <div className="w-full flex flex-col p-3 backgroundColor rounded-xl gap-3">
        <div className="aspect-[1/1.35] shrink-0 w-full relative overflow-hidden rounded-xl flex">
        <Image alt="banner" src='/images/kapak.png' fill quality={100} className="object-cover hover:scale-105 duration-300"/>

        <span className="absolute bottom-2 right-2">
            <Badge>11/10/2023</Badge>
        </span>

        </div>

        <div className="flex items-center justify-between gap-2">
        <h2 className="articleHeading hover:underline !line-clamp-1">
            Örnek Sayı
        </h2>

        <span className="text-xs font-semibold opacity-60">1.7b okunma</span>
        </div>
    </div>
  )
}

export default Item