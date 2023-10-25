
import { Pencil, Trash2 } from "lucide-react"
import Image from "next/image"

const Category = () => {
  return (
    <div className="w-full rounded-xl p-3 backgroundColor aspect-square flex flex-col justify-evenly items-center relative">
        <div  className="w-24 aspect-square rounded-full overflow-hidden relative border-thirth border-2">
            <Image alt="" src='/images/category.webp' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </div>

        <div className="flex flex-col gap-1 items-center">
        <h6 className="text-sm font-semibold sm:text-base hover:underline duration-300">Felsefe</h6>
        <p className="text-xs sm:text-sm font-medium opacity-60">21 Yazı</p>
        </div>

        <div className="absolute top-2 right-2 flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
                <Pencil size={16} className="dark:text-darkerColor text-white"/>
            </button>
            <button className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
                <Trash2 size={16} className="dark:text-darkerColor text-white"/>
            </button>
        </div>
    </div>
  )
}

export default Category