import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Twitter } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface Props {
    className?: string;
    lg?: boolean ,
    date?: boolean ,
    readCount?: boolean
}

const UserInfo: React.FC<Props> = ({className = 'w-7', lg=false, date=true, readCount=true}) => {
    return ( 
        <div className="flex items-center flex-wrap gap-2">
            <HoverCard>
                <HoverCardTrigger>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className={twMerge(className, "aspect-square rounded-full relative overflow-hidden")}>
                        <Image alt="banner" src='/images/user.png' fill quality={100} className="object-cover"/>
                    </div>
                    <span className={`${lg ? 'text-sm' : 'text-xs'} font-semibold line-clamp-1`}>Editör</span>
                </div>
                </HoverCardTrigger>

                <HoverCardContent className="backgroundColor border dark:border-darkerColor/60 shadow-md w-80">
                    <div className="flex space-x-4">
                        <Avatar>
                            <AvatarImage src="/images/user.png"/>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold line-clamp-1">Editör - @editör</h4>
                            <p className="text-xs line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga est neque, cum nisi tempora!
                            </p>

                            <div className="flex items-center gap-2 mt-2">
                                    <Twitter size={20} className="duration-300 hover:opacity-60"/>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            {date && <span className={`opacity-60 ${lg ? 'text-sm' : 'text-xs'}`}>10/09/2023</span>}

            {readCount &&
            <div className={`${lg ? 'text-sm' : 'text-xs'} opacity-60`}>
            1.8b okunma
            </div>}
        </div>
     );
}
 
export default UserInfo
;  