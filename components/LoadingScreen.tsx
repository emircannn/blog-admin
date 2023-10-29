import Image from "next/image"

const LoadingScreen = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 backgroundColor flex items-center justify-center z-50">
        <div className="w-[150px] aspect-square relative">
            <Image alt="loading" src={'/images/loading.gif'} fill quality={100} className="object-contain"/>
        </div>
    </div>
  )
}

export default LoadingScreen