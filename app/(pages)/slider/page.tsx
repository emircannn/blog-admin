import ClientOnly from "@/components/ClientOnly"
import Page from "@/components/Pages/Slider/Page"


const Slider = () => {
  return (
    <ClientOnly>
        <Page/>
    </ClientOnly>
  )
}

export default Slider