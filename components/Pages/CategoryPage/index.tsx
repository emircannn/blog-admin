'use client'
import Category from "./Category"
import AddCategory from "./AddCategory"
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"

const CategoryPage = () => {

  const { toast } = useToast()
  const [data, setData] = useState<CategoryType[]>([])

  useEffect(() => {
    const getData = async() => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}category/getAll`)
        if(res.data.error) {
          toast({title : res.data.message})
        } else {
          setData(res.data.data)
        }
      } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }

    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div className="py-3 px-3 flex flex-col gap-4 w-full h-full overflow-y-auto">
        <div className="flex items-center justify-between w-full">
            <h1 className="heading">Kategoriler</h1>

                <AddCategory/>
        </div>

        {data?.length > 0 &&
          <div className="grid grid-cols-4 gap-3">
            {data.map((_) => (
              <Category key={_.id} data={_}/>
            ))}
          </div>
        }
    </div>
  )
}

export default CategoryPage