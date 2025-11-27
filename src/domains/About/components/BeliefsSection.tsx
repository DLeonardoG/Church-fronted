import { cn } from "@/shared/lib/utils";
import {
  CHURCH_BELIEFS,
  BELIEFS_SECTION_TEXTS,
  BELIEF_SECTION_IDS
} from "../constants/aboutConfig";



export function BeliefsSection() {
  return (
    <section
    id={BELIEF_SECTION_IDS.CONTENT}
      className={cn(
        "w-full py-20 bg-background",
        ""
      )}
    >

      <div className="flex flex-col lg:flex-row gap-6 w-full text-center lg:text-left items-center lg:items-start lg:justify-between">
        <div className="flex flex-col gap-6 w-full lg:w-auto items-center lg:items-start">
          <div className="flex ">
            <h2 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-extrabold text-center lg:text-left",
              "text-foreground tracking-tight"
            )}>
              {BELIEFS_SECTION_TEXTS.SECTION_TITLE}
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>

        <p className="text-foreground text-lg md:text-lg max-w-lg leading-relaxed">
          {BELIEFS_SECTION_TEXTS.SECTION_SUBTITLE}
        </p>
      </div>


      {/* Tarjetas con hover estilo “speaker reveal” */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16 gap-4 px-10">
  {CHURCH_BELIEFS.map((card, i) => (
    <div
      key={i}
      className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer w-full h-100"
    >
      {/* Imagen */}
      <img
        src={card.img}
        alt={card.TITLE}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay (contenido aparece en hover) */}
      <div
        className="
          absolute inset-0 bg-black/70 flex flex-col justify-end
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 p-6
        "
      >
        <h3 className="text-2xl font-semibold text-white">
          {card.TITLE}
        </h3>

        

        {/* Descripción */}
        <p className="text-gray-200 text-sm leading-relaxed">
          {card.DESCRIPTION}
        </p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}