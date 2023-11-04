import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { dateFormater, formatReadCount } from "@/utils/helper";
import Link from "next/link";

interface Props {
    className?: string;
    lg?: boolean ,
    date?: boolean ,
    readCount?: boolean
    data: any;
    createdAt: string,
    _readCount: number;
}

const UserInfo: React.FC<Props> = ({className = 'w-7', lg=false, date=true, readCount=true, data, createdAt, _readCount}) => {
    return ( 
        <div className="flex items-center flex-wrap gap-2">
            <HoverCard>
                <HoverCardTrigger>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className={twMerge(className, "aspect-square rounded-full relative overflow-hidden")}>
                        <Image alt="banner" src={data?.image ? data.image : '/images/logo.png'} fill quality={100} className="object-cover"/>
                    </div>
                    <span className={`${lg ? 'text-sm' : 'text-xs'} font-semibold line-clamp-1`}>{data?.name}</span>
                </div>
                </HoverCardTrigger>

                <HoverCardContent className="backgroundColor border dark:border-darkerColor/60 shadow-md w-80">
                    <div className="flex space-x-4">
                        <Avatar>
                            <AvatarImage src={data?.image ? data.image : '/images/logo.png'} className="object-cover"/>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold flex flex-wrap">{data?.name} - @{data?.username}</h4>
                            <p className="text-xs line-clamp-2">
                                {data?.about}
                            </p>

                            <div className="flex items-center gap-2 mt-2">
                                    {data?.twitterLink&& 
                                    <Link href={data?.twitterLink}>
                                    <Twitter size={20} className="duration-300 hover:opacity-60"/>
                                    </Link>}
                                    {data?.facebookLink &&
                                    <Link href={data?.facebookLink}>
                                    <Facebook size={20} className="duration-300 hover:opacity-60"/>
                                    </Link>}
                                    {data?.instagramLink &&
                                    <Link href={data?.instagramLink}>
                                    <Instagram size={20} className="duration-300 hover:opacity-60"/>
                                    </Link>}
                                    {data?.youtubeLink && 
                                    <Link href={data?.youtubeLink}>
                                    <Youtube size={20} className="duration-300 hover:opacity-60"/>
                                    </Link>}
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            {date && <span className={`opacity-60 ${lg ? 'text-sm' : 'text-xs'}`}>{dateFormater(createdAt)}</span>}

            {readCount &&
            <div className={`${lg ? 'text-sm' : 'text-xs'} opacity-60`}>
            {formatReadCount(_readCount)} okunma
            </div>}
        </div>
     );
}
 
export default UserInfo
;  