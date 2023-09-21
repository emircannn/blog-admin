'use client'
import Article from "@/components/Article"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ArticlesPage = () => {
  return (
    <div className="py-3 px-3 flex flex-col gap-4 w-full h-full overflow-y-auto">
        <div className="flex items-center justify-between w-full">
            <h1 className="heading">Yazılar</h1>

                <Button>
                    <Link href='/ekle'>
                    Yazı Ekle
                    </Link>
                </Button>
        </div>

        <div className="grid grid-cols-3 gap-3">
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
        </div>
    </div>
  )
}

export default ArticlesPage