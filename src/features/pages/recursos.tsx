import ResourceYT from "@/core/components/resourceYT"
import ResourceIG from "@/core/components/resourceIG"
import { FlipPinnedOverlay } from "@/core/components/FlipPinnedOverlay"
import TestimonialCarousel from "@/core/components/testimonials"




function Recursos() {
    return(
        <div className="w-full h-full">
            <FlipPinnedOverlay
              flipEase="power2.inOut"
              scrub={0.25}         
            >
                <ResourceYT></ResourceYT>
                <div className="w-full h-[115%] ">
                    <ResourceIG></ResourceIG>
                </div>
            </FlipPinnedOverlay>
            <section className="flex justify-center items-center bg-gray-100 w-full min-h-screen">
                <div className="flex flex-col w-7xl h-full  space-y-14">
                    <div className="flex w-full h-20 justify-center items-center">
                        <h2 className="text-4xl font-extrabold font-sans">Recursos Principales</h2>
                    </div>

                    <div className="w-full min-h-6xl">
                        <TestimonialCarousel></TestimonialCarousel>
                    </div>
                </div>
            </section>
        </div>
    )
    
}

export default Recursos

