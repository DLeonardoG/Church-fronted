import HeroSection from "@/core/components/HeroSection"
import { Handshake } from "lucide-react"

function Nosotros() {
    return(
        <main className="w-full min-h-screen">
            <HeroSection
              titulo1="ANUNCIAMOS AL MUNDO NUESTRA MAYOR ESPERANZA, EL PRONTO REGRESO DE JESÚS"
              titulo2="NUESTRA MISIÓN ES SERVIR Y SALVAR"
              video="/nosotros.MOV"
              buttonText="Quienes Somos?"
              buttonHref="#join"
              buttonIcon={<Handshake className="w-5 h-5" />}
            />
            
        </main>
    )
    
}

export default Nosotros

