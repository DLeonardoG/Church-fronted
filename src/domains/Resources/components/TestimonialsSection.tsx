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
    actionLink: "https://online-s.fliphtml5.com/emro%2Fpsiy%2Fsourcefiles%2Fpsiy-F3FDD089C71C2D55E02BD37801DFC045.pdf?time=1766099198&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9vbmxpbmUtcy5mbGlwaHRtbDUuY29tL2Vtcm8lMkZwc2l5JTJGc291cmNlZmlsZXMlMkZwc2l5LUYzRkREMDg5QzcxQzJENTVFMDJCRDM3ODAxREZDMDQ1LnBkZj90aW1lPTE3NjYwOTkxOTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NjYxMDAzOTh9fX1dfQ__&Signature=HItnvB9yNDNMfxWOEefi-Mv1VFPysmV10TQM41dFzW7Q9rhO-8c7zfuka2tWRuri3GCFI~P~3RdzljHtGC6uDLJMYVjoCPj7kVcyld19MvLxC6ppblC7AdEFnKqzfnTzPSEwB5w9-K8qIEfrMSA5ptbXiI11wPN4E7IK8h4ttfhWqjpKZQiDzOj6V79v~SWEmXrjEBVNRfrIbqeHF6bvNjxCeRMIddHidOOs4gNxhb03xQsJ~O9MGrolBmyLyE5RpejKWTRejpdwHpVYizrd~6lAqjTziqV8HYddPHmZ0lOCovDTwcq6YiwaH-IKjKfRvHMm-Ql2chbEajVoeHu-Bg__&Key-Pair-Id=K26YF7TG07WYF",
    coverImage: "https://image.slidesharecdn.com/libro28creenciasadventistasseptimodia-121003232132-phpapp02/75/Libro-de-las-28-Creencias-de-los-Adventistas-del-Septimo-Dia-1-2048.jpg",
  },
  {
    id: 2,
    title: "El Conflicto de los Siglos",
    text: `Una obra profética escrita por Elena G. de White que revela la lucha entre el bien y el mal a lo largo de la historia y el futuro final de la humanidad.`,
    role: "Comprar",
    author: "Editorial Safeliz",
    type: "download",
    bg: "bg-blue-700 text-white",
    icon: <ShoppingCart size={14} />,
    actionLink: "https://ellenwhiteaudio.org/audio/sp/gc/El%20Conflicto%20de%20los%20Siglos.pdf",
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
    actionLink: "https://files.recursos-biblicos.com/EGW/Libros%20EGW%20PDF/El%20Camino%20a%20Cristo.pdf",
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
    actionLink: "https://www.pcsda.org/wp-content/uploads/2014/10/Manual-de-la-Iglesia-Adventista.pdf",
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
            <CarouselContent className="-ml-1 md:-ml-0">
              {resourcesData.map((resource) => (
                <CarouselItem
                  key={resource.id}
                  className="px-0 basis-2/3 md:basis-1/3 lg:basis-1/4"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="group relative h-full cursor-pointer"
                  >
                    {/* Tarjeta con forma de libro */}
                    <div
                      className="rounded-xl overflow-hidden w-55 md:w-65 lg:max-w-80 h-[350px] md:h-[400px] lg:h-[400px] flex flex-col relative mx-auto"
                      style={{
                        perspective: "1000px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      }}
                    >
                      

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
                            target="_blank"
                            className={`
                              w-full py-2.5 px-4
                              rounded-xl
                              flex items-center justify-center gap-2
                              font-semibold text-sm
                              transition-all duration-150
                              active:scale-[0.97]
                              bg-black dark:bg-white text-white dark:text-black
                              shadow-[0_0_0_1px_rgba(255,255,255,0.1)]
                              hover:bg-neutral-900
                            `}
                          >
                            {resource.type === "download" ? (
                              <>
                                <Download className="w-4 h-4" />
                                Descargar
                              </>
                            ) : (
                              <>
                                <ShoppingCart className="w-4 h-4" />
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
            <div className="hidden md:block absolute left-15 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="w-10 h-10 rounded-full bg-white border border-border shadow-sm hover:bg-gray-100" />
            </div>
            <div className="hidden md:block absolute right-4 lg:right-15 top-1/2 -translate-y-1/2">
              <CarouselNext className="w-10 h-10 rounded-full bg-white border border-border shadow-sm hover:bg-gray-100" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}