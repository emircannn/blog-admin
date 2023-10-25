'use client'

import ClientOnly from '@/components/ClientOnly'
import AddPage from '../../../../components/Pages/ActualPage/AddPage'

const Page = () => {
  return (
    <ClientOnly>
        <AddPage/>
    </ClientOnly>
  )
}

export default Page