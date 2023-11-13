'use client'

import { useContext, useEffect, useState } from "react"
import AddCon from "./AddCon"
import Yazi from "./Yazi"
import { useToast } from "@/components/ui/use-toast"
import { AuthContext } from "@/context/AuthContext"
import axios from "axios"
import Pagination from "@/components/Pagination"

const EditorPage = () => {

  const { toast } = useToast()
  const [data, setData] = useState<Contributions[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const {auth} = useContext<any>(AuthContext)

  useEffect(() => {
        const getData = async() => {
        try {
          const token = localStorage.getItem("token")
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}contribution/all?username=${auth.username}&page=${page}`,{
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
  }, [auth, page, toast])

  return (
    <div className="flex flex-col gap-4 p-3 w-full h-full overflow-y-auto">
            <div className="flex items-center justify-between w-full">
                <h1 className="heading">Sayılar</h1>
                <AddCon/>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full">
                {data?.length > 0 &&
                  data.map((_, i) => (
                    <Yazi key={i} data={_}/>
                  ))}
            </div>

            {totalPages > 1 &&
              <div className="flex justify-center">
                <Pagination
                  siblingCount={4}
                  onPageChange={setPage}
                  totalPages={totalPages}
                />
            </div>}
    </div>
  )
}

export default EditorPage