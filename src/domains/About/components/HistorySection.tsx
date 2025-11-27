import { Card, CardContent } from "@/core/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { Church, BookOpen, Heart, Users, GraduationCap, Stethoscope } from "lucide-react";
import { CHURCH_HISTORY } from "../constants/aboutConfig";
import { useEffect } from "react";

export function HistorySection() {
  useEffect(() => {
  const section = document.getElementById("historySection") as HTMLElement | null;
  const fill = document.getElementById("historyTimelineFill") as HTMLElement | null;

  if (!section || !fill) return; // ✔ Protege valores null

  function update() {
    // TS ahora sabe que "section" y "fill" NO son null aquí
    const sectionTop = section!.offsetTop;
    const sectionHeight = section!.offsetHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    let progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);
    progress = Math.max(0, Math.min(progress, 1));

    fill!.style.height = progress * 110 + "%";
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  return () => {
    window.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
  };
}, []);


  const timelineEvents = [
    {
      year: "1945",
      title: "Primeros Pasos en Bucaramanga",
      description: "Un pequeño grupo de creyentes comenzó a reunirse en casas particulares, compartiendo la esperanza adventista en la ciudad.",
      icon: <Church className="w-6 h-6 text-primary" />,
    },
    {
      year: "1952",
      title: "Construcción de la Primera Iglesia",
      description: "Con esfuerzo comunitario y donaciones, se levantó la primera capilla en el barrio San Luis, marcando el nacimiento oficial de la congregación.",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
    },
    {
      year: "1978",
      title: "Fundación de la Escuela Adventista",
      description: "Se inauguró la Escuela Adventista de Bucaramanga, comprometida con la educación integral basada en valores cristianos.",
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
    },
    {
      year: "1993",
      title: "Expansión a la Zona Norte",
      description: "La iglesia extendió su ministerio al norte de la ciudad, estableciendo nuevas congregaciones y centros de salud comunitarios.",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      year: "2005",
      title: "Centro de Salud Adventista",
      description: "Inauguración del Centro de Salud Adventista, ofreciendo atención médica gratuita y programas de prevención y bienestar.",
      icon: <Stethoscope className="w-6 h-6 text-primary" />,
    },
    {
      year: "2018",
      title: "Red de Congregaciones Vibrantes",
      description: "Hoy somos más de 10 congregaciones coordinadas bajo un mismo propósito: transformar vidas a través del evangelio, la educación y el servicio.",
      icon: <Heart className="w-6 h-6 text-primary" />,
    },
  ];

return (
    <section id="historySection" className="w-full max-w-7xl mx-auto py-20 relative">

      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-6 w-full text-center pb-10 lg:text-left items-center lg:items-start lg:justify-between">
        <div className="flex flex-col gap-6 w-full lg:w-auto items-center lg:items-start">
          <div className="flex">
            <h2 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-extrabold text-center lg:text-left",
              "text-foreground tracking-tight"
            )}>
              {CHURCH_HISTORY.TITLE}
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>

        <p className="text-foreground text-lg md:text-lg max-w-lg leading-relaxed">
          {CHURCH_HISTORY.SUBTITLE}
        </p>
      </div>

      <Card className="border-none bg-transparent transition-all relative">
        <CardContent className="px-30 py-20 relative border-none bg-transparent">

          <div
  className="
    absolute left-6 top-10 
    lg:left-1/2 lg:top-10 
    transform -translate-x-1/2
    w-1 
    z-30 
    pointer-events-none
  "
  id="timelineContainer"
>
  {/* TRACK */}
  <div
    className="rounded-full opacity-40 bg-gray-300"
    id="timelineTrack"
  ></div>

  {/* FILL */}
  <div
    id="historyTimelineFill"
    className="w-full rounded-full absolute top-0 left-0 transition-all duration-200 dark:bg-white"
    style={{
      height: "0%",
      background: `
        linear-gradient(
          to bottom,
          #ffffff 0%,
          #e8e8e8 10%,
          #3a3a3a 50%,
          #1a1a1a 80%,
          #000000 100%
        )
      `,
      boxShadow: `
        inset 0 2px 6px rgba(255, 255, 255, 0.25),
        inset 0 -3px 8px rgba(0, 0, 0, 0.35),
        0 4px 14px rgba(0, 0, 0, 0.4)
      `,
      border: "1px solid rgba(255,255,255,0.25)",
      backdropFilter: "blur(2px)",
    }}
  ></div>
</div>


          {/* --- TIMELINE --- */}
          <div className="space-y-10 relative z-10">

            {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={cn(
                // 🔹 MOBILE / TABLET (DEFAULT)
                // todo a la derecha, texto alineado a la derecha
                "relative w-full px-0 py-0 text-right",
              
                // 🔹 DESKTOP (ALTERNADO)
                index % 2 === 0
                  ? "lg:w-1/2 lg:ml-auto lg:pl-20 lg:text-left"
                  : "lg:w-1/2 lg:mr-auto lg:pr-20 lg:text-right"
              )}
            >


                <div className="flex items-center gap-3 mb-3">
                  
                  <span className="text-4xl font-extrabold text-primary">{event.year}</span>
                </div>

                <h4 className="text-lg font-semibold text-foreground">{event.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>

              </div>
            ))}

          </div>

        </CardContent>
      </Card>
    </section>
  );
}
