import BannerProfile from "@/components/Pages/Settings/BannerProfile"
import UserProfil from "./UserProfil"
import Social from "./Social"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
          <BannerProfile/>

        <div className="px-5 mt-10">
          <UserProfil/>
        </div>
        
        <div className="flex pl-12 pr-5 w-full">
          <Social/>
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