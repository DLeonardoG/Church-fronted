import { CarouselOrientation } from "@/core/components/carouselEvents"

function Eventos() {
    return(
        <main className="w-full min-h-screen pt-50">
            <div className="flex">
                <CarouselOrientation></CarouselOrientation>
                <CarouselOrientation></CarouselOrientation>
                <CarouselOrientation></CarouselOrientation>
            </div>
            
        </main>
    )
    
}

export default Eventos

