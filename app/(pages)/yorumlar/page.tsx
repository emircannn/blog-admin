import ClientOnly from "@/components/ClientOnly"
import CommentsPage from "@/components/Pages/Comments"

const Page = () => {
  return (
    <ClientOnly>
    <CommentsPage/>
    </ClientOnly>
  )
}

export default Page