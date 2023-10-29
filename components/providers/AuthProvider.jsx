'use client'

import { AuthContext } from "@/context/AuthContext"
import LoadingScreen from "../LoadingScreen"
import { useContext } from "react"
import LoginPage from "@/app/(auth)/oturum/page"

const AuthProvider = ({children}) => {
    const {auth, setAuth, loading} = useContext(AuthContext)

    if (loading && !auth) {
      return <LoadingScreen/>
    }
    
    if(!auth && !loading) {
      return <LoginPage/>
    }
  return (
    <>
        {children}
    </>
  )
}

export default AuthProvider