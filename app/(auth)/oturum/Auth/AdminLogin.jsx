'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TabsContent } from "@/components/ui/tabs"
import { useContext, useState } from "react"
import axios from 'axios'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/context/AuthContext"

const AdminLogin = () => {
  const { toast } = useToast()
  const {push} = useRouter()
  const {setAuth} = useContext(AuthContext)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}auth/adminLogin`, form)

      if(!res.data.error) {
        toast({title : res.data.message})
        localStorage.setItem('token', res.data.token)
        setLoading(false)
        setAuth(res.data.data)
        push('/')
      }
    } 
    catch (error) {
      toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      setLoading(false)
    }
  }

  return (
    <TabsContent value="admin">
        <Card>
          <CardHeader>
            <CardTitle>Admin Girişi</CardTitle>
            <CardDescription>
                Yönetici girişi yaparak daha fazla kontrol ve yetki elde edin!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Şifre</Label>
              <Input id="password" type="password" placeholder="****" value={form.password}  onChange={(e) => setForm({...form, password: e.target.value})}/>
            </div>
            </form>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full" onClick={handleLogin} disabled={loading}>Giriş Yap</Button>
          </CardFooter>
        </Card>
      </TabsContent>
  )
}

export default AdminLogin