import { X, Clock, User, Calendar, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
  year 
}: EventDetailsModalProps) {
  if (!isOpen || events.length === 0) return null;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'unassigned':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'scheduled':
      case 'confirmed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'in progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'project':
        return '#309EA8';
      case 'product':
        return '#A9CF38';
      case 'other':
        return '#3899FE';
      default:
        return '#81878B';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <div>
            <CardTitle className="text-xl font-semibold text-[#353f45]">
              Events for {monthName} {selectedDate}, {year}
            </CardTitle>
            <p className="text-sm text-[#81878b] mt-1">
              {events.length} event{events.length > 1 ? 's' : ''} scheduled
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="border border-[#edeef1] rounded-lg p-4 hover:shadow-sm transition-shadow"
              >
                {/* Event Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getCategoryColor(event.category) }}
                      />
                      <h3 className="font-semibold text-[#353f45]">{event.name}</h3>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getStatusColor(event.status)}`}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#81878b] mb-3">{event.client}</p>
                  </div>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-[#81878b]" />
                    <span className="text-[#353f45]">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-[#81878b]" />
                    <span className="text-[#353f45]">{event.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-[#81878b]" />
                    <span className="text-[#353f45] capitalize">{event.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-[#81878b]" />
                    <span className="text-[#353f45] capitalize">{event.type}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4 pt-3 border-t border-[#edeef1]">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#309ea8] text-[#309ea8] hover:bg-[#309ea8]/10"
                  >
                    Edit Schedule
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#dde0e5] text-[#686f73] hover:bg-gray-50"
                  >
                    View Details
                  </Button>
                  {event.status === 'Unassigned' && (
                    <Button
                      size="sm"
                      className="bg-[#309ea8] hover:bg-[#309ea8]/90 text-white ml-auto"
                    >
                      Assign Auditor
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Footer */}
          <div className="mt-6 pt-4 border-t border-[#edeef1]">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#81878b]">
                Total Duration: {events.reduce((total, event) => total + parseInt(event.hours), 0)} hours
              </span>
              <div className="flex gap-4">
                <span className="text-[#81878b]">
                  Assigned: {events.filter(e => e.status !== 'Unassigned').length}
                </span>
                <span className="text-[#81878b]">
                  Unassigned: {events.filter(e => e.status === 'Unassigned').length}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}