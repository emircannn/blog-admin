/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


export function EditSocialMedia() {
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
            <Input placeholder="Kullanıcı Adı"/>
            <Input placeholder="Profil Linki"/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="facebook">
            Facebook
            </Label>
            <Input placeholder="Kullanıcı Adı"/>
            <Input placeholder="Profil Linki"/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="instagram">
            Instagram
            </Label>
            <Input placeholder="Kullanıcı Adı"/>
            <Input placeholder="Profil Linki"/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="youtube">
            Youtube
            </Label>
            <Input placeholder="Kanal Adı"/>
            <Input placeholder="Kanal Linki"/>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Kaydet</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
