import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";

interface Props {
  data: User | undefined
}

const EditProfile: React.FC<Props> = ({
  data
}) => {

  const { toast } = useToast()
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    about: '',
  })

  const handleUpdate = async () => {
    try {
      const formBody = {
        name: form.name ? form.name : undefined,
        email: form.email ? form.email : undefined,
        username: form.username ? form.username : undefined,
        about: form.about ? form.about : undefined,
      }
      const token = localStorage.getItem("token")
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}user/update?userName=${data?.username}`, formBody, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      if(res.data.error) {
        toast({title : res.data.message})
        window.location.reload()
      } else {
        toast({title : res.data.message})
        window.location.reload()
      }
    } catch (error: any) {
      toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Düzenle</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Profilini Düzenle</SheetTitle>
          <SheetDescription>
            Profilinizi burada düzenleyin. Tamamlandığında kaydete tıklayın.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">
              İsim Soyisim
            </Label>
            <Input id="name" placeholder={data?.name} value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="username">
              Kullanıcı Adı
            </Label>
            <Input id="username" placeholder={data?.username} value={form.username} onChange={(e) => setForm({...form, username: e.target.value})}/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder={data?.email} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="desc">
              Hakkımda
            </Label>
            <Textarea id="desc" className="!resize-none h-[150px]" placeholder="Bir şeyler yazın..." 
            value={form.about} 
            onChange={(e) => setForm({...form, about: e.target.value})}/>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={handleUpdate}>Kaydet</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default EditProfile
