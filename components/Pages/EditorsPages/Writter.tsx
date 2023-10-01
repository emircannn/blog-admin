
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Writer = () => {

    return (
        <div className="w-full aspect-[1/1.25] rounded-xl backgroundColor flex flex-col overflow-hidden">
            <div className="w-full !h-[40%] md:h-1/2 relative">
                <Image alt="banner" src='/images/wallpaper.jpg' fill quality={100} className="object-cover"/>

                <div className="w-full absolute -bottom-5 md:-bottom-10 left-0 flex items-center justify-center">
                    <div className="w-1/4 md:w-20 aspect-square rounded-full overflow-hidden relative border-2 border-thirth">
                        <Image alt="banner" src='/images/user.png' fill quality={100} className="object-cover"/>
                    </div>
                </div>
            </div>

            <div className="w-full !h-[60%] md:h-1/2 pt-6 md:pt-12 px-4 pb-4 flex flex-col justify-between text-center">
                <p className="line-clamp-1 font-semibold text-sm sm:text-base hover:underline duration-300">Editör</p>
                <p className="line-clamp-1 font-semibold text-xs sm:text-sm opacity-60">@editor</p>

                <Button variant='destructive'>
                    Sil
                </Button>
            </div>
        </div>
  )
}

export default Writer