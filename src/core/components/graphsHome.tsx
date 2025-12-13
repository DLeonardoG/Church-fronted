import { cn } from "@/shared/lib/utils";
import { Building2, CalendarDays, Users, UsersRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  delay?: number;
  isImage?: boolean;
}

function StatCard({ icon, count, label, delay = 0, isImage = false }: StatCardProps) {
  return (
    <div
      className={cn(
        "group relative w-[65%] sm:w-[35%] md:w-[33%] lg:w-[22%]",
        "min-w-[160px] max-w-[260px]",
        "rounded-3xl bg-card border border-border",
        "p-6 aspect-square",
        "flex flex-col items-center justify-center gap-4",
        "transition-all duration-500 ease-out",
        "hover:scale-105 hover:shadow-2xl hover:border-primary/50",
        "cursor-pointer"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradiente de fondo sutil */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        {/* Icono */}
        <div className={cn(
          "flex items-center justify-center",
          isImage ? "h-16" : "w-16 h-16 rounded-2xl bg-primary/10 text-primary",
          "transition-all duration-300",
          !isImage && "group-hover:scale-110 group-hover:bg-primary/20"
        )}>
          {icon}
        </div>

        {/* Número */}
        <div className="flex items-baseline gap-1">
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold",
            "text-foreground tabular-nums",
            "transition-colors duration-300"
          )}>
            {count}
          </h2>
          <span className="text-2xl font-bold text-primary">+</span>
        </div>

        {/* Label */}
        <p className={cn(
          "text-sm md:text-base font-medium",
          "text-muted-foreground text-center",
          "transition-colors duration-300",
          "group-hover:text-foreground"
        )}>
          {label}
        </p>
      </div>
    </div>
  );
}

export default function GraphHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [activeMembers, setActiveMembers] = useState(0);
  const [smallGroups, setSmallGroups] = useState(0);
  const [departments, setDepartments] = useState(0);
  const [events, setEvents] = useState(0);
  const [youth, setYouth] = useState(0);

  const targetNumbers = {
    activeMembers: 300,
    smallGroups: 20,
    departments: 10,
    events: 5,
    youth: 50,
  };

  const animateCount = (
  setter: React.Dispatch<React.SetStateAction<number>>,
  target: number,
  duration = 800
) => {
  let start = 0
  const steps = duration / 16
  const increment = target / steps

  const counter = setInterval(() => {
    start += increment
    if (start >= target) {
      setter(target)
      clearInterval(counter)
    } else {
      setter(Math.floor(start))
    }
  }, 16)
}


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animar contadores con delays escalonados
            setTimeout(() => animateCount(setActiveMembers, targetNumbers.activeMembers), 100);
            setTimeout(() => animateCount(setSmallGroups, targetNumbers.smallGroups), 100);
            setTimeout(() => animateCount(setDepartments, targetNumbers.departments), 100);
            setTimeout(() => animateCount(setEvents, targetNumbers.events), 100);
            setTimeout(() => animateCount(setYouth, targetNumbers.youth),100);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col w-full h-full p-8 py-20 items-center gap-16 bg-background"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
        <div className="flex items-center gap-3">
          <h2 className={cn(
            "font-bold text-4xl md:text-5xl lg:text-6xl",
            "text-foreground tracking-tight"
          )}>
            Iglesia Adventista Norte
          </h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Una comunidad vibrante dedicada al servicio y la fe
        </p>
      </div>

      {/* Stats Grid */}
      <div className="flex flex-wrap gap-6 justify-center items-center max-w-7xl">
        {/* Miembros Activos */}
        <StatCard
          icon={<Users className="w-8 h-8" />}
          count={activeMembers}
          label="Miembros Activos"
          delay={100}
        />

        {/* Grupos Pequeños */}
        <StatCard
          icon={<UsersRound className="w-8 h-8" />}
          count={smallGroups}
          label="Grupos Pequeños"
          delay={200}
        />

        {/* Departamentos */}
        <StatCard
          icon={<Building2 className="w-8 h-8" />}
          count={departments}
          label="Departamentos"
          delay={300}
        />

        {/* Eventos */}
        <StatCard
          icon={<CalendarDays className="w-8 h-8" />}
          count={events}
          label="Eventos"
          delay={400}
        />

        {/* Niños y Jóvenes - Imagen personalizada */}
        <StatCard
          icon={
            <img
              className="h-16 w-auto object-contain"
              src="https://www.guiasmayores.com/uploads/1/1/3/1/1131412/cq_dna_-_blanco_y_negro.png"
              alt="Guías Mayores"
            />
          }
          count={youth}
          label="Niños y Jóvenes"
          delay={500}
          isImage={true}
        />
      </div>
    </div>
  );
}
