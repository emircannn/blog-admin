'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


export function ChangePassword() {
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
            <Input id="lastpassword" type="password" placeholder="*****"/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="newpassword">
              Yeni Şifre
            </Label>
            <Input id="newpassword" type="password" placeholder="*****"/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="confirmpassword">
              Şifre Tekrarı
            </Label>
            <Input id="confirmpassword" type="password" placeholder="*****" />
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
