import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/core/components/ui/card"
import { Label } from "@/core/components/ui/label"
import { Input } from "@/core/components/ui/input"
import { Textarea } from "@/core/components/ui/textarea"
import { Button } from "@/core/components/ui/button"

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 3000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center from-white to-slate-100 pt-20 px-9">
      <Card className="w-90 md:w-200 h-50vh md:h-[55vh] lg:h-[35em] max-w-lg shadow-xl rounded-2xl border border-slate-200 ">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-semibold text-slate-800">Contáctanos</CardTitle>
          <p className="text-slate-500 text-sm">
            Si tienes preguntas, peticiones o deseas más información, envíanos un mensaje.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                className="min-h-[120px]"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-20 md:h-10 bg-black/93 hover:bg-black text-white font-medium rounded-lg transition-colors"
            >
              {enviado ? "Enviado ✅" : "Enviar mensaje"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
