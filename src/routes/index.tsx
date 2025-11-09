import { Home } from "@/domains/Home"
import Eventos from "@/features/pages/eventos"
import Nosotros from "@/features/pages/nosotros"
import Recursos from "@/features/pages/recursos"
import { createBrowserRouter } from "react-router-dom"

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
