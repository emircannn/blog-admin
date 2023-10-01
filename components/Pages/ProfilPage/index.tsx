import React from 'react'
import Social from '../Settings/Social'
import UserProfil from '../Settings/UserProfil'
import BannerProfile from '../Settings/BannerProfile'

const ProfilPage = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
          <BannerProfile/>

        <div className="px-5 mt-10">
          <UserProfil/>

        </div>
        <div className="flex flex-col pl-12 pr-5 w-full">
          <Social/>
        </div>
    </div>
  )
}

export default ProfilPage