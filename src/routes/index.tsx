import { createBrowserRouter } from "react-router-dom"
import Loader from "@/core/components/loader/loader"
import Home from "@/features/pages/home"

import MainLayout from "@/shared/layouts/MainLayout"

const router = createBrowserRouter([
  {
    element: <MainLayout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/loader", element: <Loader /> }
    ]
  }
])

export default router
