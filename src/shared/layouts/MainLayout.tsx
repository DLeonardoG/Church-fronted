import { Outlet } from "react-router-dom"
import { NavigationMenuDemo } from "@/core/components/menu-navegation"

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <NavigationMenuDemo />
      <main className="">
        <Outlet />
      </main>
    </div>
  )
}
