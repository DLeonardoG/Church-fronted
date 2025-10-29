import { CalendarView } from "@/core/components/calendarEvents"
import { ChurchEventModal } from "@/core/components/pruebaevento"
import { CarouselEvent } from '@/core/components/eventsCarousel'

function Eventos() {


    return(
        <div className="flex flex-col min-h-screen bg-gray-100 w-full items-center pt-25 gap-4">
            <div className="h-screen w-full">
                <CarouselEvent></CarouselEvent>
            </div>
            <div className="w-full min-h-screen bg-gray-100">
                <CalendarView ></CalendarView>
            </div>
            <div>
                <ChurchEventModal></ChurchEventModal>
            </div>
            
      

        </div>
        
    )
    
}

export default Eventos

