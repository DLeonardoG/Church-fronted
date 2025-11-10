import { Button } from "@/core/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/core/components/ui/card"
import { Input } from "@/core/components/ui/input"
import { Label } from "@/core/components/ui/label"
import { Textarea } from "@/core/components/ui/textarea"
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, User } from "lucide-react"
import React, { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    
    // Simular envío
    setTimeout(() => {
      setEnviando(false)
      setEnviado(true)
      setForm({ nombre: "", email: "", mensaje: "" })
      setTimeout(() => setEnviado(false), 4000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Cra 15 #54-78, Bucaramanga"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+57 (7) 123 4567"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contacto@iadnorte.com"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20 px-4 lg:px-8">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
        {/* Información de contacto */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Estamos aquí para ayudarte</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Contáctanos
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              ¿Tienes preguntas o necesitas información? Estamos aquí para escucharte. 
              Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4 pt-4">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="group hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">{info.title}</p>
                    <p className="text-base font-semibold text-foreground">{info.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Formulario de contacto */}
        <Card className="shadow-lg border-border/50">
          <CardHeader className="space-y-2 pb-6">
            <CardTitle className="text-2xl font-bold text-foreground">
              Envíanos un mensaje
            </CardTitle>
            <CardDescription className="text-base">
              Completa el formulario y nos pondremos en contacto contigo pronto
            </CardDescription>
          </CardHeader>

          <CardContent>
            {enviado ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nombre completo
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    required
                    disabled={enviando}
                    className="h-11 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    required
                    disabled={enviando}
                    className="h-11 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    className="min-h-[140px] resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    required
                    disabled={enviando}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={enviando}
                  className="w-full h-12 font-semibold text-base transition-all duration-200"
                >
                  {enviando ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
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
