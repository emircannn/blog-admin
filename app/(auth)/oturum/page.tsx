import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Register from "./Auth/Register"
import AdminLogin from "./Auth/AdminLogin"
import EditorLogin from "./Auth/EditorLogin"
import Provider from "./Provider"

const LoginPage = () => {
  return (
    <Provider>
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
    </Provider>
  )
}

export default LoginPage