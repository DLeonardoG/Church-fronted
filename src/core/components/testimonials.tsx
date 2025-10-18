import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/core/components/ui/carousel";
import { Download, ShoppingCart } from "lucide-react";

export const testimonials = [
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
    bg: "bg-neutral-100 text-neutral-900",
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


export default function TestimonialOverlap() {
  return (
    <div className="w-full max-w-6xl mx-auto relative overflow-visible">
      <Carousel  opts={{loop: false }}>
        <CarouselContent className="-ml-8">
          {testimonials.map((t, idx) => (
            <CarouselItem
              key={idx}
              className="basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3 h-80 px-8"
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
                className={`relative -mr-28 rounded-2xl shadow-xl h-70 ${t.bg} p-6 md:p-8 transition-all duration-300`}
              >
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-tight">
                    {t.title}
                  </h3>
                  <p className="text-sm mt-3 opacity-90 leading-relaxed">
                    {t.text}
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => window.location.href = t.actionLink}
                    className="flex justify-center cursor-pointer items-center gap-1 text-xs text-black opacity-80 w-24 h-10 bg-white mt-2 rounded-lg"
                  >
                    {t.role} {t.icon}
                  </button>
                  <p className="mt-2 text-xs opacity-70">{t.author}</p>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex absolute -left-16 top-1/2 w-15 h-15" />
        <CarouselNext className="hidden md:flex absolute -right-16 top-1/2 w-15 h-15" />
      </Carousel>
    </div>
  );
}
