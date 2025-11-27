import { Instagram } from "lucide-react";
import { RESOURCES_MEDIA, RESOURCES_SECTION_IDS, RESOURCES_TEXTS } from "../constants/resourcesConfig";
import Phone from "./Phone";

/**
 * Sección de Instagram
 * Muestra información sobre la cuenta de Instagram de la iglesia con una vista de phone
 */
export function InstagramSection() {
  return (
    <section
      id={RESOURCES_SECTION_IDS.INSTAGRAM}
      className="bg-background h-full lg:flex lg:items-center"
    >
      <div className="px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Media */}
          <div className="lg:col-span-5 flex justify-center" data-card="about-media">
            <Phone />
          </div>

          {/* Texto */}
          <div className="lg:col-span-6 xl:pr-8" data-card="about-text">
            <h3 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 dark:text-white" data-title="about">
              {RESOURCES_TEXTS.INSTAGRAM_TITLE}{" "}
              <span className="text-pink-600 dark:text-pink-400">{RESOURCES_TEXTS.INSTAGRAM_TITLE_HIGHLIGHT}</span>
            </h3>
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">{RESOURCES_TEXTS.INSTAGRAM_DESCRIPTION_START}</strong>
              {RESOURCES_TEXTS.INSTAGRAM_DESCRIPTION_MAIN}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={RESOURCES_MEDIA.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center justify-center rounded-full bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-800 px-6 sm:px-7 py-3 text-base font-semibold text-white shadow-lg transition focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                aria-label={RESOURCES_TEXTS.INSTAGRAM_BUTTON}
              >
                {RESOURCES_TEXTS.INSTAGRAM_BUTTON}
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
