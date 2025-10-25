import { CalendarForm } from "@/core/components/calendar"
import { Input } from "@/core/components/ui/input"
import { CalendarView } from "@/core/components/calendarEvents"

function Eventos() {
    return(
        <div className="flex flex-col min-h-screen bg-gray-100 w-full items-center pt-25 gap-4">
            <div className="w-full min-h-screen">
                <CalendarView ></CalendarView>
            </div>
            <div className="w-full space-x-10 flex items-center px-10">
                <CalendarForm></CalendarForm>
                <div className="flex pb-13">
                    <Input className="w-70 h-8 bg-white" placeholder="Buscar..."></Input>
                </div>
            </div>

        </div>
        
    )
    
}

export default Eventos

