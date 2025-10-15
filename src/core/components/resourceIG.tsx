import React, { ReactNode } from "react";
import Phone from "@/core/components/phone";
import { Instagram } from "lucide-react"

// --- Props Types ---
interface ResourceIGProps {
  title?: string;
  tagline?: string;
  description?: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  ctaNewTab?: boolean;
  className?: string;
}

// --- Default Description ---
const defaultDescription: ReactNode = (
  <>
    <h3 className="text-4xl font-extrabold mb-8">Iglesia Adventista Norte <span className="text-pink-600">en Instagram</span></h3>
    <p><strong>Síguenos en nuestra cuenta oficial de Instagram</strong>
        , donde compartimos las buenas nuevas de salvación, actividades de nuestra comunidad y mensajes inspiradores. Con más de 171 publicaciones, 761 seguidores y 509 seguidos, nuestra página es un espacio para conectar con miembros de la Comunidad IASD Norte y mantenerse al día con eventos y proyectos de nuestra iglesia.
    </p>
  </>
);

// --- Check Icon ---
const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-5 h-5 ${className || ''}`}>
    <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Component ---
const ResourceIG: React.FC<ResourceIGProps> = ({
  title = "¿Qué es ZONO?",
  tagline = "La nueva forma de vender.",
  description,
  ctaHref = "#registro",
  ctaLabel = "Ven y Siguenos",
  ctaNewTab = true,
  className = "",
}) => {
  const target = ctaNewTab ? "_blank" : undefined;
  const rel = ctaNewTab ? "noopener noreferrer" : undefined;

  return (
    <section
      id="quienes_somos"
      className={`bg-white min-h-screen lg:flex lg:items-center scroll-mt-10 text-black py-16 sm:py-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Encabezado */}
        

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14  items-center">
          {/* Video */}
          <div className="lg:col-span-5 flex justify-center" data-card="about-media">
            <Phone></Phone>
          </div>

          {/* Texto */}
          <div className="lg:col-span-6 xl:pr-8" data-card="about-text">
            <p className="text-lg leading-8 text-gray-800">
              {description || defaultDescription}
            </p>

            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={ctaHref}
                target={target}
                rel={rel}
                className="flex gap-3 items-center justify-center rounded-full bg-pink-600 px-6 sm:px-7 py-3 text-base font-semibold text-white shadow hover:bg-pink-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 "
                aria-label={ctaLabel}
              >
                {ctaLabel}
                <Instagram></Instagram>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceIG;
