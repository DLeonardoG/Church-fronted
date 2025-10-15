import ResourceYT from "@/core/components/resourceYT"
import ResourceIG from "@/core/components/resourceIG"
import { FlipPinnedOverlay } from "@/core/components/FlipPinnedOverlay"

function Recursos() {
    return(
        <section className="w-full h-full">
            <FlipPinnedOverlay
              flipEase="power2.inOut"
              scrub={0.25}         
            >
                <ResourceYT></ResourceYT>
                <div className="w-full h-[115%] ">
                    <ResourceIG></ResourceIG>
                </div>
            </FlipPinnedOverlay>
        </section>
    )
    
}

export default Recursos

