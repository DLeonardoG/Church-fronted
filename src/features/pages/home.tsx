import { CarouselPlugin } from "@/core/components/carouselHome";
import { useScrollHomeTrigger } from "@/domains/example/utils/scrollHomeTrigger";

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
            <section id="Anuncios" className="panel bg-red-500 w-full flex h-screen items-center justify-center">
                <h1 className="text-white text-4xl">Sección 1</h1>
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