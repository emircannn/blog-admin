import ClientOnly from "@/components/ClientOnly"
import AddPage from "@/components/Pages/ArticlesPage/Add/AddPage"

const AddArticle = () => {
  return (
    <ClientOnly>
        <AddPage/>
      </ClientOnly>
  )
}

export default AddArticle