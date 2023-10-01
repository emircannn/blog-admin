import ClientOnly from "@/components/ClientOnly"
import ProfilPage from "@/components/Pages/ProfilPage"

const Page = () => {
    return (
      <ClientOnly>
      <ProfilPage/>
      </ClientOnly>
    )
  }
  
  export default Page