'use client'

import ClientOnly from '@/components/ClientOnly'
import ActualPage from '@/components/Pages/ActualPage/ActualPage'

const Page = () => {
  return (
    <ClientOnly>
        <ActualPage/>
    </ClientOnly>
  )
}

export default Page