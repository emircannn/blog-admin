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
import EditSettings from "./EditSetting"
import About from "./About"

const SettingsPage = () => {

  const [user, setUser] = useState<User>()
  const [settings, setSettings] = useState<Settings>()
  const [readCount, setReadCount] = useState<boolean>(false)
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

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}settings/settings`,)

          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setSettings(res.data.data)
            setReadCount(res.data.data.showReadCount)
          }
      } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(settings && readCount !== settings.showReadCount) {
      const handleUpdate = async () => {
        try {
        const formBody = {
          showReadCount: readCount
        }
        const token = localStorage.getItem("token")
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}settings/update?id=${settings?.id}`, formBody, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(res.data.error) {
          toast({title : res.data.message})
        } else {
          window.location.reload()
          toast({title : res.data.message})
        }
        } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
    }
    handleUpdate()
    }
  }, [readCount, settings, toast])

  return (
    <div className="flex flex-col gap-6 w-full overflow-y-auto pb-4">
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
          <h4 className="articleHeading">Site Ayarları</h4>
          <div className="flex items-center justify-between">

            <div className="flex items-center space-x-2">
              <Switch checked={readCount} onClick={() => setReadCount(!readCount)} id="read-mode" />
              <Label htmlFor="read-mode">Okunma Bilgisi Gizle/Göster</Label>
            </div>

            <div className="flex items-center gap-2">
              <About data={settings}/>
              <EditSettings data={settings}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SettingsPage