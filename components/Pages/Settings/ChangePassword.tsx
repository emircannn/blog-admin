'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";

interface Props {
  data: string | undefined
}

const ChangePassword: React.FC<Props> = ({
  data
}) => {

  const { toast } = useToast()
  const [form, setForm] = useState({
    password : "",
    currentPassword : "",
    passwordConfirm : "",
  })

  const handleUpdate = async () => {
    try {
      if(form.password === form.passwordConfirm) {
        const token = localStorage.getItem("token")
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}user/updatePassword?username=${data}`, form, {
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
      }
      else {
        toast({title : 'Şifreniz eşleşmiyor'})
      }
    } catch (error: any) {
      toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Şifreni Değiştir</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Şifreni Değiştir</SheetTitle>
          <SheetDescription>
            Şifrenizi buradan değiştirin. Tamamlandığında kaydete tıklayın.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="lastpassword">
              Mevcut Şifre
            </Label>
            <Input id="lastpassword" type="password" placeholder="*****" onChange={(e) => setForm({...form, currentPassword: e.target.value})}/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="newpassword">
              Yeni Şifre
            </Label>
            <Input id="newpassword" type="password" placeholder="*****" onChange={(e) => setForm({...form, password: e.target.value})}/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="confirmpassword">
              Şifre Tekrarı
            </Label>
            <Input id="confirmpassword" type="password" placeholder="*****" onChange={(e) => setForm({...form, passwordConfirm: e.target.value})}/>
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

export default ChangePassword
