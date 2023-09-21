'use client'
import { Boxes, FileType, MessageCircle, Newspaper, Settings2, Type, User2 } from 'lucide-react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const NavAside = () => {

    const pathname = usePathname()

    const user = 'Admin'

    const navigationLink = [
        {label: 'Yazılar', href: '/', icon: <Type/>, user: 'All'},
        {label: 'Sayılar', href: '/sayilar', icon: <FileType/>, user: 'All'},
        {label: 'Aktüel', href: '/aktuel', icon: <Newspaper/>, user: 'All'},
        {label: 'Kategoriler', href: '/kategoriler', icon: <Boxes/>, user: "Admin"},
        {label: 'Yorumlar', href: '/yorumlar', icon: <MessageCircle/>, user: "Admin"},
        {label: 'Profil', href: '/profil', icon: <User2/>, user: "Editor"},
        {label: 'Ayarlar', href: '/ayarlar', icon: <Settings2/>, user: "Admin"},
    ]

    if (pathname.includes('/oturum')) {
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