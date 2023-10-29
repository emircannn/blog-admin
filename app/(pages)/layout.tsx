import AuthProvider from "@/components/providers/AuthProvider"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const layout: React.FC<Props> = ({children}) => {

  return (
    <AuthProvider>
    {children}
    </AuthProvider>
  )
}

export default layout