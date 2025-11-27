
const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Seventh-day_Adventist_Church_logo_in_Spanish.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Emblema_del_Club_de_Conquistadores.svg/1971px-Emblema_del_Club_de_Conquistadores.svg.png",
  "https://www.guiasmayores.com/uploads/1/1/3/1/1131412/9251040_1_orig.png",
  "https://adra.org.nz/wp-content/uploads/2019/11/adra-vertical-logo.png",
  "https://www.guiasmayores.com/uploads/1/1/3/1/1131412/gm_globo.png",
];

export function BrandSlider() {
  return (
    <div className="relative overflow-hidden py-20 w-90 sm:w-170  lg:w-250">
      {/* Track wrapper absoluto */}
      <div className="absolute flex w-max animate-marquee gap-34">
        {/* Primer bloque */}
        <div className="flex items-center gap-34">
          {logos.map((src, i) => (
            <img
              key={`set1-${i}`}
              src={src}
              className="h-20 opacity-80 hover:opacity-100 transition-opacity"
              alt="logo"
            />
          ))}
        </div>

        {/* Segundo bloque duplicado */}
        <div className="flex items-center gap-34">
          {logos.map((src, i) => (
            <img
              key={`set2-${i}`}
              src={src}
              className="h-20 opacity-80 hover:opacity-100 transition-opacity"
              alt="logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
