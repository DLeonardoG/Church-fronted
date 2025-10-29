import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface EventData {
  id: number;
  date: number;
  name: string;
  status: string;
  hours: string;
  type: string;
  category: string;
  client: string;
  time: string;
  startTime: string;
  endTime: string;
  description: string;
  location: string;
  details?: {
    fechaEvento?: string;
    capacidad?: number;
    cuposDisponibles?: number;
    inversion?: string;
  };
  programa?: Array<{
    hora: string;
    actividad: string;
  }>;
  incluye?: string[];
  requisitos?: string[];
  organiza?: string;
  invitadoEspecial?: {
    nombre: string;
    descripcion?: string;
  };
  meta?: {
    categoriaGeneral?: string;
    estado?: string;
    visibilidad?: string;
    creadoEl?: string;
  };
}

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: EventData[];
  selectedDate: number;
  monthName: string;
  year: number;
}

export function EventDetailsModal({
  isOpen,
  onClose,
  events,
  selectedDate,
  monthName,
  year,
}: EventDetailsModalProps) {
  if (!isOpen || events.length === 0) return null;

  const event = events[0];

  const categoryImages: Record<string, string> = {
    profeticos: "/images/profeticos.jpg",
    eclesiasticos: "/images/eclesiasticos.jpg",
    misioneros: "/images/misioneros.jpg",
    estructura: "/images/estructura.jpg",
    default: "/images/profeticos.jpg",
  };

  const getCategoryImage = (category: string) =>
    categoryImages[category?.toLowerCase()] || categoryImages["default"];

  const imageUrl = getCategoryImage(event.category);

  return (
    <div className="fixed inset-0 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <Card className="relative bg-white/80 w-full py-0 max-w-3xl overflow-hidden rounded-2xl border shadow-4xl rounded-lg">
        <div className="relative h-56 w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover transition-transform duration-700 scale-100 hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/55 p-2 opacity-90 outline-none transition hover:bg-black/75 focus-visible:ring-2"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          {/* Título sobre la imagen */}
          <div className="absolute bottom-4 left-5">
            <h2 className="text-2xl font-semibold text-white drop-shadow-lg">
              {event.name}
            </h2>
            <p className="text-sm text-gray-200">
              {event.client || event.location}
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <CardContent className="relative z-10 overflow-y-auto p-6 max-h-[70vh] space-y-4 text-black">
          <p className="text-gray-700">{event.description}</p>

          {event.details && (
            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>
                <strong>Fecha:</strong> {event.details.fechaEvento}
              </p>
              <p>
                <strong>Capacidad:</strong> {event.details.capacidad} personas
              </p>
              <p>
                <strong>Cupos disponibles:</strong>{" "}
                {event.details.cuposDisponibles}
              </p>
              <p>
                <strong>Inversión:</strong> {event.details.inversion}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
