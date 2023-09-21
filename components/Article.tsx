
'use client'
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Article = () => {
    return ( 
        <div className="w-full rounded-xl">
            <div className="w-full aspect-[4/3] sm:aspect-[5/3] rounded-xl overflow-hidden relative flex">
            <Image alt="banner" src='/images/test.jpg' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
                    <span className="absolute top-1 left-1 sm:top-2 sm:left-2">
                    <Badge>
                        Tarih
                    </Badge>
                    </span>
            </div>
            <div className="p-2 pb-0 flex flex-col gap-3">
                <div className="articleHeading hover:underline duration-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <UserInfo/>
            </div>
        </div>
     );
}
 
export default Article;