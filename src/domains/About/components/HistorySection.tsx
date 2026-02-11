import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/shared/lib/utils";
import { CHURCH_HISTORY } from "../constants/aboutConfig";


export function HistorySection() {
  // Mapeamos tus eventos al formato de la Timeline de Aceternity
  const timelineData = [
    {
      title: "Desde 1924",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <h4>Primeros Pasos en Bucaramanga</h4>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base leading-relaxed">
            Desde 1924 comenzó la evangelización adventista en Bucaramanga, lo que llevó al crecimiento de la iglesia. Se mencionan los 12 primeros miembros bautizados de la iglesia Norte como parte fundamental de su historia.
          </p>
        </div>
      ),
    },
    {
      title: "De 1962 hasta 1970",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <h4>El Legado de la Carrera 20</h4>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base leading-relaxed">
            Bajo la dirección del Pr. Campo Elías Durán (1962-1970), la iglesia creció exponencialmente y construyó su sede actual en la Carrera 20. Con un aporte simbólico de $1.000 por familia y el esfuerzo unido de apellidos fundadores como los Gamboa y los Jaimes, se consolidó el templo que hoy celebra seis décadas de fe y servicio.
          </p>
        </div>
      ),
    },
    {
      title: "De 1971 hasta 1982",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <h4>Expansión y Conquista: El Impulso Misionero</h4>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base leading-relaxed">
            Entre 1971 y 1982, la iglesia fortaleció su alcance misionero bajo la guía de pastores como Fidel Merchán y Jaime Suárez. Este periodo fue clave para la evangelización rural, logrando fundar congregaciones en Rionegro, Lebrija y Tona que hoy son comunidades establecidas, tales como Montevideo y Vijagual.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 w-[70%] bg-neutral-200 dark:bg-neutral-800 ">
              <img src="images/history/1.jpeg" className="w-full h-full rounded-lg" alt="" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "De 1984 hasta 1990",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <h4>Estructura y Liderazgo: La Consolidación de la Iglesia</h4>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base leading-relaxed">
            Entre 1984 y 1990, la iglesia se enfocó en la consolidación interna y legal. Liderada por pastores como Daniel Mora y Guillermo Campos, se organizaron formalmente los departamentos y la Escuela Sabática, logrando además una formación sólida de líderes que profesionalizaron y fortalecieron la estructura de la comunidad.
          </p>
        </div>
      ),
    },
    {
      title: "En el año 1986",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <h4>Modernización y Armonía: Renovando la Casa de Dios</h4>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base leading-relaxed">
            En 1986, la iglesia modernizó sus instalaciones (bancas, techo y ventilación), permitiendo recibir eventos internacionales como el Congreso Colombo Venezolano. Paralelamente, nació el coro institucional dirigido por el Prof. Juan Alberto Díaz, fusionando el talento musical con la visión misionera de la congregación.
          </p>
          <div className="flex gap-2 w-full">
            <div className="h-40 w-[20%] bg-neutral-200 dark:bg-neutral-800 ">
              <img src="images/history/2.jpeg" className="w-full h-full rounded-lg" alt="" />
            </div>
            <div className="h-40 w-[20%] bg-neutral-200 dark:bg-neutral-800 ">
              <img src="images/history/3.jpeg" className="w-full h-full rounded-lg" alt="" />
            </div>
            <div className="h-40 w-[20%] bg-neutral-200 dark:bg-neutral-800 ">
              <img src="images/history/4.jpeg" className="w-full h-full rounded-lg" alt="" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "De 1991 hasta 2002",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <h4>Visión al Futuro: Infraestructura y Educación</h4>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base leading-relaxed">
            Entre 1991 y 2002, la iglesia se enfocó en el crecimiento arquitectónico con miras a la educación. Se construyó un edificio de tres pisos destinado a oficinas, clubes y futuras aulas para el Colegio Adventista Libertad. Esta obra fue liderada por una comisión especial de hermanos y pastores, consolidando el equipamiento total de la planta física.          
          </p>
          <div className="flex gap-4">
            <div className="h-40 w-[35%] bg-neutral-200 dark:bg-neutral-800 ">
              <img src="images/history/5.jpeg" className="w-full h-full rounded-lg" alt="" />
            </div>
            <div className="h-40 w-[35%] bg-neutral-200 dark:bg-neutral-800 ">
              <img src="images/history/7.jpeg" className="w-full h-full rounded-lg" alt="" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Del año 2002 hasta el año 2010",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <h4>Transformación y Altruismo: Una Nueva Visión</h4>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base leading-relaxed">
            De 2002 a 2010, la iglesia adoptó una identidad más social y altruista. Durante esta gestión, se modernizó la infraestructura operativa con una nueva oficina pastoral y se dio un impulso histórico a la música con la actualización del equipo de sonido y la llegada del piano en 2005, renovando así la experiencia de adoración.
          </p>
          <div className="flex gap-4">
            <div className="h-40 w-[15%] bg-neutral-200 dark:bg-neutral-800 ">
              <img src="images/history/8.jpeg" className="w-full h-full rounded-lg" alt="" />
            </div>
            <div className="h-40 w-[35%] bg-neutral-200 dark:bg-neutral-800 ">
              <img src="images/history/6.jpeg" className="w-full h-full rounded-lg" alt="" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Del año 2010 al 2018",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <h4>Educación y Expansión: El Sueño del Colegio Libertad</h4>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base leading-relaxed">
            Entre 2010 y 2018, la iglesia consolidó su proyecto educativo con el Colegio Libertad, pasando de 80 a 350 estudiantes. Este periodo también destacó por la expansión misionera con la creación de la iglesia Maranatha y mejoras físicas significativas en la fachada y áreas externas del templo.
          </p>
        </div>
      ),
    },
    {
      title: "En el año 2019 hasta hoy",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <h4>Proezas de Dios y Semillero de Líderes</h4>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base leading-relaxed">
            Desde 2019, liderada por el Pr. Ortega, la iglesia modernizó sus áreas administrativas y tecnológicas (audiovisuales y oficinas). Además de su labor material, se destaca su legado como cuna de pastores y líderes internacionales, cerrando este ciclo de 60 años con gratitud por la fidelidad de Dios y la esperanza del pronto regreso de Jesús.
          </p>
          <div className="flex gap-4">
            <div className="h-40 w-[35%] bg-neutral-200 dark:bg-neutral-800 ">
              <img src="images/history/10.webp" className="w-full h-full rounded-lg" alt="" />
            </div>
            <div className="h-40 w-[35%] bg-neutral-200 dark:bg-neutral-800 ">
              <img src="images/history/11.webp" className="w-full h-full rounded-lg" alt="" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="historySection" className="w-full bg-white dark:bg-neutral-950">
      <div className="flex flex-col lg:flex-row gap-6 w-full text-center pb-15 lg:text-left items-center lg:items-start lg:justify-between">
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

      <Timeline data={timelineData} />
    </section>
  );
}