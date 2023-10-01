import ClientOnly from "@/components/ClientOnly"
import EditorsPages from "@/components/Pages/EditorsPages"

const Page = () => {
    return (
      <ClientOnly>
      <EditorsPages/>
      </ClientOnly>
    )
  }
  
  export default Page