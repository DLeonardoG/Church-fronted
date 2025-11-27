import { MISSION_VISION } from "../constants/aboutConfig";

export function MissionVisionSection() {
  const items = [
    {
      id: "01",
      title: MISSION_VISION.MISSION.TITLE,
      description: MISSION_VISION.MISSION.DESCRIPTION,
    },
    {
      id: "02",
      title: MISSION_VISION.VISION.TITLE,
      description: MISSION_VISION.VISION.DESCRIPTION,
    },
    {
      id: "03",
      title: "Nuestros Valores",
      description:
        "Promovemos la fe, el servicio, la unidad, el compromiso con la comunidad y la esperanza en Cristo, guiando cada acción de nuestra iglesia local.",
    },
    {
      id: "04",
      title: "Nuestro Compromiso",
      description:
        "Nos dedicamos a compartir el mensaje del evangelio, acompañar a las familias, fortalecer la juventud y servir con amor siguiendo el ejemplo de Jesús.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-100 dark:bg-[#0c0c0c] rounded-4xl py-18 px-15 overflow-hidden border border-white/10 hover:border-white/20 transition"
          >
            {/* Número gigante */}
            <span className="absolute bottom-4 right-6 text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white-500 to-blue-700 dark:to-blue-800 opacity-80 select-none">
              {item.id}
            </span>

            {/* Título */}
            <h3 className="dark:text-white font-semibold tracking-wide text-lg mb-4">
              {item.title.toUpperCase()}
            </h3>

            {/* Texto */}
            <p className="dark:text-gray-400 leading-relaxed text-xs lg:text-sm md:text-base max-w-sm relative z-10">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
