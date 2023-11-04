import { Avatar } from "@/components/ui/avatar";
import { dateFormater } from "@/utils/helper";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link"

interface Props {
  data: Contributions;
}
const Yazi: React.FC<Props> = ({
  data
}) => {
  return (
        <div className="flex flex-col h-fit justify-between w-full gap-2 p-3 backgroundColor rounded-xl">
            <Link href={data.file} target='_blank' className="articleHeading hover:underline duration-300">{data?.title}</Link>

            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={data.user.image ? data.user.image : '/images/logo.png'}/>
              </Avatar>

              <span className="text-xs font-semibold">
                {data.user.name} - {data.user.username}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs font-medium opacity-75 w-full">
              <span className="">
                  Sayfa: {data?.startPage} - {data?.endPage}
              </span>

              <span>
                {dateFormater(data?.createdAt)}
              </span>
            </div>
        </div>
  )
}

export default Yazi