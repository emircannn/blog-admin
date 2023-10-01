import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";


export function EditProfile() {
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
            <Input id="name" placeholder="Emircan Yaşar"/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="username">
              Kullanıcı Adı
            </Label>
            <Input id="username" placeholder="emircann"/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="yasar.emircann@gmail.com" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="desc">
              Hakkımda
            </Label>
            <Textarea id="desc" className="!resize-none h-[150px]" placeholder="Bir şeyler yazın..." />
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
