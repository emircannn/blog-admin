import ClientOnly from "@/components/ClientOnly"
import EditPage from "@/components/Pages/ArticlesPage/Edit"

const Edit = ({ params }: { params: { seo: string } }) => {
  return (
    <ClientOnly>
      <EditPage/>
    </ClientOnly>
  )
}

export default Edit