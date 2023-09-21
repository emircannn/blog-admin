import { redirect } from "next/navigation"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const layout: React.FC<Props> = ({children}) => {

    const user = true

    if(!user) {
      redirect('/oturum')
    }

  return (
    <>
    {children}
    </>
  )
}

export default layout