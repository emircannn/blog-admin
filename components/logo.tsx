import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <>
        <div className="relative overflow-hidden w-[120px] sm:w-[200px] h-[60px] sm:h-[75px] dark:hidden">
        <Link href='/'>
            <Image alt="" src='/images/logolight.png' fill quality={100} className="object-contain"/>
        </Link>
        </div>
        <div className="relative overflow-hidden w-[120px] sm:w-[200px] h-[60px] sm:h-[75px] hidden dark:flex">
        <Link href='/'>
            <Image alt="" src='/images/logodark.png' fill quality={100} className="object-contain"/>
        </Link>
        </div>
        </>
     );
}
 
export default Logo;