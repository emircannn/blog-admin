import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EditorLogin from "./Auth/EditorLogin"
import AdminLogin from "./Auth/AdminLogin"
import Register from "./Auth/Register"

const Page = () => {
  return (
    <main className="h-[calc(100vh_-_101px)] flex items-center justify-center w-full">
        <Tabs  defaultValue="admin" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="admin">Admin</TabsTrigger>
        <TabsTrigger value="editor">Editör</TabsTrigger>
        <TabsTrigger value="register">Kayıt</TabsTrigger>
      </TabsList>
      <AdminLogin/>
      <EditorLogin/>
      <Register/>
    </Tabs>
    </main>
  )
}

export default Page