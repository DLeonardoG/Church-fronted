import { EventDetailsModal } from "@/core/components/EventDetailsModal";
import { Badge } from "@/core/components/ui/badge";
import { Button } from "@/core/components/ui/button";
import { Checkbox } from "@/core/components/ui/checkbox";
import { Input } from "@/core/components/ui/input";
import { ChevronLeft, ChevronRight, Clock, Filter, MapPin, MoreHorizontal, Search } from "lucide-react";
import { useState, useEffect } from "react";

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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsSidebarOpen(true); // en desktop, siempre visible
    } else {
      setIsSidebarOpen(false); // en móvil, cerrado por defecto
    }
  };

  handleResize(); // ejecuta al montar
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const today = new Date();
  const [selectedView, setSelectedView] = useState("Month");
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay()));
  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(today.getDate());
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

  

  const isToday = (date: number) => {
    const now = new Date();
    return date === now.getDate() && 
           currentMonth === now.getMonth() && 
           currentYear === now.getFullYear();
  };

  const isTodayDateObj = (dateObj: Date) => {
    const now = new Date();
    return dateObj.toDateString() === now.toDateString();
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
              className="border-primary text-primary hover:bg-primary/10 p-4"
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
                className="p-2 bg-background rounded-l border border-border hover:bg-muted/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button 
                onClick={() => navigateWeek('next')}
                className="p-2 bg-background rounded-r border border-border hover:bg-muted/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <span className="text-xl font-medium text-foreground">
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
              className="border-primary text-primary hover:bg-primary/10 p-4"
              onClick={() => setCurrentDay(new Date())}
            >
              Hoy
            </Button>
            <div className="flex">
              <button 
                onClick={() => navigateDay('prev')}
                className="p-2 bg-background rounded-l border border-border hover:bg-muted/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button 
                onClick={() => navigateDay('next')}
                className="p-2 bg-background rounded-r border border-border hover:bg-muted/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <span className="text-xl font-medium text-foreground">
              {daysOfWeekFull[currentDay.getDay()]}, {months[currentDay.getMonth()]} {currentDay.getDate()}, {currentDay.getFullYear()}
            </span>
          </div>
        );
      case "Lista":
        return (
          <div className="flex items-center gap-4">
            <span className="text-xl font-medium text-foreground">
              Lista de Eventos - {months[currentMonth]} {currentYear}
            </span>
          </div>
        );
      default: // Month
        return (
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 p-4"
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
                className="p-2 bg-background rounded-l border border-border hover:bg-muted/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button 
                onClick={() => navigateMonth('next')}
                className="p-2 bg-background rounded-r border border-border hover:bg-muted/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <span className="text-xl font-medium text-foreground">
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
          <div className="flex-1 bg-muted/10 p-1">
            {/* Time column and days grid */}
            <div className="flex h-full">
              {/* Time column */}
              <div className="w-20 bg-card border border-border mr-1">
                <div className="h-12 border-b border-border flex items-center justify-center text-sm font-medium text-foreground">
                  Hora
                </div>
                {timeSlots.map((time) => (
                  <div key={time} className="h-16 border-b border-border flex items-center justify-center text-sm text-muted-foreground">
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
                    <div key={index} className="bg-card border border-border min-h-full">
                      {/* Day header */}
                      <div className={`h-12 border-b border-border flex flex-col items-center justify-center ${
                        isCurrentDay ? "bg-muted/50" : ""
                      }`}>
                        <div className="text-xs text-muted-foreground">{daysOfWeek[date.getDay()]}</div>
                        <div className={`text-sm font-medium ${
                          isCurrentDay ? "bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center" : "text-foreground"
                        }`}>
                          {date.getDate()}
                        </div>
                      </div>
                      
                      {/* Time slots */}
                      <div className="relative">
                        {timeSlots.map((time) => (
                          <div key={time} className="h-16 border-b border-border p-1">
                            {schedules.filter(s => s.startTime <= time && s.endTime > time).map((schedule) => (
                              <div
                                key={schedule.id}
                                className="text-xs p-1 rounded mb-1 cursor-pointer hover:shadow-md transition-all bg-primary/10 border border-primary/20"
                                onClick={() => {
                                  setSelectedDate(date.getDate());
                                  setShowEventModal(true);
                                }}
                              >
                                <div className="font-medium text-foreground truncate">
                                  {schedule.name}
                                </div>
                                <div className="text-muted-foreground truncate">
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
          <div className="flex-1 bg-muted/10 p-1">
            <div className="flex h-full">
              {/* Time column */}
              <div className="w-20 bg-card border border-border mr-1">
                <div className="h-12 border-b border-border flex items-center justify-center text-sm font-medium text-foreground">
                  Hora
                </div>
                {timeSlots.map((time) => (
                  <div key={time} className="h-16 border-b border-border flex items-center justify-center text-sm text-muted-foreground">
                    {time}
                  </div>
                ))}
              </div>
              
              {/* Day content */}
              <div className="flex-1 bg-card border border-border">
                {/* Day header */}
                <div className={`h-12 border-b border-border flex items-center justify-center ${
                  isCurrentDayToday ? "bg-muted/50" : ""
                }`}>
                  <div className={`text-lg font-medium ${
                    isCurrentDayToday ? "text-primary" : "text-foreground"
                  }`}>
                    {daysOfWeekFull[currentDay.getDay()]}, {months[currentDay.getMonth()]} {currentDay.getDate()}
                  </div>
                </div>
                
                {/* Time slots */}
                <div className="relative">
                  {timeSlots.map((time) => (
                    <div key={time} className="h-16 border-b border-border p-2">
                      {daySchedules.filter(s => s.startTime <= time && s.endTime > time).map((schedule) => (
                        <div
                          key={schedule.id}
                          className="text-sm p-2 rounded mb-1 cursor-pointer hover:shadow-md transition-all bg-primary/10 border border-primary/20"
                          onClick={() => setShowEventModal(true)}
                        >
                          <div className="font-medium text-foreground">
                            {schedule.name}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
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
          <div className="flex-1 bg-background p-6">
            <div className="space-y-4">
              {allSchedules.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-muted-foreground text-lg mb-2">No se encontraron eventos</div>
                  <div className="text-muted-foreground text-sm">Intenta ajustar tus filtros o términos de búsqueda</div>
                </div>
              ) : (
                allSchedules.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="border border-border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer bg-card hover:bg-accent/50"
                    onClick={() => {
                      setSelectedDate(schedule.date);
                      setShowEventModal(true);
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-medium text-foreground">{schedule.name}</h3>
                          <Badge 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {schedule.status}
                          </Badge>
                          <div 
                            className="w-3 h-3 rounded-full bg-primary"
                          ></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
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
                          <p className="text-sm text-foreground font-medium">{schedule.client}</p>
                          <p className="text-sm text-muted-foreground">{schedule.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">{schedule.hours}</div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-muted mt-2"
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
            <div className="flex border-b border-border bg-muted/30">
              {daysOfWeek.map((day) => (
                <div key={day} className="flex-1 p-4 text-center text-sm font-medium text-foreground">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="flex-1 bg-muted/10 p-1">
              <div className="grid grid-cols-7 gap-1 h-full">
                {getDaysInMonth().map((day, index) => {
                  const schedules = getScheduleForDate(day.date);
                  const hasEvents = schedules.length > 0;
                  
                  return (
                    <div
                      key={index}
                      className={`bg-card border border-border p-2 min-h-[120px] hover:shadow-md transition-all cursor-pointer ${
                        isToday(day.date) && day.isCurrentMonth ? "ring-2 ring-primary/50" : ""
                      } ${
                        day.date === selectedDate && day.isCurrentMonth && !isToday(day.date) ? "bg-accent/50" : ""
                      }`}
                      onClick={() => handleDateClick(day.date, day.isCurrentMonth)}
                    >
                      <div className={`text-sm mb-1 ${
                        !day.isCurrentMonth 
                          ? "text-muted-foreground/40" 
                          : isToday(day.date)
                          ? "font-semibold text-primary"
                          : "text-foreground"
                      }`}>
                        {day.date}
                      </div>
                      
                      {hasEvents && day.isCurrentMonth && (
                        <div className="space-y-1">
                          {schedules.slice(0, 2).map((schedule) => (
                            <div
                              key={schedule.id}
                              className="h-20 text-xs p-1 rounded cursor-pointer hover:shadow-sm transition-shadow bg-muted/80"
                            >
                              <div className="font-medium text-foreground truncate">
                                {schedule.name}
                              </div>
                              <div className="text-muted-foreground truncate pr-4">
                                {schedule.description}
                              </div>
                              <div className="flex items-center gap-1 mt-1">
                                <Badge 
                                  variant="secondary" 
                                  className={`text-[10px] px-1 py-0`}
                                >
                                  {schedule.status}
                                </Badge>
                                <span className="text-muted-foreground text-[10px]">
                                  {schedule.hours}
                                </span>
                              </div>
                            </div>
                          ))}
                          {schedules.length > 2 && (
                            <div className="text-[10px] text-muted-foreground font-medium cursor-pointer hover:text-primary transition-colors">
                              +{schedules.length - 2} más
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
  <div className="bg-background w-full border border-border shadow-lg rounded-lg h-full flex flex-col md:flex-row">
    {/* Botón de menú hamburguesa solo en móviles/tablets */}
    {typeof window !== 'undefined' && window.innerWidth <= 768 && (
      <div className="md:hidden p-4 bg-card border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(true)}
          className="rounded-md"
        >
          <div className="w-5 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-5 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-5 h-0.5 bg-foreground"></div>
        </Button>
      </div>
    )}

    {/* Sidebar: visible siempre en desktop, condicional en móvil */}
    {(typeof window === 'undefined' || window.innerWidth > 768 || isSidebarOpen) && (
      <div
        className={`w-full md:w-[276px] border-r border-border flex flex-col bg-card ${
          typeof window !== 'undefined' && window.innerWidth <= 768
            ? 'fixed inset-y-0 z-50 h-screen'
            : 'relative'
        }`}
      >
        {/* Botón de cerrar solo en móvil */}
        {typeof window !== 'undefined' && window.innerWidth <= 768 && (
          <div className="p-4 border-b border-border flex justify-between items-center">
            <span className="font-semibold">Filtros</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✕
            </Button>
          </div>
        )}

        {/* Add Schedule Button */}
        <div className="border-b border-border p-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              className="pl-10 h-8 bg-background text-sm"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {searchTerm.trim() !== "" && (
            <ul className="space-y-2 mt-2">
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map((schedule) => (
                  <li
                    key={schedule.id}
                    className="p-3 border border-border rounded-lg hover:bg-muted/50 transition cursor-pointer"
                  >
                    <p className="font-semibold text-foreground">{schedule.name}</p>
                    <p className="text-sm text-muted-foreground">{schedule.client}</p>
                  </li>
                ))
              ) : (
                <p className="text-muted-foreground text-sm p-4">No hay resultados.</p>
              )}
            </ul>
          )}
        </div>

        {/* Mini Calendar */}
        <div className="p-5">
          <div className="bg-card">
            <div className="flex items-center justify-between p-3 border-b border-border">
              <span className="text-sm font-normal text-foreground">
                {months[currentMonth]} {currentYear}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 bg-muted border border-border rounded hover:bg-muted/70 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 bg-muted border border-border rounded hover:bg-muted/70 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>

            <div className="bg-card rounded-md p-3">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                  <div
                    key={day}
                    className="text-center text-[10px] font-medium text-muted-foreground pb-2"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth().map((day, index) => (
                  <div
                    key={index}
                    className={`h-8 flex items-center justify-center text-sm rounded cursor-pointer hover:bg-muted/50 transition-colors ${
                      !day.isCurrentMonth
                        ? "text-muted-foreground/50"
                        : isToday(day.date)
                        ? "bg-primary text-primary-foreground font-semibold ring-2 ring-primary/50"
                        : day.date === selectedDate
                        ? "bg-accent text-accent-foreground"
                        : getScheduleForDate(day.date).length > 0
                        ? "bg-muted text-foreground font-medium"
                        : "text-foreground"
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
            <h3 className="font-medium text-foreground">Filtros</h3>
            <Filter className="w-4 h-4 text-foreground" />
          </div>

          <div className="space-y-3">
            {filters.map((option) => (
              <div key={option.id} className="flex items-center gap-3">
                <Checkbox
                  checked={option.checked}
                  onCheckedChange={(checked) => handleFilterChange(option.id, !!checked)}
                />
                <span className="text-sm font-medium text-foreground">{option.label}</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {scheduleData.filter((s) => s.category === option.id).length}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="text-sm font-medium text-foreground mb-3">Este Mes</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Eventos Totales</span>
                <span className="font-medium text-foreground">{scheduleData.length}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Sin Completar</span>
                <span className="font-medium text-destructive">
                  {scheduleData.filter((s) => s.status === 'Unassigned').length}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Completados</span>
                <span className="font-medium text-green-600 dark:text-green-400">
                  {scheduleData.filter((s) => s.status === 'Scheduled' || s.status === 'Confirmed').length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Overlay oscuro en móvil cuando el sidebar está abierto */}
    {typeof window !== 'undefined' &&
      window.innerWidth <= 768 &&
      isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

    {/* Contenido principal del calendario */}
    <div className="flex-1 flex flex-col" key={refreshKey}>
      <div className="border-b border-border p-4 flex items-center justify-between bg-card">
        {renderNavigation()}
        <div className="flex">
          {viewModes.map((mode, index) => (
            <button
              key={mode}
              className={`px-4 py-2 text-sm font-medium border transition-colors ${
                mode === selectedView
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border text-muted-foreground hover:bg-muted/50"
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

      {renderCalendarContent()}
    </div>

    {/* Modal de detalles del evento */}
    <EventDetailsModal
      isOpen={showEventModal}
      onClose={() => setShowEventModal(false)}
      events={getScheduleForDate(selectedDate)}
      selectedDate={selectedDate}
      monthName={months[currentMonth]}
      year={currentYear}
    />
  </div>
); };