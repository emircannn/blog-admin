import { Button } from "@/components/ui/button"

const Comment = () => {
  return (
    <div className="w-full rounded-xl flex flex-col gap-3 p-3 backgroundColor">
        <div className="flex gap-3 flex-col">
            <h2 className="articleHeading">Lorem ipsum dolor sit amet.</h2>

            <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, architecto? Quaerat accusamus officiis laborum libero expedita perspiciatis, incidunt rem quis.
            </p>
            
            <div className="flex items-center gap-3 flex-wrap">
            <p className="text-sm font-semibold">Emircan Yaşar</p>
            <p className="text-xs font-semibold opacity-75">yasar.emircann@gmail.com</p>
            <span className="text-xs">25/09/2023</span>
            </div>

            <div>
            <Button variant='destructive'>
                Sil
            </Button>
            </div>
        </div>
    </div>
  )
}

export default Comment