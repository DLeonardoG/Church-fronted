import { Facebook, Youtube, Instagram} from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full h-screen pt-170 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 pb-5">
        <div className="flex flex-col xl:flex-row">
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
                  Asociación del Oriente Colombiano
                </span>
              </div>

              <hr className="w-full border-gray-300 mt-4 mb-4" />

              <div className="text-center md:text-left leading-relaxed">
                <p>Carrera 20#6-47 Comuneros</p>
                <p>Bucaramanga, Santander</p>
                <p>Colombia</p>
                <p>70200710</p>
                <p className="mt-4">+57 30161818</p>
              </div>
            </div>

            <div className=" hidden xl:block mt-15 ">
              <span className="font-semibold">Nuestras redes sociales</span>
              <div className="flex gap-6 mt-3 justify-start text-xl">
                <a href="https://www.facebook.com/iglesiaadvnorte" target="_blank" aria-label="Facebook">
                  <Facebook  />
                </a>
                <a href="https://www.youtube.com/@iglesiaadventistanortebuca6594" target="_blank" aria-label="Youtube">
                  <Youtube  />
                </a>
                <a href="https://www.instagram.com/iglesia__adventista__norte/" target="_blank" aria-label="Instagram">
                  <Instagram  />
                </a>
                
              </div>
            </div>
          </div>

          <div className="flex hidden xl:block flex-1 ml-10 mt-25 items-center justify-center">
            <div className="pb-4 mb-4 border-b">
              <h2 className="text-lg font-semibold mb-3">Sobre nosotros</h2>
              <ul className="grid grid-cols-3 gap-2 text-sm">
                <li><a href="http://institucional.adventistas.org/es/" className="hover:underline">Los Adventistas</a></li>
                <li><a href="https://institucional.adventistas.org/es/nuestras-crencias/" className="hover:underline">Creencias</a></li>
                <li><a href="https://institucional.adventistas.org/es/quienes-somos/mision-y-servicio/" className="hover:underline">Misión y servicio</a></li>
                <li><a href="https://institucional.adventistas.org/es/quienes-somos/estructura-organizacional/" className="hover:underline">Organización</a></li>
              </ul>
            </div>

            <div className="pb-4 mb-4 border-b">
              <h2 className="text-lg font-semibold mb-3">Departamentos</h2>
              <ul className="grid grid-cols-3 gap-2 text-sm">
                <li><a href="https://www.adventistas.org/es/afam/" className="hover:underline">Feja</a></li>
                <li><a href="https://www.adventistas.org/es/asa/" className="hover:underline">Guias</a></li>
                <li><a href="https://www.adventistas.org/es/asociacionministerial/" className="hover:underline">Asociación Ministerial</a></li>
                <li><a href="https://www.adventistas.org/es/aventureros/" className="hover:underline">Aventureros</a></li>
                <li><a href="https://www.adventistas.org/es/comunicacion" className="hover:underline">Comunicación</a></li>
                <li><a href="https://www.adventistas.org/es/conquistadores/" className="hover:underline">Conquistadores</a></li>
              </ul>
            </div>

            
          </div>
        </div>
      </div>
    </footer>
  )
}

