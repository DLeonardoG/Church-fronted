import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"
import { Card, CardContent } from "@/core/components/ui/card"
import "@/core/style/global.css"

export default function Loader() {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Simulación: después de montar, empieza el fade-out
    const timer = setTimeout(() => setFadeOut(true), 4000000) // espera 0.5s para empezar
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`flex items-center justify-center min-h-screen relative overflow-hidden transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_200%]" />

      {/* Tarjeta central */}
      <Card className="relative z-10 shadow-2xl rounded-2xl bg-background/70 backdrop-blur-lg border border-border">
        <CardContent className="flex flex-col items-center gap-4 p-10">
          {/* Ícono */}
          <div className="w-12 h-12 animate-spin text-primary">
            <Sparkles className="w-full h-full" />
          </div>

          {/* Texto */}
          <p className="text-lg font-medium text-foreground animate-pulse">
            Preparando tu experiencia...
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
