import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { NavigationMenuDemo } from "@/core/components/menu-navegation"
import Footer from "@/core/components/footer/footer"
import Loader from "@/core/components/loader/loader"

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen scroll-smooth relative">
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <Loader />
        </div>
      )}

      {!isLoading && (
        <>
          <NavigationMenuDemo />
          <main className="">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
