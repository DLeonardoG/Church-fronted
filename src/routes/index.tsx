import { createBrowserRouter } from "react-router-dom"
import LoginPage from "@/features/auth/login-page"
import Example from "@/domains/example/example"
import Loader from "@/core/components/loader/loader"
import Home from "@/features/pages/home"

import MainLayout from "@/shared/layouts/MainLayout"

const router = createBrowserRouter([
  {
    element: <MainLayout />, 
    children: [
      { path: "/example", element: <Example /> },
      { path: "/home", element: <Home /> },
      { path: "/loader", element: <Loader /> }
    ]
  },
  { path: "/", element: <LoginPage /> }
])

export default router
