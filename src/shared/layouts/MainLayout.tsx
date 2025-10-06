import { Outlet } from "react-router-dom"
import { NavigationMenuDemo } from "@/core/components/menu-navegation"
import Footer from "@/core/components/footer"

export default function MainLayout() {
  return (
    <div className="min-h-screen scroll-smooth">
      <NavigationMenuDemo />
      <main className="">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  )
}
