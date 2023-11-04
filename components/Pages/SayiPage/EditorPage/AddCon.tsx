import Pagination from "@/components/Pagination"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { AuthContext } from "@/context/AuthContext"
import axios from "axios"
import { File } from "lucide-react"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"

const AddCon = () => {

    const { toast } = useToast()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState<any>({
        file: '',
        title: '',
        startPage: 0,
        endPage: 0,
        magazineId: ''
    })

    const handleFileChange = (event: any) => {
        const _file = event.target.files[0];
        if (_file) {
            setForm({...form, file: _file})
        }
    };

  const [data, setData] = useState<Magazine[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const {auth} = useContext<any>(AuthContext)

  useEffect(() => {
        const getData = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}magazine/getAll?page=${page}`)
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

  const handleSubmit = async() => {
    try {
        setLoading(true);
        if(form.file && form.title && form.startPage && form.magazineId && form.endPage) {
            const token = localStorage.getItem("token")
            const formData = new FormData()
            formData.append('endPage', form.endPage)
            formData.append('startPage', form.startPage)
            formData.append('title', form.title)
            formData.append('magazineId', form.magazineId)
            formData.append('userId', auth.id)
            formData.append('filePdf', form.file)
            const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}contribution/create`, formData,{
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            })
        
            if(res.data.error) {
                toast({title : res.data.message})
                setLoading(false)
                window.location.reload()
                } else {
                toast({title : res.data.message})
                setLoading(false)
                setOpen(false)
                window.location.reload()
                }
            } else {
                setLoading(false)
                toast({title : 'Tüm alanlar zorunludur'})
        }
    } catch (error: any) {
        setLoading(false)
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
    }
}

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button onClick={() => setOpen(true)}>Sayıya Yazı Ekle</Button>
        </DialogTrigger>
        <DialogContent className="w-[500px]">
            <DialogHeader>
                <DialogTitle>Sayıya Yazı Ekle</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-4 w-full">
                <div className="grid grid-cols-2 gap-2">
                    {data?.length > 0 &&
                    data?.map((_) => (
                        <label key={_.id} htmlFor={_.id} className="flex gap-3 rounded-xl p-2 backgroundColor items-center">
                        <input type="radio" name="sayi" value={_.id} checked={_.id === form.magazineId} onChange={(e) => setForm({...form, magazineId: e.target.value})}/>
                        <div className="relative h-[70px] aspect-[7/9] rounded-xl border border-thirth overflow-hidden">
                            <Image alt="file" src={_.image} fill className="object-cover"/>
                        </div>
                        <p className="text-xs font-semibold">{_.title}</p>
                    </label>
                    ))}
                </div>

                {totalPages > 1 &&
                <div className="flex justify-center">
                    <Pagination
                    siblingCount={3}
                    onPageChange={setPage}
                    totalPages={totalPages}
                    />
                </div>}

                <div className="flex flex-col gap-2">
                    <Label>
                        Yazı Başlığı
                    </Label>
                    <Input placeholder="Bir şeyler yazın..." onChange={(e) => setForm({...form, title: e.target.value})} value={form.title}/>
                </div>

                <div className="flex items-center max-w-[452px] gap-3 px-4 py-3 rounded-xl backgroundColor relative cursor-pointer">
                    <File/>
                    <span className="line-clamp-1 font-semibold text-sm">
                        {form.file ? form.file?.name: 'Yazı Dosyası Seç'}
                    </span>

                    <input type="file" accept=".pdf" onChange={handleFileChange} className="absolute top-0 left-0 w-full h-full opacity-0" />
                </div>

                <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <Label>
                            Sayfa Başlangıcı
                        </Label>
                        <Input placeholder="Bir şeyler yazın..." type="number" onChange={(e) => setForm({...form, startPage: e.target.value})} value={form.startPage}/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <Label>
                            Sayfa Bitişi
                        </Label>
                        <Input placeholder="Bir şeyler yazın..." type="number" onChange={(e) => setForm({...form, endPage: e.target.value})} value={form.endPage}/>
                    </div>
                </div>

                <div className="flex justify-end">
                        <Button disabled={loading} onClick={handleSubmit}>
                            {loading ? 'Yükleniyor...' : 'Kaydet'}
                        </Button>
                    </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default AddCon