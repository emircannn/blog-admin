'use client'
import BannerProfile from "@/components/Pages/Settings/BannerProfile"
import UserProfil from "./UserProfil"
import Social from "./Social"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useContext, useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import { AuthContext } from "@/context/AuthContext"

const SettingsPage = () => {

  const [user, setUser] = useState<User>()
  const {auth} = useContext<any>(AuthContext)

  const { toast } = useToast()

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}user/getUser?username=${auth.username}`,)

          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setUser(res.data.data)
          }
      } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col gap-6 w-full">
          <BannerProfile
          bannerImage={user?.coverImage}
          image={user?.image}
          username={auth.username}
          />

        <div className="px-5 mt-10">
          <UserProfil data={user}/>
        </div>
        
        <div className="flex pl-12 pr-5 w-full">
          <Social data={user}/>
        </div>
        <div className="flex flex-col pl-12 pr-5 w-full gap-3">
          <h4 className="articleHeading">Okunma Bilgisi Ayarı</h4>

          <div className="flex items-center space-x-2">
            <Switch id="read-mode" />
            <Label htmlFor="read-mode">Okunma Bilgisi Göster/Gizle</Label>
          </div>
        </div>
    </div>
  )
}

export default SettingsPage