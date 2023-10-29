'use client'
import { AuthContext } from '@/context/AuthContext'
import { Boxes, FileType, GalleryThumbnails, MessageCircle, Newspaper, Settings2, Type, User2 } from 'lucide-react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import { useContext } from 'react'

const NavAside = () => {

    const pathname = usePathname()
    const {auth} = useContext<any>(AuthContext)
    const user = auth?.role

    const navigationLink = [
        {label: 'Yazılar', href: '/', icon: <Type/>, user: 'All'},
        {label: 'Sayılar', href: '/sayilar', icon: <FileType/>, user: 'All'},
        {label: 'Aktüel', href: '/aktuel', icon: <Newspaper/>, user: 'All'},
        {label: 'Kategoriler', href: '/kategoriler', icon: <Boxes/>, user: "ADMIN"},
        {label: 'Yorumlar', href: '/yorumlar', icon: <MessageCircle/>, user: "ADMIN"},
        {label: 'Profil', href: `/profil/${auth?.username}`, icon: <User2/>, user: "EDITOR"},
        {label: 'Editörler', href: '/editorler', icon: <User2/>, user: "ADMIN"},
        {label: 'Slider', href: '/slider', icon: <GalleryThumbnails/>, user: "ADMIN"},
        {label: 'Ayarlar', href: '/ayarlar', icon: <Settings2/>, user: "ADMIN"},
    ]

    if (pathname.includes('/oturum') || !auth) {
        return null;
    }

  return (
    <ul className="flex flex-col w-[250px] gap-1 h-full backgroundColor shrink-0">
      {navigationLink.map((item, i) => (
        (item.user === 'All' || (user && item.user === user)) && (
          <Link
            href={item.href}
            key={i}
            className={`${item.href === pathname && '!bg-darkerColor dark:!bg-white text-white dark:text-darkerColor'}
              flex items-center gap-4 p-4 hover:opacity-60 duration-300`}
          >
            {item.icon}
            {item.label}
          </Link>
        )
      ))}
    </ul>
  )
}

export default NavAside