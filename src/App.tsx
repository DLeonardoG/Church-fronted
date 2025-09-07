import { ThemeProvider } from "@/core/components/theme-provider"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "@/features/auth/login-page"
import Example from "@/domains/example/example"


function App() {

  const router = createBrowserRouter([
  { path: "/example", element: <Example /> },
  { path: "/", element: <LoginPage/> },
]);
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App