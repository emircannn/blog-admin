'use client'
import { useContext } from "react"
import Logo from "../logo"
import { ModeToggle } from "../themeToggle"
import { Button } from "../ui/button"
import { AuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

const Header = () => {

  const {auth, setAuth} = useContext<any>(AuthContext)
  const {push} = useRouter()

  const handleLogout = async() => {
    localStorage.removeItem('token')
    push('/oturum')
    setAuth(null)
  }

  if (!auth) {
    return null
  }

  return (
    <header>
        <div className="container flex items-center justify-between py-3">
            <Logo/>

            <div className="flex items-center gap-2">
                <ModeToggle/>
                <Button onClick={handleLogout}>
                    Çıkış Yap
                </Button>
            </div>
        </div>

        <div className="min-h-[2px] bg-gradient-to-r from-thirth to-lightColor w-screen"/>
    </header>
  )
}

export default Header