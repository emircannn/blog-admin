import Logo from "../logo"
import { ModeToggle } from "../themeToggle"
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header>
        <div className="container flex items-center justify-between py-3">
            <Logo/>

            <div className="flex items-center gap-2">
                <ModeToggle/>
                <Button>
                    Çıkış Yap
                </Button>
            </div>
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-thirth to-lightColor"/>
    </header>
  )
}

export default Header