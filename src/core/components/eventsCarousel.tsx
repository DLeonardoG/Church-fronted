import { cn } from "@/shared/lib/utils";
import { Calendar, ArrowLeft, ArrowRight, ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Tu lista de eventos
const events = [
  {
    id: 8,
    name: "Retiro Espiritual de Sanidad",
    description: "Un encuentro transformador con Dios. Te invitamos a un día de renovación espiritual, oración y unción para sanidad integral.",
    category: "Evento Espiritual",
    date: "Sábado, 16 de Noviembre de 2025",
    imageUrl: "https://es.armsa.com/wp-content/uploads/2018/01/Capa-Face-Acamp-Verao-ARM-2018-Esp_3000px.jpg",
  },
  {
    id: 9,
    name: "Conferencia de Avivamiento 2025",
    description: "Tres días de renovación espiritual, milagros y palabra viva. Un encuentro para avivar la fe y experimentar el poder del Espíritu Santo.",
    category: "Conferencia Cristiana",
    date: "Viernes, 21 de Noviembre de 2025",
    imageUrl: "https://files.adventistas.org/downloads_v2/es/2024/10/22185443/Capa.jpg",
  },
  {
    id: 10,
    name: "Noche de Adoración y Milagros",
    description: "Una noche de encuentro con Dios donde los cielos se abren. Ven con fe y expectativa para experimentar lo sobrenatural.",
    category: "Evento Espiritual",
    date: "Sábado, 23 de Noviembre de 2025",
    imageUrl: "https://i.ytimg.com/vi/9UKPeLll7Pk/hq720.jpg",
  },
  {
    id: 11,
    name: "Taller de Liderazgo Juvenil",
    description: "Capacitación intensiva para líderes jóvenes que desean crecer en visión, propósito y servicio al cuerpo de Cristo.",
    category: "Capacitación Ministerial",
    date: "Domingo, 17 de Noviembre de 2025",
    imageUrl: "https://i.ytimg.com/vi/12_uwZnBBVM/maxresdefault.jpg",
  },
  {
    id: 12,
    name: "Campamento Conquistadores",
    description: "Tres días para fortalecer la unión familiar bajo los principios bíblicos. Actividades, devocionales y aventura para toda la familia.",
    category: "Campamento Familiar",
    date: "Del 22 al 24 de Noviembre de 2025",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/flags%2C-pathfinders%2C-conquistadores%2C-adventist-design-template-2de78eb0694895dba3344950549a7896_screen.jpg",
  },
];

export function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const itemWidth = carouselRef.current.querySelector('.carousel-item')?.clientWidth || 0;
    const scrollAmount = direction === "left" ? -itemWidth : itemWidth;

    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  // Detectar scroll y actualizar índice (opcional)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const onScroll = () => {
      const itemWidth = carousel.querySelector('.carousel-item')?.clientWidth || 0;
      const newIndex = Math.round(carousel.scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    };

    carousel.addEventListener('scroll', onScroll);
    return () => carousel.removeEventListener('scroll', onScroll);
  }, []);

  // Calcular cuántas tarjetas mostrar según el ancho
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, events.length - visibleCount);

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Próximos Eventos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Únete a nuestra comunidad en eventos diseñados para fortalecer tu fe, tu familia y tu llamado ministerial.
          </p>
        </div>

        {/* Carousel contenedor */}
        <div className="relative">
          {/* Flechas */}
          <button
            onClick={() => handleScroll("left")}
            disabled={currentIndex <= 0}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 left-2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors",
              currentIndex <= 0 && "opacity-50 cursor-not-allowed"
            )}
            aria-label="Anterior"
          >
            <ArrowLeft className="w-5 h-5 text-foreground dark:text-black" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            disabled={currentIndex >= maxIndex}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 right-2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors",
              currentIndex >= maxIndex && "opacity-50 cursor-not-allowed"
            )}
            aria-label="Siguiente"
          >
            <ArrowRight className="w-5 h-5 text-foreground dark:text-black" />
          </button>

          {/* Carrusel horizontal */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 py-4 px-0 md:px-4 snap-x snap-mandatory"
            style={{
              scrollSnapType: "x mandatory",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="carousel-item flex-shrink-0 w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[28vw] snap-start"
              >
                <div className="group flex flex-col border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  {/* Imagen */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay de categoría */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                      {event.category}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                      {event.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Fecha */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>

                    {/* Botón “Continue Reading” */}
                    <button
                      className={cn(
                        "mt-4 flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors",
                        "group-hover:underline"
                      )}
                    >
                      Continua leyendo
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA final opcional */}
        
      </div>
    </section>
  );
}