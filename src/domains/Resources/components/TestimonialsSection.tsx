import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/core/components/ui/carousel";
import { motion } from "framer-motion";
import { Download, ShoppingCart } from "lucide-react";
import { RESOURCES_SECTION_IDS, RESOURCES_TEXTS } from "../constants/resourcesConfig";
import type { ResourceItem } from "../types";


// En resourcesData (dentro de TestimonialsSection.tsx)
const resourcesData: ResourceItem[] = [
  {
    id: 1,
    title: "Las 28 Creencias Adventistas",
    text: `Las 28 creencias adventistas son principios que guían nuestra fe, desde la autoridad bíblica hasta la esperanza en el regreso de Cristo, promoviendo una vida cristiana plena y significativa.`,
    role: "Descargar",
    author: "Comunidad Adventista",
    type: "download",
    bg: "bg-neutral-900 text-white",
    icon: <Download size={14} />,
    actionLink: "/descargas/28-creencias.pdf",
    coverImage: "https://image.slidesharecdn.com/libro28creenciasadventistasseptimodia-121003232132-phpapp02/75/Libro-de-las-28-Creencias-de-los-Adventistas-del-Septimo-Dia-1-2048.jpg",
  },
  {
    id: 2,
    title: "El Conflicto de los Siglos",
    text: `Una obra profética escrita por Elena G. de White que revela la lucha entre el bien y el mal a lo largo de la historia y el futuro final de la humanidad.`,
    role: "Comprar",
    author: "Editorial Safeliz",
    type: "buy",
    bg: "bg-blue-700 text-white",
    icon: <ShoppingCart size={14} />,
    actionLink: "/tienda/conflicto-de-los-siglos",
    coverImage: "https://cdnx.jumpseller.com/aces-peru/image/37474002/resize/1000/1100?1689008534",
  },
  {
    id: 3,
    title: "Ministerio de Curación",
    text: `Este libro destaca la importancia de la salud física, mental y espiritual, mostrando el ministerio sanador de Jesús como ejemplo de compasión y equilibrio.`,
    role: "Comprar",
    author: "Asociación Publicadora Interamericana",
    type: "buy",
    bg: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
    icon: <ShoppingCart size={14} />,
    actionLink: "/tienda/ministerio-de-curacion",
    coverImage: "https://imgv2-2-f.scribdassets.com/img/word_document/482334930/original/1bc82230e2/1?v=1",
  },
  {
    id: 4,
    title: "El Camino a Cristo",
    text: `Una guía práctica y espiritual que enseña cómo acercarse personalmente a Dios y experimentar la salvación a través de la fe en Jesús.`,
    role: "Descargar",
    author: "Comunidad Adventista",
    type: "download",
    bg: "bg-blue-500 text-white",
    icon: <Download size={14} />,
    actionLink: "/descargas/el-camino-a-cristo.pdf",
    coverImage: "https://cdnx.jumpseller.com/aces-peru/image/37473724/resize/1000/1100?1689007643",
  },
  {
    id: 5,
    title: "Eventos de los Últimos Días",
    text: `Una recopilación de citas proféticas sobre las señales del fin, los tiempos de angustia y la preparación espiritual para el regreso de Cristo.`,
    role: "Comprar",
    author: "Editorial ACES",
    type: "buy",
    bg: "bg-neutral-900 text-white",
    icon: <ShoppingCart size={14} />,
    actionLink: "/tienda/eventos-de-los-ultimos-dias",
    coverImage: "https://m.media-amazon.com/images/I/617m1TYgJXL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    title: "Manual de Iglesia Adventista",
    text: `Documento oficial que regula la organización, las funciones, los ministerios y la disciplina de la Iglesia Adventista del Séptimo Día en todo el mundo.`,
    role: "Descargar",
    author: "Secretaría General IASD",
    type: "download",
    bg: "bg-blue-800 text-white",
    icon: <Download size={14} />,
    actionLink: "/descargas/manual-de-iglesia.pdf",
    coverImage: "https://iadpa.org/cdn/shop/products/Manualdeiglesia2022.jpg?v=1678461368",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id={RESOURCES_SECTION_IDS.TESTIMONIALS}
      className="w-full py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {RESOURCES_TEXTS.TESTIMONIALS_TITLE}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros recursos espirituales: libros, manuales y documentos para tu crecimiento en Cristo.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel opts={{ loop: false, dragFree: true }}>
            <CarouselContent className="-ml-4 md:-ml-1">
              {resourcesData.map((resource) => (
                <CarouselItem
                  key={resource.id}
                  className="pl-14 md:pl-0 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="group relative h-full cursor-pointer"
                  >
                    {/* Tarjeta con forma de libro */}
                    <div
                      className="rounded-xl overflow-hidden w-80 h-[400px] flex flex-col relative"
                      style={{
                        perspective: "1000px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      {/* Efecto de lomo del libro (borde izquierdo) */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-primary/70 to-transparent rounded-l-xl"
                        style={{
                          transform: "translateZ(20px)",
                        }}
                      />

                      {/* Portada del libro con hover → descripción */}
                      <div
                        className="relative w-full aspect-[3/4] flex items-center justify-center overflow-hidden rounded-t-lg"
                        style={{
                          transformStyle: "preserve-3d",
                          transform: "rotateY(20deg) translateZ(0)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <img
                          src={resource.coverImage}
                          alt={`Portada de ${resource.title}`}
                          className="w-full h-[90%] object-contain p-2 transition-opacity duration-300 group-hover:opacity-40"
                        />

                        <div className="absolute inset-0 p-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="dark:text-white text-black text-xs text-center leading-relaxed px-2">
                            {resource.text}
                          </p>
                        </div>
                      </div>

                      {/* Contenido inferior */}
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-lg font-semibold text-foreground line-clamp-2 leading-tight">
                          {resource.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {resource.author}
                        </p>

                        <div className="mt-auto pt-3">
                          <a
                            href={resource.actionLink}
                            className={`w-full py-2.5 text-center text-sm font-medium rounded-md flex items-center justify-center gap-1.5 transition-colors ${
                              resource.type === "download"
                                ? "bg-amber-700 text-white hover:bg-amber-800"
                                : "bg-amber-950 text-white hover:bg-orange-950"
                            }`}
                          >
                            {resource.type === "download" ? (
                              <>
                                <Download className="w-3.5 h-3.5" />
                                Descargar
                              </>
                            ) : (
                              <>
                                <ShoppingCart className="w-3.5 h-3.5" />
                                Comprar
                              </>
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Botones de navegación */}
            <div className="hidden md:block absolute -left-0 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="w-10 h-10 rounded-full bg-white border border-border shadow-sm hover:bg-gray-100" />
            </div>
            <div className="hidden md:block absolute -right-0 top-1/2 -translate-y-1/2">
              <CarouselNext className="w-10 h-10 rounded-full bg-white border border-border shadow-sm hover:bg-gray-100" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}