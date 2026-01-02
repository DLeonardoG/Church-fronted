import { cn } from "@/shared/lib/utils";
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  ArrowRightIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import type { CalendarEvent } from "@/domains/events/utils/calendar.utils";
import { addToCalendar } from "@/domains/events/utils/calendar.utils";

// 🔹 Eventos con fechas REALES
const events: CalendarEvent[] = [
  {
    id: 8,
    name: "Retiro Espiritual de Sanidad",
    description:
      "Un encuentro transformador con Dios. Un día de renovación espiritual, oración y sanidad integral.",
    category: "Evento Espiritual",
    dateLabel: "Sábado, 16 de Noviembre de 2025",
    startDate: "2025-11-16T09:00:00-05:00",
    endDate: "2025-11-16T17:00:00-05:00",
    location: "Iglesia Central",
    imageUrl:
      "https://es.armsa.com/wp-content/uploads/2018/01/Capa-Face-Acamp-Verao-ARM-2018-Esp_3000px.jpg",
  },
  {
    id: 9,
    name: "Conferencia de Avivamiento 2025",
    description:
      "Tres días de renovación espiritual, milagros y palabra viva.",
    category: "Conferencia Cristiana",
    dateLabel: "21 al 23 de Noviembre de 2025",
    startDate: "2025-11-21T18:00:00-05:00",
    endDate: "2025-11-23T21:00:00-05:00",
    location: "Auditorio Principal",
    imageUrl:
      "https://files.adventistas.org/downloads_v2/es/2024/10/22185443/Capa.jpg",
  },
  {
    id: 10,
    name: "Noche de Adoración y Milagros",
    description:
      "Una noche donde los cielos se abren. Ven con fe y expectativa.",
    category: "Evento Espiritual",
    dateLabel: "Sábado, 23 de Noviembre de 2025",
    startDate: "2025-11-23T19:00:00-05:00",
    endDate: "2025-11-23T22:00:00-05:00",
    location: "Iglesia Adventista Norte",
    imageUrl: "https://i.ytimg.com/vi/9UKPeLll7Pk/hq720.jpg",
  },
  {
    id: 11,
    name: "Taller de Liderazgo Juvenil",
    description: "Capacitación intensiva para líderes jóvenes.",
    category: "Capacitación Ministerial",
    dateLabel: "Domingo, 17 de Noviembre de 2025",
    startDate: "2025-11-17T08:00:00-05:00",
    endDate: "2025-11-17T13:00:00-05:00",
    location: "Salón Juvenil",
    imageUrl:
      "https://i.ytimg.com/vi/12_uwZnBBVM/maxresdefault.jpg",
  },
  {
    id: 12,
    name: "Campamento Conquistadores",
    description: "Tres días para fortalecer la unión familiar.",
    category: "Campamento Familiar",
    dateLabel: "22 al 24 de Noviembre de 2025",
    startDate: "2025-11-22T08:00:00-05:00",
    endDate: "2025-11-24T17:00:00-05:00",
    location: "Centro Campestre",
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/flags%2C-pathfinders%2C-conquistadores%2C-adventist-design-template-2de78eb0694895dba3344950549a7896_screen.jpg",
  },
];

export function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const itemWidth =
      carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -itemWidth : itemWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const onScroll = () => {
      const itemWidth =
        carousel.querySelector(".carousel-item")?.clientWidth || 1;

      setCurrentIndex(Math.round(carousel.scrollLeft / itemWidth));
    };

    carousel.addEventListener("scroll", onScroll);
    return () => carousel.removeEventListener("scroll", onScroll);
  }, []);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const maxIndex = Math.max(0, events.length - getVisibleCount());

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Próximos Eventos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Participa en eventos diseñados para fortalecer tu fe.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll("left")}
            disabled={currentIndex <= 0}
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow",
              currentIndex <= 0 && "opacity-50"
            )}
          >
            <ArrowLeft />
          </button>

          <button
            onClick={() => handleScroll("right")}
            disabled={currentIndex >= maxIndex}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow",
              currentIndex >= maxIndex && "opacity-50"
            )}
          >
            <ArrowRight />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-scroll gap-6 snap-x snap-mandatory scrollbar-hidden"
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="carousel-item snap-start scrollbar-hide"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="border rounded-xl w-[90vw] sm:w-[43vw] xl:w-[23vw] overflow-hidden flex flex-col">
                  <img
                    src={event.imageUrl}
                    alt={event.name}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-lg mb-2">
                      {event.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {event.dateLabel}
                    </div>

                    <button
                      onClick={() => addToCalendar(event)}
                      className="mt-4 flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                    >
                      Agregar a tu calendario
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
