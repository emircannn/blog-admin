'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
const Editor = dynamic(() => import('../../Editor'), { 
    ssr: false 
  });
interface Props {
    data: Settings | undefined
}

    const About: React.FC<Props> = ({
        data
    }) => {

    const { toast } = useToast()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [about, setAbout] = useState(data?.about_us)

    useEffect(() => {
        if(data) {
            setAbout(data.about_us)
        }
    }, [data])

    const handleUpdate = async () => {
        try {
            setLoading(true)
        const token = localStorage.getItem("token")
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}settings/update?id=${data?.id}`, {about: about}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(res.data.error) {
            setLoading(false)
            toast({title : res.data.message})
            window.location.reload()
        } else {
            setLoading(false)
            toast({title : res.data.message})
            window.location.reload()
        }
        } catch (error: any) {
            setLoading(false)
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant={'secondary'} onClick={() => setOpen(true)}>Hakkımızda Sayfası</Button>
        </DialogTrigger>
        <DialogContent className="min-w-[791px] w-fit">
            <DialogHeader>
            <DialogTitle>Hakkımızda Sayfası</DialogTitle>
            </DialogHeader>
            <div className="flex items-center flex-col gap-4 h-[650px]">
                <Editor
                setData={setAbout}
                data={about}
                />
            </div>
            <DialogFooter>
                <Button onClick={handleUpdate} disabled={loading}>
                    {loading ? 'Yükleniyor...' : 'Güncelle'}
                </Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    )
    }

    export default About