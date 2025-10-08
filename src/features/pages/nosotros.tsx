import { useScrollHomeTrigger } from "@/shared/hooks/scrollHomeTrigger";
import { MousePointerClick } from "lucide-react"

function Nosotros() {
    useScrollHomeTrigger({
          panelSelector: "#hero__nosotros, #nosotros", 
          snapDuration: 0.55,
          markers: false,
          disableOnMobile: true,
          endTrigger: "#nosotros",
        });
    return(
        <main className="w-full min-h-screen bg-gray-100">
            <section className="panel w-full h-screen flex justify-center items-center pt-12">
                <div className="flex flex-col bg-[#1A1A1A] w-[98%] md:w-200 lg:w-[90%] h-[90%] md:h-250 lg:h-[85%] rounded-4xl px-9 py-15 brightness-70"
                style={{
                      backgroundImage:
                        "url('https://media.istockphoto.com/id/1062640036/es/foto/incontables-decenas-de-hermosas-rosas-rojas-en-un-carro-de-flor-visto-desde-arriba-en-una.jpg?s=612x612&w=0&k=20&c=ajZFBmCWLU4oL1sOWvkbl5IGnka-C1mO12646kPxXyg=')",
                    }}
                >
                    <div className=" w-full flex justify-between text-m italic mb-18">
                        <a href="/home#Contactanos" className="flex gap-1 items-center">
                            <p  className="text-white/90 font-bold">Unete a Nosotros</p>
                            <MousePointerClick className="h-5 w-5" color="#ffffff"></MousePointerClick>
                        </a>
                        <span className="text-white font-bold">Visitanos!</span>
                    </div>

                    <div className="flex flex-col text-white space-y-2 w-[54%] mb-5">
                        <span className="text-7xl font-bold ">Iglesia Adventista</span>
                        <span className="text-8xl font-bold ">Norte</span>
                    </div>
                    <div className="w-[54%] text-white italic">
                        <p>La Iglesia Adventista del Séptimo Día lleva esperanza al mundo para que las personas vivan con la certeza de que su historia no termina aquí. Esa es la certeza encontrada a lo largo de toda la Biblia.</p>
                    </div>
                    <a href="#nosotros" className="relative left-200 bottom-30 flex items-center justify-center bg-white/90 text-black italic hover:bg-white w-[15%] py-2 text-lg font-semibold rounded-3xl">
                      Quienes Somos
                    </a>

                </div>
            </section>

            <section id="nosotros" className="panel h-screen w-full p-25">
                <h2 className="text-4xl font-bold justify-center flex">Quienes Somos</h2>
            </section>
            
        </main>
    )
    
}

export default Nosotros

