'use client'

import LoadingScreen from "@/components/LoadingScreen"
import { AuthContext } from "@/context/AuthContext"
import { redirect } from "next/navigation"
import { ReactNode, useContext } from "react"

interface Props {
    children: ReactNode
}

const Provider: React.FC<Props> = ({children}) => {

  const {auth, loading} = useContext<any>(AuthContext)

  if (loading && !auth) {
    return <LoadingScreen/>
  }

  if(auth) {
    redirect('/')
  }

  return (
    <>
    {children}
    </>
  )
}

export default Provider