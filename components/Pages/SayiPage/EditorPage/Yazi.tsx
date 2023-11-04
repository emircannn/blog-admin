import { dateFormater } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link"

interface Props {
  data: Contributions;
}
const Yazi: React.FC<Props> = ({
  data
}) => {
  return (
    <div className="flex gap-3 w-full rounded-xl p-3 backgroundColor relative">
        <div className="relative h-[100px] shrink-0 aspect-[7/9] rounded-xl border border-thirth overflow-hidden">
            <Image alt="image" src={data?.magazine?.image} fill className="object-cover"/>
        </div>

        <div className="flex flex-col h-full justify-between w-full">
            <Link href={data?.magazine?.file} target='_blank' className="articleHeading hover:underline duration-300">{data?.magazine?.title}</Link>
            <Link href={data?.file} target="_blank"  className="text-xs font-semibold hover:underline duration-300">{data?.title}</Link>
            <div className="flex items-center justify-between text-xs font-medium opacity-75 w-full">
              <span className="">
                  Sayfa: {data?.startPage} - {data?.endPage}
              </span>

              <span>
                {dateFormater(data?.createdAt)}
              </span>
            </div>
        </div>
    </div>
  )
}

export default Yazi