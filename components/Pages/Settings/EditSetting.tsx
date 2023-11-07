/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";


interface Props {
  data: Settings | undefined
}

const EditSettings: React.FC<Props> = ({
  data
}) => {

  const { toast } = useToast()
  const [form, setForm] = useState({
    twitter : data?.twitter,
    twitterLink : data?.twitterLink,
    email: data?.email,
    phone: data?.phone,
    instagram: data?.instagram,
    instagramLink: data?.instagramLink,
    patreon: data?.patreon,
  })

  const handleUpdate = async () => {
        try {
        const formBody = {
            twitter: form.twitter,
            twitterLink: form.twitterLink,
            email: form.email,
            phone: form.phone,
            instagram: form.instagram,
            instagramLink: form.instagramLink,
            patreon: form.patreon,
        }
        const token = localStorage.getItem("token")
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}settings/update?id=${data?.id}`, formBody, {
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
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline">İletişim Bilgilerini Güncelle</Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>İletişim Bilgilerini Düzenle</SheetTitle>
          <SheetDescription>
            İletişim bilgilerinizi burada düzenleyin ve tamamlandığında kaydete tıklayın.
          </SheetDescription>
          <SheetDescription>
            Twitter kullanıcı adı bilgisi girerken "@" işareti kullanmayınız!
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-4">
                <Label htmlFor="twitter">
                Twitter
                </Label>
                <Input placeholder={data?.twitter || 'Kullanıcı Adı'} value={form.twitter} onChange={(e) => setForm({...form, twitter: e.target.value})}/>
                <Input placeholder={data?.twitterLink || 'Link'} value={form.twitterLink} onChange={(e) => setForm({...form, twitterLink: e.target.value})}/>
            </div>
            <div className="flex flex-col gap-4">
                <Label htmlFor="twitter">
                Instagram
                </Label>
                <Input placeholder={data?.instagram || 'Kullanıcı Adı'} value={form.instagram} onChange={(e) => setForm({...form, instagram: e.target.value})}/>
                <Input placeholder={data?.instagramLink || 'Link'} value={form.instagramLink} onChange={(e) => setForm({...form, instagramLink: e.target.value})}/>
            </div>
            <div className="flex flex-col gap-4">
                <Label htmlFor="twitter">
                Patreon Linki
                </Label>
                <Input placeholder={data?.patreon || 'Link'} value={form.patreon} onChange={(e) => setForm({...form, patreon: e.target.value})}/>
            </div>
            <div className="flex flex-col gap-4">
                <Label htmlFor="twitter">
                Email & Telefon
                </Label>
                <Input placeholder={data?.email || 'Email'} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                <Input placeholder={data?.phone || 'Telefon'} value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}/>
            </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={handleUpdate}>Güncelle</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default EditSettings
