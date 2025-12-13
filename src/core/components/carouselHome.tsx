"use client";

import { motion } from "motion/react";
import { ImagesSlider } from "@/core/components/ui/images-slider";

export function HeroImagesSlider() {
  const images = [
    "https://cms-imgp.jw-cdn.org/img/p/2018642/univ/art/2018642_univ_lsr_lg.jpg",
    "https://watv.org/wp-content/uploads/2025/01/thum_because_you_say_so.jpg",
    "https://media.swncdn.com/via/images/2024/05/08/35672/35672-daniel_source_file.jpg",
    "https://lh3.googleusercontent.com/p/AF1QipNC910UDY9SN7HY4YwkkmxN7blwh4Y8i0Z71lat=w1024-k",
  ];

  return (
    <ImagesSlider images={images} className="h-screen">
      {/* Contenido encima del slider */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-50 flex flex-col items-center justify-center text-center px-6"
      >
        {/* Texto principal */}
        <motion.h1
          className="
            font-extrabold
            text-4xl md:text-6xl lg:text-7xl
            text-white
            leading-tight
          "
        >
          IGLESIA ADVENTISTA NORTE
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="mt-6 max-w-2xl text-base md:text-xl text-white"
        >
          El que a mí viene, nunca tendrá hambre, y el que en mí cree,
          nunca tendrá sed.
        </motion.p>

        {/* Versículo */}
        <motion.span className="mt-4 text-sm tracking-widest text-white uppercase">
          Juan 6:35
        </motion.span>

        
      </motion.div>
    </ImagesSlider>
  );
}
