"use client";

import { motion } from "motion/react";
import { ImagesSlider } from "@/core/components/ui/images-slider";

export function HeroImagesSlider() {
  // Definir imágenes con sus textos alt para SEO
  const images = [
    { url: "/principal.jpeg", alt: "Slider Principal" },
  { url: "/principal2.jpeg", alt: "Slider Principal" }, ];

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
