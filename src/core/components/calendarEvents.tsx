import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, Filter, MoreHorizontal, Clock, MapPin } from "lucide-react";
import { Button } from "@/core/components/ui/button";
import { Checkbox } from "@/core/components/ui/checkbox";
import { Input } from "@/core/components/ui/input";
import { Badge } from "@/core/components/ui/badge";
import { EventDetailsModal } from "@/core/components/EventDetailsModal";

const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const daysOfWeekFull = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const viewModes = ["Mes", "Semana", "Dia", "Lista"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const filterOptions = [
  { id: "all", label: "Ver Todo", color: "#81878B", checked: false },
  { id: "project", label: "Estructura Adventista", color: "#3899FE", checked: true },
  { id: "product", label: "Eventos Misioneros", color: "#3899FE", checked: true },
  { id: "other", label: "Otros", color: "#3899FE", checked: true },
];

const scheduleData = [
  { 
    id: 1, 
    date: 1, 
    name: "Santa Cena", 
    status: "Unassigned", 
    hours: "6 hr", 
    type: "unassigned",
    category: "project",
    client: "Acme Corp",
    time: "09:00 - 15:00",
    startTime: "09:00",
    endTime: "15:00",
    description: "ISO 9001:2015 Initial Assessment",
    location: "Acme Corp HQ, Downtown"
  },
  { 
    id: 2, 
    date: 10, 
    name: "Jonie Geo", 
    status: "Scheduled", 
    hours: "8 hr", 
    type: "scheduled",
    category: "product",
    client: "Tech Industries",
    time: "08:00 - 17:00",
    startTime: "08:00",
    endTime: "17:00",
    description: "Product Quality Audit",
    location: "Tech Industries Plant"
  },
  { 
    id: 3, 
    date: 14, 
    name: "Aulia Nirmala", 
    status: "In Progress", 
    hours: "4 hr", 
    type: "scheduled",
    category: "project",
    client: "Global Solutions",
    time: "13:00 - 17:00",
    startTime: "13:00",
    endTime: "17:00",
    description: "ISCC Surveillance Audit",
    location: "Global Solutions Office"
  },
  { 
    id: 4, 
    date: 16, 
    name: "Team Meeting", 
    status: "Confirmed", 
    hours: "2 hr", 
    type: "meeting",
    category: "other",
    client: "Internal",
    time: "10:00 - 12:00",
    startTime: "10:00",
    endTime: "12:00",
    description: "Weekly Team Sync & Planning",
    location: "Conference Room A"
  },
  { 
    id: 5, 
    date: 22, 
    name: "Jefri Cool", 
    status: "Unassigned", 
    hours: "6 hr", 
    type: "unassigned",
    category: "project",
    client: "StartUp Inc",
    time: "09:00 - 15:00",
    startTime: "09:00",
    endTime: "15:00",
    description: "ISO 14001 Initial Assessment",
    location: "StartUp Inc Facility"
  },
  { 
    id: 6, 
    date: 25, 
    name: "Training Session", 
    status: "Scheduled", 
    hours: "3 hr", 
    type: "training",
    category: "other",
    client: "Internal",
    time: "14:00 - 17:00",
    startTime: "14:00",
    endTime: "17:00",
    description: "ISCC Standards Training",
    location: "Training Room B"
  },
  { 
    id: 7, 
    date: 30, 
    name: "Iwan Nurmawan", 
    status: "Pending", 
    hours: "8 hr", 
    type: "scheduled",
    category: "product",
    client: "Enterprise Ltd",
    time: "08:00 - 17:00",
    startTime: "08:00",
    endTime: "17:00",
    description: "Product Certification Audit",
    location: "Enterprise Ltd Main Site"
  },
  {
  id: 8,
  date: 31,
  name: "Retiro Espiritual de Sanidad",
  status: "Pending",
  hours: "9 hr",
  type: "scheduled",
  category: "product",
  client: "Ministerio de Sanidad y Restauración",
  time: "09:00 - 18:00",
  startTime: "09:00",
  endTime: "18:00",
  description: "Un encuentro transformador con Dios. Te invitamos a un día de renovación espiritual donde experimentarás la presencia de Dios a través de la adoración, la oración y la ministración. Este retiro está diseñado para quienes buscan sanidad emocional, física y espiritual.",
  location: "Centro de Retiros Monte Horeb, Calle 45 #23-15, Floridablanca",
  "details": {
    "fechaEvento": "Sábado, 16 de Noviembre de 2025",
    "capacidad": 120,
    "cuposDisponibles": 35,
    "inversion": "Entrada libre - Ofrenda voluntaria"
  },
  "programa": [
    { "hora": "09:00 AM", "actividad": "Registro y Bienvenida" },
    { "hora": "09:30 AM", "actividad": "Alabanza y Adoración" },
    { "hora": "10:30 AM", "actividad": "Mensaje: 'Jesús el Sanador'" },
    { "hora": "12:00 PM", "actividad": "Almuerzo (incluido)" },
    { "hora": "01:30 PM", "actividad": "Taller: Sanidad Interior y Restauración del Corazón" },
    { "hora": "03:00 PM", "actividad": "Tiempo de Oración Personal" },
    { "hora": "04:00 PM", "actividad": "Ministración y Testimonios" },
    { "hora": "05:30 PM", "actividad": "Cierre y Bendición Final" }
  ],
  "incluye": [
    "Material de estudio y reflexión",
    "Almuerzo y refrigerios",
    "Transporte desde la iglesia",
    "Certificado de participación",
    "Espacios de oración guiada y acompañamiento"
  ],
  "requisitos": [
    "Llevar Biblia personal",
    "Ropa cómoda y apropiada",
    "Actitud de apertura y fe"
  ],
  "organiza": "Ministerio de Sanidad y Restauración",
  "invitadoEspecial": {
    "nombre": "Pastor Juan Carlos Martínez",
    "descripcion": "Pastor invitado con más de 20 años de experiencia en ministerios de sanidad interior y restauración espiritual."
  },
  "meta": {
    "categoriaGeneral": "Evento Espiritual",
    "estado": "Activo",
    "visibilidad": "Público",
    "creadoEl": "2025-10-28T00:00:00Z"
  }
}

];

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", 
  "14:00", "15:00", "16:00", "17:00", "18:00"
];



export function CalendarView() {
  const [selectedView, setSelectedView] = useState("Month");
  const [currentMonth, setCurrentMonth] = useState(7); // August (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date(2025, 7, 24)); // Week starting Aug 24, 2025
  const [currentDay, setCurrentDay] = useState(new Date(2025, 7, 25)); // Aug 25, 2025
  const [selectedDate, setSelectedDate] = useState(25);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState(filterOptions);
  const [showEventModal, setShowEventModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const getDaysInMonth = () => {
    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const days = [];
    
    // Previous month days
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
    
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({ 
        date: daysInPrevMonth - i, 
        isCurrentMonth: false,
        isPrevMonth: true
      });
    }
    
    // Current month days
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push({ 
        date: i, 
        isCurrentMonth: true,
        isPrevMonth: false
      });
    }
    
    // Next month days
    const totalCells = 42; // 6 rows × 7 days
    const remainingCells = totalCells - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      days.push({ 
        date: i, 
        isCurrentMonth: false,
        isPrevMonth: false
      });
    }
    
    return days;
  };

  const getWeekDays = () => {
    const days = [];
    const startDate = new Date(currentWeekStart);
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    
    return days;
  };

  const getScheduleForDate = (date: number) => {
    return scheduleData.filter(item => item.date === date && filters.find(f => f.id === item.category)?.checked);
  };

  const getScheduleForDateObj = (dateObj: Date) => {
    return scheduleData.filter(item => 
      item.date === dateObj.getDate() && 
      filters.find(f => f.id === item.category)?.checked
    );
  };

  const getAllFilteredSchedules = () => {
    return scheduleData.filter(item => 
      filters.find(f => f.id === item.category)?.checked &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentWeekStart);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setCurrentWeekStart(newDate);
  };

  const navigateDay = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDay);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 1);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setCurrentDay(newDate);
  };

  const handleFilterChange = (filterId: string, checked: boolean) => {
    setFilters(prev => prev.map(f => 
      f.id === filterId ? { ...f, checked } : f
    ));
  };

  

  const today = new Date();
  const isToday = (date: number) => {
    return date === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear();
  };

  const isTodayDateObj = (dateObj: Date) => {
    return dateObj.toDateString() === today.toDateString();
  };

  const handleDateClick = (date: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;
    
    setSelectedDate(date);
    const schedules = getScheduleForDate(date);
    if (schedules.length > 0) {
      setShowEventModal(true);
    }
  };

  const filteredSchedules = scheduleData.filter(schedule => 
    schedule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    schedule.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderNavigation = () => {
    switch (selectedView) {
      case "Semana":
        return (
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-black text-black hover:bg-black/10 p-4"
              onClick={() => {
                const today = new Date();
                const startOfWeek = new Date(today);
                startOfWeek.setDate(today.getDate() - today.getDay());
                setCurrentWeekStart(startOfWeek);
                setRefreshKey(prev => prev + 1);
              }}
              
            >
              Hoy
            </Button>
            <div className="flex">
              <button 
                onClick={() => navigateWeek('prev')}
                className="p-2 bg-white rounded-l border hover:bg-gray-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigateWeek('next')}
                className="p-2 bg-white rounded-r border hover:bg-gray-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <span className="text-xl font-medium text-[#353f45]">
              {months[currentWeekStart.getMonth()]} {currentWeekStart.getDate()} - {
                new Date(currentWeekStart.getTime() + 6 * 24 * 60 * 60 * 1000).getDate()
              }, {currentWeekStart.getFullYear()}
            </span>
          </div>
        );
      case "Dia":
        return (
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-black text-black hover:bg-black/10 p-4"
              onClick={() => setCurrentDay(new Date())}
            >
              Hoy
            </Button>
            <div className="flex">
              <button 
                onClick={() => navigateDay('prev')}
                className="p-2 bg-white rounded-l border hover:bg-gray-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigateDay('next')}
                className="p-2 bg-white rounded-r border hover:bg-gray-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <span className="text-xl font-medium text-[#353f45]">
              {daysOfWeekFull[currentDay.getDay()]}, {months[currentDay.getMonth()]} {currentDay.getDate()}, {currentDay.getFullYear()}
            </span>
          </div>
        );
      case "Lista":
        return (
          <div className="flex items-center gap-4">
            <span className="text-xl font-medium text-[#353f45]">
              Schedule List - {months[currentMonth]} {currentYear}
            </span>
          </div>
        );
      default: // Month
        return (
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-black text-black hover:bg-black/10 p-4"
              onClick={() => {
                const today = new Date();
                setCurrentMonth(today.getMonth());
                setCurrentYear(today.getFullYear());
                setSelectedDate(today.getDate());
                setRefreshKey(prev => prev + 1);
              }}
            >
              Hoy
            </Button>
            <div className="flex">
              <button 
                onClick={() => navigateMonth('prev')}
                className="p-2 bg-white rounded-l border hover:bg-gray-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigateMonth('next')}
                className="p-2 bg-white rounded-r border hover:bg-gray-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <span className="text-xl font-medium text-[#353f45]">
              {months[currentMonth]} {currentYear}
            </span>
          </div>
        );
    }
  };

  const renderCalendarContent = () => {
    switch (selectedView) {
      case "Semana":
        return (
          <div className="flex-1 bg-[#f8f9fa] p-1">
            {/* Time column and days grid */}
            <div className="flex h-full">
              {/* Time column */}
              <div className="w-20 bg-white border border-[#edeef1] mr-1">
                <div className="h-12 border-b border-[#edeef1] flex items-center justify-center text-sm font-medium text-[#353f45]">
                  Time
                </div>
                {timeSlots.map((time) => (
                  <div key={time} className="h-16 border-b border-[#edeef1] flex items-center justify-center text-sm text-[#81878b]">
                    {time}
                  </div>
                ))}
              </div>
              
              {/* Days grid */}
              <div className="flex-1 grid grid-cols-7 gap-1">
                {getWeekDays().map((date, index) => {
                  const schedules = getScheduleForDateObj(date);
                  const isCurrentDay = isTodayDateObj(date);
                  
                  return (
                    <div key={index} className="bg-white border border-[#edeef1] min-h-full">
                      {/* Day header */}
                      <div className={`h-12 border-b border-[#edeef1] flex flex-col items-center justify-center ${
                        isCurrentDay ? "bg-gray-100" : ""
                      }`}>
                        <div className="text-xs text-[#81878b]">{daysOfWeek[date.getDay()]}</div>
                        <div className={`text-sm font-medium ${
                          isCurrentDay ? "text-black bg-black text-white rounded-full w-6 h-6 flex items-center justify-center" : "text-black"
                        }`}>
                          {date.getDate()}
                        </div>
                      </div>
                      
                      {/* Time slots */}
                      <div className="relative">
                        {timeSlots.map((time) => (
                          <div key={time} className="h-16 border-b border-[#edeef1] p-1">
                            {schedules.filter(s => s.startTime <= time && s.endTime > time).map((schedule) => (
                              <div
                                key={schedule.id}
                                className="text-xs p-1 rounded mb-1 cursor-pointer hover:shadow-sm transition-shadow"
                                style={{ backgroundColor: filterOptions.find(f => f.id === schedule.category)?.color + '20' }}
                                onClick={() => {
                                  setSelectedDate(date.getDate());
                                  setShowEventModal(true);
                                }}
                              >
                                <div className="font-medium text-[#353f45] truncate">
                                  {schedule.name}hola
                                </div>
                                <div className="text-[#81878b] truncate">
                                  {schedule.client}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case "Dia":
        const daySchedules = getScheduleForDateObj(currentDay);
        const isCurrentDayToday = isTodayDateObj(currentDay);
        
        return (
          <div className="flex-1 bg-[#f8f9fa] p-1">
            <div className="flex h-full">
              {/* Time column */}
              <div className="w-20 bg-white border border-[#edeef1] mr-1">
                <div className="h-12 border-b border-[#edeef1] flex items-center justify-center text-sm font-medium text-[#353f45]">
                  Time
                </div>
                {timeSlots.map((time) => (
                  <div key={time} className="h-16 border-b border-[#edeef1] flex items-center justify-center text-sm text-[#81878b]">
                    {time}
                  </div>
                ))}
              </div>
              
              {/* Day content */}
              <div className="flex-1 bg-white border border-[#edeef1]">
                {/* Day header */}
                <div className={`h-12 border-b border-[#edeef1] flex items-center justify-center ${
                  isCurrentDayToday ? "bg-gray-100" : ""
                }`}>
                  <div className={`text-lg font-medium ${
                    isCurrentDayToday ? "text-black" : "text-black"
                  }`}>
                    {daysOfWeekFull[currentDay.getDay()]}, {months[currentDay.getMonth()]} {currentDay.getDate()}
                  </div>
                </div>
                
                {/* Time slots */}
                <div className="relative">
                  {timeSlots.map((time) => (
                    <div key={time} className="h-16 border-b border-[#edeef1] p-2">
                      {daySchedules.filter(s => s.startTime <= time && s.endTime > time).map((schedule) => (
                        <div
                          key={schedule.id}
                          className="text-sm p-2 rounded mb-1 cursor-pointer hover:shadow-sm transition-shadow"
                          style={{ backgroundColor: filterOptions.find(f => f.id === schedule.category)?.color + '20' }}
                          onClick={() => setShowEventModal(true)}
                        >
                          <div className="font-medium text-[#353f45]">
                            {schedule.name}hola
                          </div>
                          <div className="text-sm text-[#81878b] mt-1">
                            {schedule.client} • {schedule.time}
                          </div>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs mt-1`}
                          >
                            {schedule.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "Lista":
        const allSchedules = getAllFilteredSchedules();
        
        return (
          <div className="flex-1 bg-white p-6">
            <div className="space-y-4">
              {allSchedules.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-[#81878b] text-lg mb-2">No schedules found</div>
                  <div className="text-[#81878b] text-sm">Try adjusting your filters or search terms</div>
                </div>
              ) : (
                allSchedules.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="border border-[#edeef1] rounded-lg p-4 hover:shadow-sm transition-shadow cursor-pointer"
                    onClick={() => {
                      setSelectedDate(schedule.date);
                      setShowEventModal(true);
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-medium text-[#353f45]">{schedule.name}</h3>
                          <Badge 
                            variant="secondary" 
                            className={``}
                          >
                            {schedule.status}
                          </Badge>
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: filterOptions.find(f => f.id === schedule.category)?.color }}
                          ></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm text-[#81878b]">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{months[currentMonth]} {schedule.date}, {currentYear} • {schedule.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{schedule.location}</span>
                          </div>
                        </div>
                        
                        <div className="mt-2">
                          <p className="text-sm text-[#353f45] font-medium">{schedule.client}</p>
                          <p className="text-sm text-[#81878b]">{schedule.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-medium text-[#353f45]">{schedule.hours}</div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-100 mt-2"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        );

      default: // Month view
        return (
          <>
            {/* Days Header */}
            <div className="flex border-b border-[#edeef1] bg-[#f8f9fa]">
              {daysOfWeek.map((day) => (
                <div key={day} className="flex-1 p-4 text-center text-sm font-medium text-[#353f45]">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="flex-1 bg-[#f8f9fa] p-1">
              <div className="grid grid-cols-7 gap-1 h-full">
                {getDaysInMonth().map((day, index) => {
                  const schedules = getScheduleForDate(day.date);
                  const hasEvents = schedules.length > 0;
                  
                  return (
                    <div
                      key={index}
                      className={`bg-white border border-[#edeef1] p-2 min-h-[120px] hover:shadow-sm transition-shadow cursor-pointer ${
                        isToday(day.date) && day.isCurrentMonth ? "bg-gray-50" : ""
                      } ${
                        day.date === selectedDate && day.isCurrentMonth && !isToday(day.date) ? "bg-[#f0f9ff]" : ""
                      }`}
                      onClick={() => handleDateClick(day.date, day.isCurrentMonth)}
                    >
                      <div className={`text-sm mb-1 ${
                        !day.isCurrentMonth 
                          ? "text-[#b3b7b9]" 
                          : isToday(day.date)
                          ? "font-semibold text-black"
                          : "text-[#353f45]"
                      }`}>
                        {day.date}
                      </div>
                      
                      {hasEvents && day.isCurrentMonth && (
                        <div className="space-y-1">
                          {schedules.slice(0, 2).map((schedule) => (
                            <div
                              key={schedule.id}
                              className="h-20 text-xs p-1 rounded cursor-pointer hover:shadow-sm transition-shadow bg-gray-200"
                            >
                              <div className="font-medium text-[#353f45] truncate">
                                {schedule.name}
                              </div>
                              <div className="text-[#353f45] truncate pr-4">
                                {schedule.description}
                              </div>
                              <div className="flex items-center gap-1 mt-1">
                                <Badge 
                                  variant="secondary" 
                                  className={`text-[10px] px-1 py-0`}
                                >
                                  {schedule.status}
                                </Badge>
                                <span className="text-[#81878b] text-[10px]">
                                  {schedule.hours}
                                </span>
                              </div>
                            </div>
                          ))}
                          {schedules.length > 2 && (
                            <div className="text-[10px] text-[#81878b] font-medium cursor-pointer hover:text-[#309ea8]">
                              +{schedules.length - 2} more
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div  className="bg-gray-100  w-full border border-[#edeef1] shadow-[0px_4px_8px_-2px_rgba(10,13,18,0.1),0px_2px_4px_-2px_rgba(10,13,18,0.06)] rounded-lg h-full flex">
      {/* Sidebar */}
      <div className="w-[276px] border-r border-[#edeef1] flex flex-col">
        {/* Add Schedule Button */}
        <div className="border-b border-[#edeef1] p-5">

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#81878b]" />
            <Input className="pl-10 h-8 bg-white text-sm"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>
          {searchTerm.trim() !== "" && (
            <ul className="space-y-2">
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map((schedule) => (
                  <li
                    key={schedule.id}
                    className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    <p className="font-semibold text-gray-800">{schedule.name}</p>
                    <p className="text-sm text-gray-600">{schedule.client}</p>
                  </li>
                ))
              ) : (
                <p className="text-gray-500 text-sm p-4">No hay resultados.</p>
              )}
            </ul>
          )}
        </div>

        {/* Mini Calendar */}
        <div className="p-5">
          <div className="bg-white">
            {/* Calendar Header */}
            <div className="flex items-center justify-between p-3 border-b">
              <span className="text-sm font-normal text-[#353f45]">
                {months[currentMonth]} {currentYear}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => navigateMonth('prev')}
                  className="p-2 bg-[#f9f9f9] border border-[#edeef1] rounded hover:bg-gray-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => navigateMonth('next')}
                  className="p-2 bg-[#f9f9f9] border border-[#edeef1] rounded hover:bg-gray-100"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mini Calendar Grid */}
            <div className="bg-white rounded-md p-3">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                  <div key={day} className="text-center text-[10px] font-medium text-[#81878b] pb-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth().map((day, index) => (
                  <div
                    key={index}
                    className={`h-8 flex items-center justify-center text-sm rounded cursor-pointer hover:bg-gray-100 ${
                      !day.isCurrentMonth
                        ? "text-[#b3b7b9]"
                        : isToday(day.date)
                        ? "bg-gray-200 text-black font-semibold ring-2 ring-black/50 ring-opacity-50"
                        : day.date === selectedDate
                        ? "bg-gray-300 text-black/40"
                        : getScheduleForDate(day.date).length > 0
                        ? "bg-gray-200 text-black/50 font-medium"
                        : "text-[#353f45]"
                    }`}
                    onClick={() => handleDateClick(day.date, day.isCurrentMonth)}
                  >
                    {day.date}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="flex-1 p-5">
          <div className="flex gap-2 mb-4 items-center">
            <h3 className="font-medium text-[#353f45]">Filtros</h3>
            <Filter className="w-4 h-4" color="#353f45" />
          </div>
          
          
          
          <div className="space-y-3">
            {filters.map((option) => (
              <div key={option.id} className="flex items-center gap-3">
                <Checkbox 
                  checked={option.checked}
                  onCheckedChange={(checked) => handleFilterChange(option.id, !!checked)}
                  style={{ 
                    backgroundColor: option.checked ? option.color : undefined,
                    borderColor: option.color
                  }}
                />
                <span className="text-sm font-medium text-[#353f45]">{option.label}</span>
                <span className="text-xs text-[#81878b] ml-auto">
                  {scheduleData.filter(s => s.category === option.id).length}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-6 p-4 bg-[#f9f9f9] rounded-lg">
            <h4 className="text-sm font-medium text-[#353f45] mb-3">Este Mes</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#81878b]">Eventos Totales</span>
                <span className="font-medium text-[#353f45]">{scheduleData.length}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#81878b]">Sin Completar</span>
                <span className="font-medium text-red-600">
                  {scheduleData.filter(s => s.status === 'Unassigned').length}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#81878b]">Completados</span>
                <span className="font-medium text-green-600">
                  {scheduleData.filter(s => s.status === 'Scheduled' || s.status === 'Confirmed').length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Calendar */}
      <div className="flex-1 flex flex-col" key={refreshKey}>
        {/* Calendar Header */}
        <div className="border-b border-[#edeef1] p-4 flex items-center justify-between">
          {renderNavigation()}
          <div className="flex">
            {viewModes.map((mode, index) => (
              <button
                key={mode}
                className={`px-4 py-2 text-sm font-medium border ${
                  mode === selectedView
                    ? "bg-black/10 border-black text-black"
                    : "bg-white border-[#dde0e5] text-[#686f73] hover:bg-gray-50"
                } ${
                  index === 0 ? "rounded-l" : 
                  index === viewModes.length - 1 ? "rounded-r" : ""
                }`}
                onClick={() => setSelectedView(mode)}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Content */}
        {renderCalendarContent()}
      </div>

      {/* Event Details Modal */}
      <EventDetailsModal
  isOpen={showEventModal}
  onClose={() => setShowEventModal(false)}
  events={getScheduleForDate(selectedDate)}
  selectedDate={selectedDate}
  monthName={months[currentMonth]}
  year={currentYear}
/>

    </div>
  );
}