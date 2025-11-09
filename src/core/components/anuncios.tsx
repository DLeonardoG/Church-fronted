import { Button } from "@/core/components/ui/button";
import { CountdownTimer } from "@/core/components/ui/countdown-timer";
import { cn } from "@/shared/lib/utils";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { CarouselOrientation, type Evento } from "./carouselEvents";

const eventosPrincipales = {
  titulo: "Santa Cena",
  descripcion:
    "La Santa Cena es una celebración cuatrimestral que simboliza el sacrificio de Cristo y la promesa de su regreso.",
  fecha: "2025-10-21T00:00:00",
  imagen:
    "https://marketplace.canva.com/EAGYTACmB7o/2/0/1600w/canva-post-de-instagram-santa-cena-iglesia-cristiana-uj4YxF3HReg.jpg",
};

const eventosSecundarios: Evento[] = [
  {
    titulo: "Voceros del Reino",
    descripcion:
      "Somos la Agrupación Musical Voceros Del Reino que por medio de la música alabamos a Dios",
    fecha: "2025-10-28T00:00:00",
    imagen:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=570x10000:format=jpg/path/s7758858ede33c652/image/i37f5d62dc8dac510/version/1278951977/image.jpg",
  },
  {
    titulo: "Conferencia Semanal",
    descripcion:
      "Únete a nuestra conferencia semanal donde exploramos la palabra de Dios y fortalecemos nuestra fe",
    fecha: "2025-11-21T00:00:00",
    imagen:
      "https://lh3.googleusercontent.com/gps-proxy/AC9h4nrj2y8FhHRByoPy24Let0yZCfhwIZYBPViWeimSJ5rubO-tXt5yFnL-PRXWlO1-A0YyFmPFgpHkbGSkSyn-ouus6i2W2SlF7W4xlr5FiMqHL3pSijL1oQl7hwNSvlAZ7KZfTr0tEw=s680-w680-h510-rw",
  },
  {
    titulo: "Campamento Guías Mayores",
    descripcion:
      "El Club de Guías Mayores es un programa opcional de la Iglesia Adventista del Séptimo Día.",
    fecha: "2025-12-22T00:00:00",
    imagen:
      "https://i.ytimg.com/vi/NxcWsV0fKlw/maxresdefault.jpg",
  },
  {
    titulo: "Congreso Juvenil",
    descripcion:
      "Un encuentro de jóvenes lleno de adoración, talleres y compañerismo en Cristo",
    fecha: "2026-07-22T00:00:00",
    imagen:
      "https://cdn.stayhappening.com/events5/banners/2cb8fd547af710ef4c45d1657a8202097e59b21b9ee204e70235d9c0a1e55b7f-rimg-w1200-h600-gmir.jpg?v=1644807816",
  },
  {
    titulo: "Congreso de Líderes y Discípulos Creativos",
    descripcion: "Capacitación intensiva para líderes enfocados en el ministerio creativo",
    fecha: "2026-07-26T00:00:00",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDzg6pY9syIc7Z6SiC6VXwyBfjg3q9u4o3w&s",
  },
  {
    titulo: "Día de Oración Trimestral",
    descripcion: "Un día dedicado completamente a la oración y búsqueda espiritual",
    fecha: "2026-07-27T00:00:00",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9u4QM423f7nPJiwwRNNduw_1T07tTrwIG8BcljyEKqhUlYJQ-jqOhRpvsthS3Bfyhk_w&usqp=CAU",
  },
  {
    titulo: "Reconocimiento del Maestro Adventista",
    descripcion: "Celebramos y honramos a nuestros dedicados maestros adventistas",
    fecha: "2026-07-28T00:00:00",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01iM5gYb53LXH-uOKat2TvPF1NJiT8Z41LQ&s",
  },
  {
    titulo: "Vigilia",
    descripcion:
      "Una vigilia adventista es un servicio religioso nocturno que puede durar varias horas, enfocado en la preparación espiritual.",
    fecha: "2025-07-29T00:00:00",
    imagen:
      "https://static.wixstatic.com/media/7f07bc_8b71095098e142819754b5b44aefd365~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/7f07bc_8b71095098e142819754b5b44aefd365~mv2.png",
  },
];

export default function Anuncios() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full gap-6 px-4 lg:px-8">
      {/* Evento Principal */}
      <aside className={cn(
        "relative lg:w-[45%] min-h-[500px] rounded-3xl",
        "border border-border overflow-hidden",
        "group cursor-pointer",
        "transition-all duration-500 hover:shadow-2xl",
        "flex flex-col"
      )}>
        {/* Imagen de fondo con efecto zoom */}
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center",
            "transition-transform duration-700 ease-out",
            "group-hover:scale-110"
          )}
          style={{ backgroundImage: `url(${eventosPrincipales.imagen})` }}
        />

        {/* Overlay con degradado */}
        <div className={cn(
          "absolute inset-0",
          "bg-linear-to-t from-background/95 via-background/70 to-background/40",
          "backdrop-blur-[2px]"
        )} />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col justify-between h-full p-8">
          {/* Header */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Evento Destacado</span>
            </div>

            {/* Título */}
            <div className="space-y-3">
              <h3 className={cn(
                "font-bold text-4xl lg:text-5xl text-foreground",
                "leading-tight tracking-tight"
              )}>
                {eventosPrincipales.titulo}
              </h3>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                  {eventosPrincipales.descripcion}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="space-y-4">
            {/* Countdown */}
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border">
              <CountdownTimer targetDate={eventosPrincipales.fecha} />
            </div>

            {/* Botón */}
            <Button 
              size="lg"
              className={cn(
                "w-full group/btn",
                "text-lg font-semibold",
                "transition-all duration-300"
              )}
            >
              <span>Ver más detalles</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Eventos Secundarios */}
      <div className="lg:w-[55%] flex items-center justify-center">
        <CarouselOrientation eventos={eventosSecundarios} />
      </div>
    </div>
  );
}
