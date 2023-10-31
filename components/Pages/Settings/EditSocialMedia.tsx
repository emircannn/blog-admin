/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";


interface Props {
  data: User | undefined
}

const EditSocial: React.FC<Props> = ({
  data
}) => {

  const { toast } = useToast()
  const [form, setForm] = useState({
    twitter : "",
    twitterLink : "",
    facebook : "",
    facebookLink : "",
    instagram : "",
    instagramLink : "",
    youtube : "",
    youtubeLink : "",
  })

  const handleUpdate = async () => {
    try {
      const formBody = {
        twitter: form.twitter ? form.twitter : undefined,
        twitterLink: form.twitterLink ? form.twitterLink : undefined,
        facebook: form.facebook ? form.facebook : undefined,
        facebookLink: form.facebookLink ? form.facebookLink : undefined,
        youtubeLink: form.youtubeLink ? form.youtubeLink : undefined,
        instagram: form.instagram ? form.instagram : undefined,
        instagramLink: form.instagramLink ? form.instagramLink : undefined,
        youtube: form.youtube ? form.youtube : undefined,
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
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline">Düzenle</Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Sosyal Medya</SheetTitle>
          <SheetDescription>
            Sosyal Medya bilgilerinizi burada düzenleyin ve tamamlandığında kaydete tıklayın.
          </SheetDescription>
          <SheetDescription>
            Kullanıcı Adı bilgisi girerken "@" işareti kullanmayınız!
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="twitter">
              Twitter
            </Label>
            <Input placeholder="Kullanıcı Adı" value={form.twitter} onChange={(e) => setForm({...form, twitter: e.target.value})}/>
            <Input placeholder="Profil Linki" value={form.twitterLink} onChange={(e) => setForm({...form, twitterLink: e.target.value})}/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="facebook">
            Facebook
            </Label>
            <Input placeholder="Kullanıcı Adı" value={form.facebook} onChange={(e) => setForm({...form, facebook: e.target.value})}/>
            <Input placeholder="Profil Linki" value={form.facebookLink} onChange={(e) => setForm({...form, facebookLink: e.target.value})}/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="instagram">
            Instagram
            </Label>
            <Input placeholder="Kullanıcı Adı" value={form.instagram} onChange={(e) => setForm({...form, instagram: e.target.value})}/>
            <Input placeholder="Profil Linki" value={form.instagramLink} onChange={(e) => setForm({...form, instagramLink: e.target.value})}/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="youtube">
            Youtube
            </Label>
            <Input placeholder="Kanal Adı" value={form.youtube} onChange={(e) => setForm({...form, youtube: e.target.value})}/>
            <Input placeholder="Kanal Linki" value={form.youtubeLink} onChange={(e) => setForm({...form, youtubeLink: e.target.value})}/>
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

export default EditSocial
