import { createBrowserRouter } from "react-router-dom"
import Loader from "@/core/components/loader/loader"
import Home from "@/features/pages/home"
import Nosotros from "@/features/pages/nosotros"
import Eventos from "@/features/pages/eventos"

import MainLayout from "@/shared/layouts/MainLayout"

const router = createBrowserRouter([
  {
    element: <MainLayout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/nosotros", element: <Nosotros /> },
      { path: "/eventos", element: <Eventos /> },
      { path: "/loader", element: <Loader /> }
    ]
  }
])

export default router
