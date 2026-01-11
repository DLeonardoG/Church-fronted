import { Button } from "@/core/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/core/components/ui/card"
import { Input } from "@/core/components/ui/input"
import { Label } from "@/core/components/ui/label"
import { Textarea } from "@/core/components/ui/textarea"
import { CheckCircle2, Loader2, Mail, Send, User } from "lucide-react"
import { useState } from "react"
import emailjs from "emailjs-com"
import WorldMapDemo from "./mapChurch"

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre: form.nombre,
          email: form.email,
          mensaje: form.mensaje
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setEnviado(true)
      setForm({ nombre: "", email: "", mensaje: "" })

      setTimeout(() => setEnviado(false), 4000)
    } catch (error) {
      console.error(error)
      alert("Error enviando el mensaje. Intenta de nuevo.")
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20 px-4 lg:px-8">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
        <WorldMapDemo />

        <Card className="shadow-lg border-border/50 mt-10">
          <CardHeader className="space-y-8 pb-6">
            <div>
              <CardTitle className="text-2xl font-bold">
                Envíanos un mensaje o
              </CardTitle>
              <CardTitle className="text-2xl font-bold">
                Escribe tu petición de oración
              </CardTitle>
            </div>
            <CardDescription>
              Completa el formulario y estaremos orando por ti.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {enviado ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-muted-foreground">
                  Gracias por escribirnos.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Label className="flex gap-2">
                    <User className="w-4 h-4" /> Nombre completo
                  </Label>
                  <Input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    disabled={enviando}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="flex gap-2">
                    <Mail className="w-4 h-4" /> Correo electrónico
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={enviando}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="flex gap-2">
                    <Send className="w-4 h-4" /> Mensaje
                  </Label>
                  <Textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    disabled={enviando}
                  />
                </div>

                <Button type="submit" disabled={enviando} className="w-full">
                  {enviando ? (
                    <>
                      <Loader2 className="animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
