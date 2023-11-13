'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TabsContent } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import { useState } from "react"

const Register = () => {
  const { toast } = useToast()

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    username: ''
  })
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      if(form.password === form.confirmPassword) {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}user/create`, form)
        if(!res.data.error) {
          toast({title : res.data.message, description: "Admin tarafından onaylandıktan sonra giriş yapabilirsiniz."})
          setLoading(false)
        }
      }
      else {
        setLoading(false)
        toast({title : "Şifreniz eşleşmiyor"})
      }
    } 
    catch (error: any) {
      toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      setLoading(false)
    }
  }

  return (
    <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Editör olarak kayıt ol</CardTitle>
            <CardDescription>
            Editör olarak kayıt olup, değerlendirme sonrası giriş yapmayı deneyin.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-2" onSubmit={handleRegister}>
            <div className="space-y-1">
              <Label htmlFor="name">İsim Soyisim</Label>
              <Input type="text" id="name" placeholder="İsim Soyisim" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Kullanıcı Adı</Label>
              <Input type="text" id="username" placeholder="Kullanıcı Adı" value={form.username} onChange={(e) => setForm({...form, username: e.target.value})} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Şifre</Label>
              <Input id="password" type="password" placeholder="****" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirmPassword">Şifre Tekrarı</Label>
              <Input id="confirmPassword" type="password" placeholder="****" value={form.confirmPassword} onChange={(e) => setForm({...form, confirmPassword: e.target.value})} />
            </div>
            </form>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full" disabled={loading} onClick={handleRegister}>Kayıt Ol</Button>
          </CardFooter>
        </Card>
      </TabsContent>
  )
}

export default Register