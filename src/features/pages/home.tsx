import { CarouselPlugin } from "@/core/components/carouselHome";
import { useScrollHomeTrigger } from "@/shared/hooks/scrollHomeTrigger";
import Anuncios from "@/core/components/anuncios";
import Contact from "@/core/components/contact";
import GraphHome from "@/core/components/graphsHome";
import HeroSection from "@/core/components/HeroSection";
import { Map } from "@/core/components/geoChurch";
import { ChurchTable } from "@/core/components/tableChurch";

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
            <section id="Anuncios" className="panel flex flex-col bg-gray-100 w-full h-screen pt-20 p-8 items-center gap-[10%]">
                <h1 className="text-black font-bold text-4xl">Anuncios</h1>
                <Anuncios></Anuncios>
            </section>

            <section id="section2" className="panel min-h-screen bg-gray-100 flex items-center justify-center">
              <GraphHome></GraphHome>
            </section>
            <section id="section4" className="panel flex flex-wrap w-full min-h-screen items-center justify-center bg-gray-100 px-10 gap-2">
              <Map></Map>
              <div className="flex flex-col h-full gap-10 items-center justify-center">
                <h2 className="text-4xl font-bold">Iglesias en Bucaramanga</h2>
                <ChurchTable></ChurchTable>
              </div>
            </section>
            <section id="section4" className="panel flex items-center justify-center w-full h-[130vh] text-black font-bold text-center bg-gray-100 px-7">
              <h2 className="text-[4rem]">Queremos Ayudarte, Queremos Servirte.</h2>
            </section>
            <HeroSection
              titulo1="Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre, y el que en mí cree, nunca tendrá sed. Juan 3:16"
              titulo2="Contactanos, para mas informacion"
              video="/prube.mp4"
            />
            <section id="Contactanos" className="w-full z-10 h-screen flex items-center justify-center bg-gray-100">
              <Contact></Contact>
            </section>
        </main>
    )
    
}

export default Home

