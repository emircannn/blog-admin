import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import EditSocialMedia from "./EditSocialMedia"

interface Props {
    data: User | undefined
  }
  
  const Social: React.FC<Props> = ({
    data
  }) => {

    const socialMedia = [
        {username: data?.twitter ? data.twitter : 'Giriniz', icon: <Twitter/>, url: data?.twitterLink ? data.twitterLink : '/', isUsername: true},
        {username: data?.facebook ? data.facebook: 'Giriniz', icon: <Facebook/>, url: data?.facebookLink ? data.facebookLink : '/', isUsername: false},
        {username: data?.instagram ? data.instagram: 'Giriniz', icon: <Instagram/>, url: data?.instagramLink ? data.instagramLink : '/', isUsername: true},
        {username: data?.youtube ? data.youtube: 'Giriniz', icon: <Youtube/>, url: data?.youtubeLink ? data.youtubeLink : '/', isUsername: false},
    ]

  return (
    <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-between">
        <h3 className="articleHeading">Sosyal Medya</h3>
        <EditSocialMedia data={data}/>
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