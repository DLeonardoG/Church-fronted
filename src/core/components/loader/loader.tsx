import { useEffect, useState } from "react"
import { Card, CardContent } from "@/core/components/ui/card"
import "@/core/style/global.css"

export default function Loader() {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 7000000) // espera 0.5s para empezar
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`flex items-center justify-center min-h-screen relative overflow-hidden transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-cover bg-center"
           style={{
             backgroundImage: "url('/fondo-overlay.jpg')",
           }}
      />

      <div className="absolute inset-0 bg-black/70" />


      {/* Tarjeta central */}
      <Card className="relative w-70 z-10 rounded-2xl bg-background/30 backdrop-blur-sm ">
        <CardContent className="flex flex-col items-center gap-4 p-10">
          {/* Ícono */}
          <div className="w-12 h-12 animate-spin text-primary">
            <img src="/icono-overlay.png" alt="" className="w-full h-full"/>
          </div>
      
          {/* Texto */}
          <p className="text-lg font-medium text-foreground animate-pulse">
            Cargando...
          </p>
        </CardContent>
      </Card>
</div>

  )
}
