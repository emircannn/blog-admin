import { Button } from "@/components/ui/button"
import Category from "./Category"
import Link from "next/link"

const CategoryPage = () => {
  return (
    <div className="py-3 px-3 flex flex-col gap-4 w-full h-full overflow-y-auto">
        <div className="flex items-center justify-between w-full">
            <h1 className="heading">Kategoriler</h1>

                <Button>
                    <Link href='/ekle'>
                    Ekle
                    </Link>
                </Button>
        </div>

        <div className="grid grid-cols-4 gap-3">
            <Category/>
            <Category/>
            <Category/>
            <Category/>
        </div>
    </div>
  )
}

export default CategoryPage