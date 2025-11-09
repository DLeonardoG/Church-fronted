import { Card, CardContent, CardHeader, CardTitle } from "@/core/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { Eye, Target } from "lucide-react";
import { MISSION_VISION } from "../constants/aboutConfig";

/**
 * Sección de Misión y Visión
 * Muestra la misión y visión de la iglesia en cards lado a lado
 */
export function MissionVisionSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Misión */}
        <Card className={cn(
          "hover:shadow-xl transition-all duration-300",
          "border-2 hover:border-primary/50"
        )}>
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">{MISSION_VISION.MISSION.TITLE}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {MISSION_VISION.MISSION.DESCRIPTION}
            </p>
          </CardContent>
        </Card>

        {/* Visión */}
        <Card className={cn(
          "hover:shadow-xl transition-all duration-300",
          "border-2 hover:border-primary/50"
        )}>
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">{MISSION_VISION.VISION.TITLE}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {MISSION_VISION.VISION.DESCRIPTION}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

