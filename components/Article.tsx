
'use client'
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

                <div className="absolute top-2 right-2 flex items-center gap-2">
                    <Link href={`/yazi/duzenle/test`} className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
                        <Pencil size={16} className="dark:text-darkerColor text-white"/>
                    </Link>
                    <button className="w-8 h-8 rounded-full bg-darkerColor hover:opacity-70 duration-300 dark:bg-white flex items-center justify-center shadow">
                        <Trash2 size={16} className="dark:text-darkerColor text-white"/>
                    </button>
                </div>
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