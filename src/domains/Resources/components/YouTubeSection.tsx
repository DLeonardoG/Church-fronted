import { Youtube } from "lucide-react";
import { RESOURCES_MEDIA, RESOURCES_SECTION_IDS, RESOURCES_TEXTS } from "../constants/resourcesConfig";

/**
 * Sección de YouTube
 * Muestra información sobre el canal de YouTube de la iglesia con un video embebido
 */
export function YouTubeSection() {
  return (
    <section
      id={RESOURCES_SECTION_IDS.YOUTUBE}
      className="min-h-screen flex items-center bg-background"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-7xl px-6 py-25 gap-10">
        {/* Texto principal */}
        <div 
          className="flex-1 space-y-6 flex flex-col justify-center" 
          data-card="home-text"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            {RESOURCES_TEXTS.YOUTUBE_TITLE}{" "}
            <span className="text-red-500 dark:text-red-400">{RESOURCES_TEXTS.YOUTUBE_TITLE_HIGHLIGHT}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {RESOURCES_TEXTS.YOUTUBE_DESCRIPTION_START}{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {RESOURCES_TEXTS.YOUTUBE_DESCRIPTION_HIGHLIGHT}
            </span>{" "}
            {RESOURCES_TEXTS.YOUTUBE_DESCRIPTION_END}
          </p>
          <a
            href={RESOURCES_MEDIA.YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center space-x-4 w-42 items-center bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 transition-colors px-6 py-3 rounded-full text-lg font-semibold text-white shadow-lg"
          >
            <span>{RESOURCES_TEXTS.YOUTUBE_BUTTON}</span>
            <Youtube />
          </a>
        </div>

        {/* Video / Media */}
        <div 
          className="flex-1 flex justify-center w-full h-full" 
          data-card="home-media"
        >
          <div className="relative w-full">
            <iframe
              className="rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full aspect-video"
              src={RESOURCES_MEDIA.YOUTUBE_VIDEO_EMBED}
              title={RESOURCES_TEXTS.YOUTUBE_VIDEO_TITLE}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
