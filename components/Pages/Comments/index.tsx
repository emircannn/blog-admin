'use client'
import React, { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import CommentItem from './Comment'

const CommentsPage = () => {

  const { toast } = useToast()
  const [data, setData] = useState<Comments[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const getData = async() => {
      try {
          const token = localStorage.getItem("token")
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}comment/all?page=${page}`,{
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            })
          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setData(res.data.data)
            setTotalPages(res.data.totalPages)
          }
      } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }

    getData()
  }, [page, toast])


  return (
    <div className="p-3 flex flex-col gap-4 w-full overflow-y-auto">
        <h1 className="heading">Yorumlar</h1>

        <div className="grid grid-cols-2 gap-3">
            {data.length > 0 &&
            data?.map((v,i) => (
              <CommentItem key={i} data={v}/>
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

export default CommentsPage