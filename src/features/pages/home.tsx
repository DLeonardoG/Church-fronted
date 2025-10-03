import { CarouselPlugin } from "@/core/components/carouselHome";
import { useScrollHomeTrigger } from "@/shared/hooks/scrollHomeTrigger";
import Anuncios from "@/core/components/anuncios";

function Home() {

    useScrollHomeTrigger({
      panelSelector: ".panel",
      snapDuration: 0.55,
      markers: false,
      disableOnMobile: true,
    })

    return(
        <main className="w-full min-h-screen">
            <section id="sectionD" className="panel flex w-full h-screen justify-center">
                <CarouselPlugin></CarouselPlugin>
            </section>
            <section id="Anuncios" className="panel flex flex-col gap-3 bg-gray-200 w-full h-screen pt-25 p-4 justify-center">
                <h1 className="text-black text-3xl">Anuncios</h1>
                <Anuncios></Anuncios>
            </section>
            <section id="section" className="panel h-screen bg-blue-500 flex items-center justify-center">
              <h1 className="text-white text-4xl">Sección 2</h1>
            </section>
            <section id="section2" className="panel h-screen bg-green-500 flex items-center justify-center">
              <h1 className="text-white text-4xl">Sección 3</h1>
            </section>
        </main>
    )
    
}

export default Home

