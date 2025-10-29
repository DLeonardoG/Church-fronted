import { CalendarView } from "@/core/components/calendarEvents"
// import { ChurchEventModal } from "@/core/components/pruebaevento"
import { CarouselEvent } from '@/core/components/eventsCarousel'

function Eventos() {


    return(
        <div className="flex flex-col min-h-screen bg-gray-100 w-full items-center pt-20 gap-4">
            <div className="space-y-12 h-screen w-full pt-4">
                <h2 className="flex text-5xl font-extrabold relative top-1 justify-center z-100">Eventos</h2>
                <CarouselEvent></CarouselEvent>
            </div>
            <div className="w-full pt-25 min-h-screen bg-gray-100">
                <CalendarView ></CalendarView>
            </div>
            
            
      

        </div>
        
    )
    
}

export default Eventos

