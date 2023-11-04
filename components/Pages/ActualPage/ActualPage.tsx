import { Button } from '../../ui/button'
import Link from 'next/link'
import Article from '../../Article'
import { useToast } from '@/components/ui/use-toast'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import axios from 'axios'
import Pagination from '@/components/Pagination'

const ActualPage = () => {

  const { toast } = useToast()
  const [data, setData] = useState<Texts[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const {auth} = useContext<any>(AuthContext)

  useEffect(() => {
    const getData = async() => {
      try {
        if(auth.role === 'ADMIN') {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}actual/getAll?page=${page}`)
          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setData(res.data.data)
            setTotalPages(res.data.totalPages)
          }
        } else {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}actual/getUserText?username=${auth.username}&page=${page}`)
          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setData(res.data.data)
            setTotalPages(res.data.totalPages)
          }
        }
      } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }

    getData()
  }, [page, toast, auth])

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
            {data?.map((item, i) => (
              <Article data={item} key={i} url={`${process.env.NEXT_PUBLIC_URL}actual/delete?seo=${item?.seo}`} actual/>
            ))}
        </div>

        {totalPages > 1 &&
          <div className="flex justify-center">
            <Pagination
              onPageChange={setPage}
              totalPages={totalPages}
              siblingCount={4}
            />
        </div>}
    </div>
  )
}

export default ActualPage