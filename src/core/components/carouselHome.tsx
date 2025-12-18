"use client";

import { motion } from "motion/react";
import { ImagesSlider } from "@/core/components/ui/images-slider";

export function HeroImagesSlider() {
  const images = [
    "https://cms-imgp.jw-cdn.org/img/p/2018642/univ/art/2018642_univ_lsr_lg.jpg",
    "https://files.adventistas.org/downloads_v2/es/2024/10/01172724/dia-de-la-educacion-adventista.jpg",
    "https://media.swncdn.com/via/images/2024/05/08/35672/35672-daniel_source_file.jpg",
    "https://files.adventistas.org/noticias/es/2021/06/12132025/serie-de-oito-episodios-reforca-crencas-fundamentais-dos-adventistas2.jpg",
  ];

  return (
    <ImagesSlider images={images} className="h-[100%]">
      {/* Contenido encima del slider */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-50 flex flex-col items-center justify-center text-center px-6"
      >

        
      </motion.div>
    </ImagesSlider>
  );
}
