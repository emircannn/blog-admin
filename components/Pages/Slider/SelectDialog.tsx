'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ArticleBox from "./ArticleBox"
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import Pagination from "@/components/Pagination"

const SelectDialog = () => {

  const [data, setData] = useState<Texts[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const { toast } = useToast()

  useEffect(() => {
    const getData = async() => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}settings/getSliderTexts?page=${page}`)
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
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">Yazı Seç</Button>
        </DialogTrigger>

        <DialogContent className="min-w-[900px] h-fit">
            <DialogHeader>
            <DialogTitle>Slider için yazı seç</DialogTitle>
            <DialogDescription>
                Görsel optimizasyon açısından sorun yaşamamak için en az 2 tane yazı seçmelisiniz...
            </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-3 gap-2">
                {
                  data?.length > 0 &&
                  data?.map((_) => (
                    <ArticleBox key={_.id} data={_}/>
                  ))
                }
            </div>

            {totalPages > 1 &&
          <div className="flex justify-center">
            <Pagination
              siblingCount={3}
              onPageChange={setPage}
              totalPages={totalPages}
            />
        </div>}
        </DialogContent>
    </Dialog>
  )
}

export default SelectDialog