import { createBrowserRouter } from "react-router-dom"
import Home from "@/features/pages/home"
import Nosotros from "@/features/pages/nosotros"
import Eventos from "@/features/pages/eventos"
import Recursos from "@/features/pages/recursos"

import MainLayout from "@/shared/layouts/MainLayout"

const router = createBrowserRouter([
  {
    element: <MainLayout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/nosotros", element: <Nosotros /> },
      { path: "/eventos", element: <Eventos /> },
      { path: "/recursos", element: <Recursos /> },
    ]
  }
])

export default router
