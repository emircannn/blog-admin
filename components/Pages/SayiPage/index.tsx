import { Button } from "@/components/ui/button"
import Link from "next/link"
import Item from "./Item"

const SayiPage = () => {
  return (
    <div className="flex flex-col gap-4 p-3 w-full h-full overflow-y-auto">
        <div className="flex items-center justify-between w-full">
            <h1 className="heading">Sayılar</h1>

                <Button>
                    <Link href='/ekle'>
                    Sayı Ekle
                    </Link>
                </Button>
        </div>

        <div className="grid grid-cols-3 gap-3">
            <Item/>
            <Item/>
            <Item/>
        </div>

    </div>
  )
}

export default SayiPage