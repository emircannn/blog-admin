
import ChangePassword from "./ChangePassword"
import EditProfile from "./EditProfile"

interface Props {
  data: User | undefined
}

const UserProfil: React.FC<Props> = ({
  data
}) => {
  return (
    <div className="pl-7 flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
            <div className="flex items-center gap-3">
                <h1 className="articleHeading">{data?.name}</h1>
                <span className="opacity-75 text-sm">@{data?.username}</span>
            </div>
                <span className="opacity-75">{data?.email}</span>
            </div>

            <div className="flex items-center gap-2">
            <EditProfile data={data}/>
            <ChangePassword data={data?.username}/>
            </div>
        </div>

        <div className="flex flex-col gap-1">
        <h2 className="font-semibold">Hakkımda</h2>
        <p className="text-sm opacity-75">
          {data?.about ? data.about : 'Henüz hakkımda yazısı girmediniz...'}
        </p>
        </div>
    </div>
  )
}

export default UserProfil