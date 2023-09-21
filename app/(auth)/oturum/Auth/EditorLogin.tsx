import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TabsContent } from "@/components/ui/tabs"

const EditorLogin = () => {
  return (
    <TabsContent value="editor">
        <Card>
          <CardHeader>
            <CardTitle>Editör Girişi</CardTitle>
            <CardDescription>
            Editör girişi, içerik oluşturuculara ve düzenleyicilere özel yetkilere sahip olmanızı sağlar.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Şifre</Label>
              <Input id="password" type="password" placeholder="****" />
            </div>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full">Giriş Yap</Button>
          </CardFooter>
        </Card>
      </TabsContent>
  )
}

export default EditorLogin