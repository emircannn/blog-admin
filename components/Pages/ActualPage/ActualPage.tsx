import { Button } from '../../ui/button'
import Link from 'next/link'
import Article from '../../Article'

const ActualPage = () => {
  return (
    <div className="py-3 px-3 flex flex-col gap-4 w-full h-full overflow-y-auto">
        <div className="flex items-center justify-between w-full">
            <h1 className="heading">Aktüel</h1>

                <Button>
                    <Link href='/aktuel/ekle'>
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

export default ActualPage