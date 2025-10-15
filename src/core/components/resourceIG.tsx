import React from "react";
import type { ReactNode } from "react";
import Phone from "@/core/components/phone";
import { Instagram } from "lucide-react";

interface ResourceIGProps {
  description?: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  ctaNewTab?: boolean;
  className?: string;
}

const defaultDescription: ReactNode = (
  <>
    <h3 className="text-4xl font-extrabold mb-8" data-title="about">
      Iglesia Adventista Norte <span className="text-pink-600">en Instagram</span>
    </h3>
    <p>
      <strong>Síguenos en nuestra cuenta oficial de Instagram</strong>, donde compartimos las buenas nuevas de salvación, actividades de nuestra comunidad y mensajes inspiradores. Con más de 171 publicaciones, 761 seguidores y 509 seguidos, nuestra página es un espacio para conectar con miembros de la Comunidad IASD Norte y mantenerse al día con eventos y proyectos de nuestra iglesia.
    </p>
  </>
);

const ResourceIG: React.FC<ResourceIGProps> = ({
  description,
  ctaHref = "https://www.instagram.com/iglesia__adventista__norte/",
  ctaLabel = "Ven y Síguenos",
  ctaNewTab = true,
  className = "",
}) => {
  const target = ctaNewTab ? "_blank" : undefined;
  const rel = ctaNewTab ? "noopener noreferrer" : undefined;

  return (
    <section
      id="quienes_somos"
      className={`bg-gray-100 h-[100%] lg:flex lg:items-center text-black ${className}`}
    >
      <div className=" px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Media */}
          <div className="lg:col-span-5 flex justify-center" data-card="about-media">
            <Phone />
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
                className="flex gap-3 items-center justify-center rounded-full bg-pink-600 px-6 sm:px-7 py-3 text-base font-semibold text-white shadow hover:bg-pink-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2"
                aria-label={ctaLabel}
              >
                {ctaLabel}
                <Instagram />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResourceIG;
