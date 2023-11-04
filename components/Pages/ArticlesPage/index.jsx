'use client'

import Article from "@/components/Article"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import Pagination from '@/components/Pagination'
import { AuthContext } from "@/context/AuthContext"

const ArticlesPage = () => {

  const { toast } = useToast()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const {auth} = useContext(AuthContext)

  useEffect(() => {
    const getData = async() => {
      try {
        if(auth.role === 'ADMIN') {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}article/getAll?page=${page}`)
          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setData(res.data.data)
            setTotalPages(res.data.totalPages)
          }
        } else {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}article/getUserText?username=${auth.username}&page=${page}`)
          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setData(res.data.data)
            setTotalPages(res.data.totalPages)
          }
        }
      } catch (error) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }

    getData()
  }, [page, toast, auth])

  return (
    <div className="py-3 px-3 flex flex-col gap-4 w-full h-full overflow-y-auto">
        <div className="flex items-center justify-between w-full">
            <h1 className="heading">Yazılar</h1>

                <Button>
                    <Link href='/yazi/ekle'>
                    Yazı Ekle
                    </Link>
                </Button>
        </div>

        <div className="grid grid-cols-3 gap-3">
            {data?.map((item, i) => (
              <Article data={item} key={i}/>
            ))}
        </div>

        {totalPages > 1 &&
          <div className="flex justify-center">
            <Pagination
              onPageChange={setPage}
              totalPages={totalPages}
            />
        </div>}
    </div>
  )
}

export default ArticlesPage