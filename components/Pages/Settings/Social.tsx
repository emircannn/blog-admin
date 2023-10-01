import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { EditSocialMedia } from "./EditSocialMedia"

const Social = () => {

    const socialMedia = [
        {username: 'emicann', icon: <Twitter/>, url: 'https://twitter.com/', isUsername: true},
        {username: 'Emircan', icon: <Facebook/>, url: 'https://facebook.com/', isUsername: false},
        {username: 'emircan', icon: <Instagram/>, url: 'https://instagram.com/', isUsername: true},
        {username: 'emircan', icon: <Youtube/>, url: 'https://youtube.com/', isUsername: false},
    ]

  return (
    <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-between">
        <h3 className="articleHeading">Sosyal Medya</h3>
        <EditSocialMedia/>
        </div>

        <div className="grid grid-cols-4 gap-2">
            {socialMedia?.map((data, i) => (
                <Link key={i} href={data.url} className="flex gap-3 items-center p-3 backgroundColor rounded-xl">
                {data.icon}
                {data.isUsername ? 
                <span className="text-sm font-semibold hover:underline line-clamp-1">@{data.username}</span>
                :
                <span className="text-sm font-semibold hover:underline line-clamp-1">{data.username}</span>}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Social