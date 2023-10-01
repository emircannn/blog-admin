import ClientOnly from "@/components/ClientOnly"
import SettingsPage from "@/components/Pages/Settings"

const Page = () => {
    return (
      <ClientOnly>
      <SettingsPage/>
      </ClientOnly>
    )
  }
  
  export default Page