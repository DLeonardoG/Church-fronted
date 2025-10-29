import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react"

const sampleImages = [
  "https://img.yumpu.com/14079511/1/500x640/revista-adventist-world-jovenes-adventistas-de-nicaragua.jpg",
  "https://apologeticacatolica.org/wp-content/uploads/2021/01/adventistas-del-7-dia.jpg",
  "https://files.adventistas.org/noticias/es/2022/04/16192607/crencas-fundamentais-dos-adventistas-o-remanescente-e-sua-missao.jpeg",
  "https://i.pinimg.com/originals/4f/9d/bf/4f9dbf54a0cc2086f1a8933e2f3791b3.jpg",
  "https://blog.orionstereo.org/content/images/2022/02/Greg_Olsen_Take_My_Hand_600-600x330.jpg",
  "https://files.adventistas.org/downloads_v2/es/2013/09/dia-del-joven-adventista.jpg",
  "https://www.recursos-biblicos.com/wp-content/uploads/2014/08/99-Consejos-para-L%C3%ADderes-de-J%C3%B3venes-Adventistas-e1555872906672.jpg"
  
];

export function CarouselEvent() {
  const [centerIndex, setCenterIndex] = useState(Math.floor(sampleImages.length / 2));

  const handleScroll = (dir: "left" | "right") => {
    setCenterIndex((prev) =>
      dir === "left"
        ? (prev - 1 + sampleImages.length) % sampleImages.length
        : (prev + 1) % sampleImages.length
    );
  };

  return (
    <div
      className="h-screen w-full overflow-hidden text-white relative "
      style={{
        background: "linear-gradient(to bottom, #f8f8f8 0%, #e5e7eb 100%)",
        isolation: "isolate",
      }}
    >
      {/* 🌫️ Reflejo tipo piso */}
      <div
        className="fixed bottom-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.03) 0%, transparent 100%)",
          transform: "perspective(1000px) rotateX(60deg)",
          transformOrigin: "bottom",
          zIndex: 1,
        }}
      />


      {/* 💽 Carrusel principal */}
      <div
        className="relative flex items-center justify-center w-full h-full"
        style={{ perspective: "1000px", zIndex: 10 }}
      >
        <button
          onClick={() => handleScroll("left")}
          className="bg-black w-10 h-10 z-100 flex items-center justify-center rounded-full absolute left-5 text-gray-400 hover:text-white text-5xl select-none"
        >
          <ArrowLeft color="#ffff"/>
        </button>

        <div className="relative flex items-center justify-center bottom-10 w-150 h-200">
          {sampleImages.map((src, index) => {
            const offset = index - centerIndex;
            const absOffset = Math.abs(offset);
            const scale = 1.3 - absOffset * 0.1;
            const rotateY = offset * -25;
            const translateX = offset * 120  ;
            const zIndex = 100 - absOffset;

            return (
              <motion.div
                key={src}
                className="absolute cursor-pointer rounded-xl overflow-hidden shadow-2xl"
                style={{
                  width: "280px",
                  height: "280px",
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  opacity: absOffset > 3 ? 0 : 1,
                }}
              >
                <img
                  src={src}
                  alt={`Cover ${index}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
                <motion.img
                src={src}
                alt={`Reflection ${index}`}
                className="rounded-xl opacity-25 blur-sm"
                style={{
                  width: 280,
                  height: 280,
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg) scaleY(-1) translateY(40px)`,
                  zIndex,
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 80%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 80%)",
                }}
              />
                
              </motion.div>

            );
            
          })}
          
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="bg-black w-10 h-10 flex justify-center items-center z-100 rounded-full absolute right-4 text-gray-400 hover:text-white text-3xl select-none"
        >
          <ArrowRight color="#ffff"></ArrowRight>
        </button>
      </div>

      {/* 🪞 Reflejo visual */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-10 blur-lg pointer-events-none">
        <div className="w-[300px] h-[40px] bg-gradient-to-t from-black/10 to-transparent rounded-full" />
      </div>
    </div>
  );
}
