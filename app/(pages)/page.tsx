
import ArticlesPage from '@/components/Pages/ArticlesPage/index'
import ClientOnly from "@/components/ClientOnly"

export default function Home() {

  return (
      <ClientOnly>
        <ArticlesPage/>
      </ClientOnly>
  )
}
