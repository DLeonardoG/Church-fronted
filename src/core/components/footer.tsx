

export default function Footer() {
  return (
    <footer className="w-full h-screen pt-170 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 pb-5">
        <div className="flex flex-col xl:flex-row">
          {/* Columna izquierda */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col items-center xl:items-start px-5 xl:px-0">
              <div className="text-center xl:text-left">
                <a
                  href="/"
                  title="División Sudamericana"
                  className="flex flex-col justify-center"
                >
                  <img
                    src="https://www.adventistas.org/es/wp-content/themes/pa-theme-sedes/assets/sedes/es/logo-iasd-vertical.svg"
                    alt="División Sudamericana"
                    className="w-32 mx-auto xl:mx-0"
                  />
                </a>
                <span className="block mt-4 text-center xl:text-left font-medium">
                  División Sudamericana
                </span>
              </div>

              <hr className="w-full border-gray-300 mt-4 mb-4" />

              <div className="text-center md:text-left leading-relaxed">
                <p>A. L3 Sul - SGAS 611</p>
                <p>Conj. D, Parte C</p>
                <p>Brasilia - DF - BR</p>
                <p>70200710</p>
                <p className="mt-4">+55(61)37011818</p>
              </div>
            </div>

            <div className="hidden xl:block mt-6 text-right">
              <span className="font-semibold">Nuestras redes sociales</span>
              <div className="flex gap-4 mt-3 justify-end text-xl">
                <a href="https://www.facebook.com/IglesiaAdventistadelSeptimoDia/" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/iasdsudamerica" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/c/IglesiaAdventistadelS%C3%A9ptimoD%C3%ADa" aria-label="Youtube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/iasdsudamerica/" aria-label="Instagram">
                  <i className="fab fa-instagram-square"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="hidden xl:block flex-1 ml-10">
            {/* Menu 1 */}
            <div className="pb-4 mb-4 border-b">
              <h2 className="text-lg font-semibold mb-3">Sobre nosotros</h2>
              <ul className="grid grid-cols-3 gap-2 text-sm">
                <li><a href="http://institucional.adventistas.org/es/" className="hover:underline">Los Adventistas</a></li>
                <li><a href="https://institucional.adventistas.org/es/nuestras-crencias/" className="hover:underline">Creencias</a></li>
                <li><a href="https://institucional.adventistas.org/es/quienes-somos/mision-y-servicio/" className="hover:underline">Misión y servicio</a></li>
                <li><a href="https://institucional.adventistas.org/es/quienes-somos/estructura-organizacional/" className="hover:underline">Organización</a></li>
              </ul>
            </div>

            {/* Menu 2 - Departamentos */}
            <div className="pb-4 mb-4 border-b">
              <h2 className="text-lg font-semibold mb-3">Departamentos</h2>
              <ul className="grid grid-cols-3 gap-2 text-sm">
                <li><a href="https://www.adventistas.org/es/afam/" className="hover:underline">AFAM</a></li>
                <li><a href="https://www.adventistas.org/es/asa/" className="hover:underline">ASA</a></li>
                <li><a href="https://www.adventistas.org/es/asociacionministerial/" className="hover:underline">Asociación Ministerial</a></li>
                <li><a href="https://www.adventistas.org/es/aventureros/" className="hover:underline">Aventureros</a></li>
                <li><a href="https://www.adventistas.org/es/comunicacion" className="hover:underline">Comunicación</a></li>
                <li><a href="https://www.adventistas.org/es/conquistadores/" className="hover:underline">Conquistadores</a></li>
                {/* …continúa con los demás ítems */}
              </ul>
            </div>

            {/* Menu 3 - Sedes */}
            <div className="pb-4 mb-4 border-b">
              <h2 className="text-lg font-semibold mb-3">Sedes Regionales</h2>
              <ul className="grid grid-cols-3 gap-2 text-sm">
                <li><a href="http://ua.adventistas.org" className="hover:underline">Unión Argentina</a></li>
                <li><a href="http://ub.adventistas.org" className="hover:underline">Unión Boliviana</a></li>
                <li><a href="http://ucb.adventistas.org" className="hover:underline">Unión Central Brasileña</a></li>
                <li><a href="http://uch.adventistas.org" className="hover:underline">Unión Chilena</a></li>
                {/* …continúa con los demás ítems */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

