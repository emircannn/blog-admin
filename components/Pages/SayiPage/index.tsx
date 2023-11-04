import Item from "./Item"
import Add from "./Add"
import { useToast } from "@/components/ui/use-toast"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import axios from "axios"
import Pagination from "@/components/Pagination"
import EditorPage from "./EditorPage"
import AddCon from "./EditorPage/AddCon"

const SayiPage = () => {

  const { toast } = useToast()
  const [data, setData] = useState<Magazine[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const {auth} = useContext<any>(AuthContext)

  useEffect(() => {
    const getData = async() => {
      try {
        if(auth.role === 'ADMIN') {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}magazine/all?page=${page}`)
          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setData(res.data.data)
            setTotalPages(res.data.totalPages)
          }
        } else {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}magazine/getAll?username=${auth.username}&page=${page}`)
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

  if(auth.role !== 'ADMIN') {
    return <EditorPage/>
  }

  return (
    <div className="flex flex-col gap-4 p-3 w-full h-full overflow-y-auto">
        <div className="flex items-center justify-between w-full">
            <h1 className="heading">Sayılar</h1>
              <div className="flex gap-3">
                <Add/>
                <AddCon/>
              </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
            {data?.length > 0 &&
              data?.map((_, i) => (
                <Item key={i} data={_}/>
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

export default SayiPage