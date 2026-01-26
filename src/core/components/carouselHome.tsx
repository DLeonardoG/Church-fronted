"use client";

import { motion } from "motion/react";
import { ImagesSlider } from "@/core/components/ui/images-slider";

export function HeroImagesSlider() {
  // Definir imágenes con sus textos alt para SEO
  const images = [
    { url: "https://cms-imgp.jw-cdn.org/img/p/2018642/univ/art/2018642_univ_lsr_lg.jpg", alt: "Estudio Bíblico en Iglesia Adventista Bucaramanga" },
    { url: "https://files.adventistas.org/downloads_v2/es/2024/10/01172724/dia-de-la-educacion-adventista.jpg", alt: "Educación Adventista en el Norte de Bucaramanga" },
    { url: "https://media.swncdn.com/via/images/2024/05/08/35672/35672-daniel_source_file.jpg", alt: "Profecías Bíblicas - Iglesia Adventista del Séptimo Día" },
    { url: "https://files.adventistas.org/noticias/es/2021/06/12132025/serie-de-oito-episodios-reforca-crencas-fundamentais-dos-adventistas2.jpg", alt: "Creencias fundamentales Adventistas Santander" },
  ];

  // Extraer solo las URLs para el componente ImagesSlider que espera string[]
  const imageUrls = images.map(img => img.url);

  return (
    <ImagesSlider images={imageUrls} className="h-[100%]">
      {/* Contenido encima del slider */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-50 flex flex-col items-center justify-center text-center px-6"
      >

        {/* Elemento oculto semántico para asociar imágenes con contexto local */}
        <div className="sr-only">
          {images.map((img, index) => (
            <img key={index} src={img.url} alt={img.alt} />
          ))}
        </div>

      </motion.div>
    </ImagesSlider>
  );
}
