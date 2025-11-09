import { NewsCard } from "@/core/components/newsCard";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";




const newsEvents = [
  {
    id: 8,
    name: "Retiro Espiritual de Sanidad",
    date: 31,
    status: "Pending",
    imageUrl: "https://es.armsa.com/wp-content/uploads/2018/01/Capa-Face-Acamp-Verao-ARM-2018-Esp_3000px.jpg",
    description: "Un encuentro transformador con Dios. Te invitamos a un día de renovación espiritual...",
    category: "Evento Espiritual",
    details: {
      fechaEvento: "Sábado, 16 de Noviembre de 2025",
    },
  },
  {
    id: 9,
    name: "Conferencia de Avivamiento 2025",
    date: 7,
    status: "Active",
    imageUrl: "https://files.adventistas.org/downloads_v2/es/2024/10/22185443/Capa.jpg",
    description: "Tres días de renovación espiritual, milagros y palabra viva. Un encuentro para avivar la fe...",
    category: "Conferencia Cristiana",
    details: {
      fechaEvento: "Viernes, 21 de Noviembre de 2025",
    },
  },
  {
    id: 10,
    name: "Noche de Adoración y Milagros",
    date: 15,
    status: "Confirmed",
    imageUrl: "https://i.ytimg.com/vi/9UKPeLll7Pk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADPkK4O-Yj7sUbNHhjz2RVBbj_0w",
    description: "Una noche de encuentro con Dios donde los cielos se abren. Ven con fe y expectativa...",
    category: "Evento Espiritual",
    details: {
      fechaEvento: "Sábado, 23 de Noviembre de 2025",
    },
  },
  {
    id: 11,
    name: "Taller de Liderazgo Juvenil",
    date: 20,
    status: "Scheduled",
    imageUrl: "https://i.ytimg.com/vi/12_uwZnBBVM/maxresdefault.jpg",
    description: "Capacitación intensiva para líderes jóvenes que desean crecer en visión, propósito y servicio...",
    category: "Capacitación Ministerial",
    details: {
      fechaEvento: "Domingo, 17 de Noviembre de 2025",
    },
  },
  {
    id: 12,
    name: "Campamento Conquistadores",
    date: 24,
    status: "Pending",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/flags%2C-pathfinders%2C-conquistadores%2C-adventist-design-template-2de78eb0694895dba3344950549a7896_screen.jpg?ts=1743438334",
    description: "Tres días para fortalecer la unión familiar bajo los principios bíblicos...",
    category: "Campamento Familiar",
    details: {
      fechaEvento: "Del 22 al 24 de Noviembre de 2025",
    },
  }
];



export function CarouselEvent() {
  const [centerIndex, setCenterIndex] = useState(Math.floor(newsEvents.length / 2));

  const handleScroll = (dir: "left" | "right") => {
    setCenterIndex((prev) =>
      dir === "left"
        ? (prev - 1 + newsEvents.length) % newsEvents.length
        : (prev + 1) % newsEvents.length
    );
  };

  return (
    <div
      className="h-screen w-full overflow-hidden relative bg-gradient-to-b from-background via-muted/20 to-muted/40"
      style={{
        isolation: "isolate",
      }}
    >
      {/* 🌫️ Reflejo tipo piso */}
      <div
        className="fixed bottom-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.03) 0%, transparent 100%)",
          transform: "perspective(1000px) rotateX(60deg)",
          transformOrigin: "bottom",
          zIndex: 1,
        }}
      />


      {/* 💽 Carrusel principal */}
      <div
        className="relative flex items-center justify-center w-full h-full"
        style={{ perspective: "1000px", zIndex: 10 }}
      >
        <button
          onClick={() => handleScroll("left")}
          className="bg-primary hover:bg-primary/90 w-10 h-10 z-100 flex items-center justify-center rounded-full absolute left-5 transition-all shadow-lg hover:shadow-xl select-none"
          aria-label="Anterior"
        >
          <ArrowLeft className="text-primary-foreground w-6 h-6"/>
        </button>

        <div className="relative flex items-center justify-center w-full" style={{ height: "400px" }}>
          {newsEvents.map((event, index) => {
            const offset = index - centerIndex;
            const absOffset = Math.abs(offset);
            const scale = 1.3 - absOffset * 0.1;
            const rotateY = offset * -25;
            const translateX = offset * 120;
            const zIndex = 100 - absOffset;

            return (
              <motion.div
                key={event.id}
                className="absolute cursor-pointer rounded-xl overflow-hidden shadow-2xl"
                style={{
                  width: "min(600px, 80vw)",
                  height: "350px",
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  opacity: absOffset > 3 ? 0 : 1,
                }}
              >
                <div className="w-full h-full object-cover rounded-xl shadow-lg">
                  <NewsCard
                    key={event.id}
                    title={event.name}
                    description={event.description}
                    date={event.details.fechaEvento}
                    category={event.category}
                    imageUrl={event.imageUrl}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="bg-primary hover:bg-primary/90 w-10 h-10 flex justify-center items-center z-100 rounded-full absolute right-4 transition-all shadow-lg hover:shadow-xl select-none"
          aria-label="Siguiente"
        >
          <ArrowRight className="text-primary-foreground w-6 h-6"/>
        </button>
      </div>

      {/* 🪞 Reflejo visual */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-10 blur-lg pointer-events-none">
        <div className="w-[300px] h-[40px] bg-gradient-to-t from-black/10 to-transparent rounded-full" />
      </div>
    </div>
  );
}
