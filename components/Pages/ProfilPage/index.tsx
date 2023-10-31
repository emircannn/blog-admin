'use client'
import { useContext, useEffect, useState } from 'react'
import Social from '../Settings/Social'
import UserProfil from '../Settings/UserProfil'
import BannerProfile from '../Settings/BannerProfile'
import { AuthContext } from '@/context/AuthContext'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'

const ProfilPage = () => {

  const [user, setUser] = useState<User>()
  const {auth} = useContext<any>(AuthContext)

  const { toast } = useToast()

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}user/getUser?username=${auth.username}`,)

          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setUser(res.data.data)
          }
      } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col gap-6 w-full">
          <BannerProfile
          bannerImage={user?.coverImage}
          image={user?.image}
          username={auth.username}
          />

        <div className="px-5 mt-10">
          <UserProfil data={user}/>

        </div>
        <div className="flex flex-col pl-12 pr-5 w-full">
          <Social data={user}/>
        </div>
    </div>
  )
}

export default ProfilPage