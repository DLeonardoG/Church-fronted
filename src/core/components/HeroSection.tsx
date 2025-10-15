import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/shared/lib/gsap";


interface HeroSectionProps {
  titulo1: string;
  titulo2: string;
  video?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonIcon?: React.ReactNode; // cualquier ícono o componente
  buttonClassName?: string; // para customizar estilos del botón
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titulo1,
  titulo2,
  video,
  buttonText = "Contactanos",
  buttonHref = "#Contactanos",
  buttonIcon,
  buttonClassName = "",
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const videoEl = hero?.querySelector(".hero__video") as HTMLVideoElement;
    if (!hero || !videoEl) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    videoEl.play().catch(() => {
      videoEl.muted = true;
      videoEl.play();
    });

    tl.fromTo(
      text1Ref.current,
      { opacity: 0, yPercent: 50 },
      { opacity: 1, yPercent: 20, duration: 1, ease: "power3.out" }
    );

    tl.to(text1Ref.current, {
      opacity: 0,
      yPercent: -20,
      duration: 1,
      delay: 0.3,
      ease: "power2.inOut",
    });

    tl.fromTo(
      text2Ref.current,
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power3.out" },
      "<"
    );

    tl.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        scale: 0.8,
        yPercent: 20,
        pointerEvents: "none",
        zIndex: 20,
      },
      {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        duration: 1,
        ease: "back.out(1.7)",
        pointerEvents: "auto",
      }
    );

    gsap.to(videoEl, {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative z-0 w-full h-[100vh] flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <video
        className="hero__video absolute inset-0 w-full h-full object-cover"
        src={video || "https://cdn.coverr.co/videos/coverr-a-stormy-sea-6621/1080p.mp4"}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/30 z-[1]" />

      <div className="hero__content relative text-center flex flex-col items-center justify-center space-y-6 p-6">
        <h1
          ref={text1Ref}
          className="text-[6vmin] font-extrabold tracking-wide  tracking-tight leading-none text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]"
        >
          {titulo1}
        </h1>
        <h2
          ref={text2Ref}
          className="text-[7vmin] font-extrabold leading-none text-gray-100 opacity-0 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
        >
          {titulo2}
        </h2>

        {buttonText && (
          <a
            href={buttonHref}
            ref={buttonRef}
            className={`flex gap-2 items-center opacity-0 px-8 py-4 bg-white/90 text-black rounded-2xl font-bold text-lg mt-6 hover:bg-gray-200 transition relative z-20 pointer-events-auto ${buttonClassName}`}
          >
            {buttonText}
            {buttonIcon && buttonIcon}
          </a>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
