
import { EditProfile } from "./EditProfile"

const UserProfil = () => {
  return (
    <div className="pl-7 flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
            <div className="flex items-center gap-3">
                <h1 className="articleHeading">Emircan Yaşar</h1>
                <span className="opacity-75 text-sm">@emircann</span>
            </div>
                <span className="opacity-75">yasar.emircann@gmail.com</span>
            </div>

            <EditProfile/>
        </div>

        <div className="flex flex-col gap-1">
        <h2 className="font-semibold">Hakkımda</h2>
        <p className="text-sm opacity-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse temporibus maxime incidunt accusantium, dicta quae! Ad debitis dolore a ex autem? Quos temporibus cum enim.</p>
        </div>
    </div>
  )
}

export default UserProfil