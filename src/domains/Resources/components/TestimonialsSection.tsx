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

/**
 * Datos de los recursos principales
 */
const resourcesData: ResourceItem[] = [
  {
    id: 1,
    title: "Las 28 Creencias Adventistas",
    text: `Las 28 creencias adventistas son principios que guían nuestra fe, desde la autoridad bíblica hasta la esperanza en el regreso de Cristo, promoviendo una vida cristiana plena y significativa.`,
    role: "Descargar",
    author: "Comunidad Adventista",
    type: "download",
    bg: "bg-neutral-900 text-white",
    icon: <Download size={15} />,
    actionLink: "/descargas/28-creencias.pdf",
  },
  {
    id: 2,
    title: "El Conflicto de los Siglos",
    text: `Una obra profética escrita por Elena G. de White que revela la lucha entre el bien y el mal a lo largo de la historia y el futuro final de la humanidad.`,
    role: "Comprar",
    author: "Editorial Safeliz",
    type: "buy",
    bg: "bg-blue-700 text-white",
    icon: <ShoppingCart size={15} />,
    actionLink: "/tienda/conflicto-de-los-siglos",
  },
  {
    id: 3,
    title: "Ministerio de Curación",
    text: `Este libro destaca la importancia de la salud física, mental y espiritual, mostrando el ministerio sanador de Jesús como ejemplo de compasión y equilibrio.`,
    role: "Comprar",
    author: "Asociación Publicadora Interamericana",
    type: "buy",
    bg: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
    icon: <ShoppingCart size={15} />,
    actionLink: "/tienda/ministerio-de-curacion",
  },
  {
    id: 4,
    title: "El Camino a Cristo",
    text: `Una guía práctica y espiritual que enseña cómo acercarse personalmente a Dios y experimentar la salvación a través de la fe en Jesús.`,
    role: "Descargar",
    author: "Comunidad Adventista",
    type: "download",
    bg: "bg-blue-500 text-white",
    icon: <Download size={15} />,
    actionLink: "/descargas/el-camino-a-cristo.pdf",
  },
  {
    id: 5,
    title: "Eventos de los Últimos Días",
    text: `Una recopilación de citas proféticas sobre las señales del fin, los tiempos de angustia y la preparación espiritual para el regreso de Cristo.`,
    role: "Comprar",
    author: "Editorial ACES",
    type: "buy",
    bg: "bg-neutral-900 text-white",
    icon: <ShoppingCart size={15} />,
    actionLink: "/tienda/eventos-de-los-ultimos-dias",
  },
  {
    id: 6,
    title: "Manual de Iglesia Adventista",
    text: `Documento oficial que regula la organización, las funciones, los ministerios y la disciplina de la Iglesia Adventista del Séptimo Día en todo el mundo.`,
    role: "Descargar",
    author: "Secretaría General IASD",
    type: "download",
    bg: "bg-blue-800 text-white",
    icon: <Download size={15} />,
    actionLink: "/descargas/manual-de-iglesia.pdf",
  },
];

/**
 * Sección de Testimonios/Recursos Principales
 * Muestra un carousel con recursos descargables y comprables
 */
export function TestimonialsSection() {
  return (
    <section
      id={RESOURCES_SECTION_IDS.TESTIMONIALS}
      className="flex justify-center items-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 w-full min-h-screen"
    >
      <div className="flex flex-col w-7xl h-full space-y-14">
        <div className="flex w-full h-20 justify-center items-center">
          <h2 className="text-4xl font-extrabold font-sans text-gray-900 dark:text-white">
            {RESOURCES_TEXTS.TESTIMONIALS_TITLE}
          </h2>
        </div>

        <div className="w-full min-h-6xl">
          <div className="w-100 md:max-w-5xl lg:w-6xl mx-auto relative overflow-visible">
            <Carousel opts={{ loop: false }}>
              <CarouselContent className="-ml-8">
                {resourcesData.map((resource, idx) => (
                  <CarouselItem
                    key={idx}
                    className="basis-full sm:basis-1/2 md:basis-1 lg:basis-1/3 h-80 md:px-1 lg:px-8"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        zIndex: 20,
                        rotate: 0,
                      }}
                      initial={{
                        rotate: 0,
                      }}
                      className={`relative -mr-28 rounded-2xl shadow-xl h-70 ${resource.bg} p-6 md:p-8 transition-all duration-300`}
                    >
                      <div>
                        <h3 className="text-lg font-semibold uppercase tracking-tight">
                          {resource.title}
                        </h3>
                        <p className="text-sm mt-3 opacity-90 leading-relaxed">
                          {resource.text}
                        </p>
                      </div>
                      <div className="mt-6">
                        <button
                          onClick={() => (window.location.href = resource.actionLink)}
                          className="flex justify-center cursor-pointer items-center gap-1 text-xs text-gray-900 dark:text-gray-900 font-semibold w-24 h-10 bg-white hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-200 mt-2 rounded-lg transition-colors shadow-sm"
                        >
                          {resource.role} {resource.icon}
                        </button>
                        <p className="mt-2 text-xs opacity-70">{resource.author}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden md:flex absolute -left-16 top-1/2 w-15 h-15" />
              <CarouselNext className="hidden md:flex absolute -right-16 top-1/2 w-15 h-15" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
