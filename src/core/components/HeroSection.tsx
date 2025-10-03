import React, { useEffect, useRef } from "react";
import { gsap } from "@/shared/lib/gsap";

interface HeroSectionProps {
  titulo: string;
  imagen?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ titulo, imagen }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const headline = hero.querySelector(".hero__headline span");
    const image = hero.querySelector(".hero__image");

    if (headline) {
      // Animación de texto
      gsap.fromTo(
        headline,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: hero,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }

    if (image) {
      // Animación parallax + pin solo si hay imagen
      gsap.to(hero, {
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: true,
          toggleClass: "active",
        },
      });

      gsap.to(image, {
        y: "-20%",
        scrollTrigger: {
          trigger: hero,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="panel relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {imagen && (
        <img
          src={imagen}
          alt={titulo}
          className="hero__image absolute top-0 left-0 w-full h-[120%] object-cover z-0"
        />
      )}
      <div className="hero__content absolute inset-0 flex items-center justify-center z-10">
        <h1 className="hero__headline text-white text-6xl font-bold">
          <span>{titulo}</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
