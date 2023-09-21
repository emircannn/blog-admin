'use client'

import ClientOnly from '@/components/ClientOnly'
import SayiPage from '@/components/Pages/SayiPage'

const Page = () => {
  return (
    <ClientOnly>
        <SayiPage/>
    </ClientOnly>
  )
}

export default Page