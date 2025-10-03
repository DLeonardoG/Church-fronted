import { CarouselPlugin } from "@/core/components/carouselHome";
import { useScrollHomeTrigger } from "@/shared/hooks/scrollHomeTrigger";
import Anuncios from "@/core/components/anuncios";
import HeroSection from "@/core/components/HeroSection";

function Home() {
    // useScrollHomeTrigger({
      // panelSelector: ".panel",
      // snapDuration: 0.55,
      // markers: false,
      // disableOnMobile: true,
    // });
   
    const heroSections = [
      {
        titulo: "Wanna see something neat?",
        imagen:
          undefined,
      },
      {
        titulo: "How Neat is That?",
        imagen:
          "https://images.unsplash.com/photo-1508781197106-d8c535dcf276?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&fit=max",
      },
      {
        titulo: "Pretty Amazing Stuff",
        imagen:
          undefined,
      },
    ];

    return(
        <main className="w-full min-h-screen">
            <section id="sectionD" className="panel flex w-full h-screen justify-center">
                <CarouselPlugin></CarouselPlugin>
            </section>
            <section id="Anuncios" className="panel flex flex-col gap-3 bg-gray-200 w-full h-screen pt-25 p-4 justify-center">
                <h1 className="text-black text-3xl">Anuncios</h1>
                <Anuncios></Anuncios>
            </section>

            <section id="section2" className="panel h-screen bg-blue-500 flex items-center justify-center">
              <h1 className="text-white text-4xl">Sección 2</h1>
            </section>
            <section id="section3" className="panel h-screen bg-green-500 flex items-center justify-center">
              <h1 className="text-white text-4xl">Sección 3</h1>
            </section>
            <section className="h-screen bg-pink-500 flex items-center justify-center">
              <h1 className="text-white text-4xl">Sección 4</h1>
            </section>
            {heroSections.map((section, index) => (
              <HeroSection
                key={index}
                titulo={section.titulo}
                imagen={section.imagen}
              />
            ))}
        </main>
    )
    
}

export default Home

