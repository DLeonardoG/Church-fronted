import { CarouselPlugin } from "@/core/components/carouselHome";
import { useScrollHomeTrigger } from "@/shared/hooks/scrollHomeTrigger";
import Anuncios from "@/core/components/anuncios";
import HeroSection from "@/core/components/HeroSection";

function Home() {
    useScrollHomeTrigger({
      panelSelector: "#sectionD, #Anuncios, #section2, #section3, #section4", 
      snapDuration: 0.55,
      markers: false,
      disableOnMobile: true,
      endTrigger: "#section4",
    });


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
            <section id="section3" className="panel h-screen bg-green-500 flex items-center justify-center mb-[100vh]">
              <h1 className="text-white text-4xl">Sección 3</h1>
            </section>
            <section id="section4" className="panel flex items-center justify-center w-full h-[130vh] text-white font-bold text-center bg-black">
              <h2 className="text-[8vmin]">Queremos Ayudarte, Queremos Servirte.</h2>
            </section>
            <HeroSection
              titulo1="Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre, y el que en mí cree, nunca tendrá sed. Juan 3:16"
              titulo2="Contactanos, para mas informacion"
              video="/prube.mp4"
            />
            <section className="h-screen bg-gray-500 flex items-center justify-center">
              <h1 className="text-white text-4xl">Sección 6</h1>
            </section>
        </main>
    )
    
}

export default Home

