import { Youtube } from "lucide-react";

function ResourceYT() {
  return (
    <section className="min-h-[100vh] flex items-center bg-gray-100 text-gray-900 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center max-w-7xl px-6 py-25 gap-10">

        {/* Texto principal */}
        <div className="flex-1 space-y-6 flex flex-col justify-center" data-card="home-text">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Iglesia Adventista Norte <span className="text-red-500">En Youtube</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nos Encontramos en Youtube{" "}
            <span className="font-semibold text-gray-900">Visítanos</span> y suscríbete para más contenido.
          </p>
          <a
            href="https://www.youtube.com/@iglesiaadventistanortebuca6594"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center space-x-4 w-42 items-center bg-red-500 hover:bg-red-600 transition-colors px-6 py-3 rounded-full text-lg font-semibold text-white shadow-lg"
          >
            <span>Visítanos</span> <Youtube />
          </a>
        </div>

        {/* Video / Media */}
        <div className="flex-1 flex justify-center w-full h-full" data-card="home-media">
          <div className="relative w-full">
            <iframe
              className="rounded-2xl shadow-2xl border border-gray-100 w-full aspect-video"
              src="https://www.youtube.com/embed/FwbFB7_cJPw"
              title="Presentación Canal"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default ResourceYT;
