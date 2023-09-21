import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TabsContent } from "@/components/ui/tabs"

const Register = () => {
  return (
    <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Editör olarak kayıt ol</CardTitle>
            <CardDescription>
            Editör olarak kayıt olup, değerlendirme sonrası giriş yapmayı deneyin.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">İsim Soyisim</Label>
              <Input type="text" id="name" placeholder="İsim Soyisim" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Kullanıcı Adı</Label>
              <Input type="text" id="username" placeholder="Kullanıcı Adı" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Şifre</Label>
              <Input id="password" type="password" placeholder="****" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirmPassword">Şifre Tekrarı</Label>
              <Input id="confirmPassword" type="password" placeholder="****" />
            </div>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full">Kayıt Ol</Button>
          </CardFooter>
        </Card>
      </TabsContent>
  )
}

export default Register