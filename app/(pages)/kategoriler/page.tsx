'use client'

import ClientOnly from '@/components/ClientOnly'
import CategoryPage from '@/components/Pages/CategoryPage'

const Page = () => {
  return (
    <ClientOnly>
        <CategoryPage/>
    </ClientOnly>
  )
}

export default Page