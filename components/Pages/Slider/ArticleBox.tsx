import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

const ArticleBox = () => {
  return (
    <div className="w-full p-3 rounded-xl backgroundColor flex items-center gap-2">
        <Checkbox/>

        <div className="w-[60px] aspect-square rounded-lg relative overflow-hidden shrink-0">
            <Image
            alt="article"
            src={'/images/test.jpg'}
            fill
            className='object-cover'
            priority/>
        </div>

        <p className="ml-2 text-sm font-semibold line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  )
}

export default ArticleBox