import { CalendarForm } from "@/core/components/calendar"
import { Input } from "@/core/components/ui/input"

function Eventos() {
    return(
        <div className="flex flex-col min-h-screen bg-gray-100 w-full items-center pt-20 gap-4">
            <h2 className="text-4xl font-extrabold ">Eventos</h2>
            <div className="w-full space-x-10 flex items-center px-20">
                <CalendarForm></CalendarForm>
                <div className="flex items-center">
                    <Input className="w-70 h-8" placeholder="Buscar..."></Input>
                </div>
            </div>

        </div>
    )
    
}

export default Eventos

