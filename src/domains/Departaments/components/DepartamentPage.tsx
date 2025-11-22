import { useParams } from 'react-router-dom';
import { departmentData } from '../constants/departamentPage';
import { type DepartmentSlug } from '../types/types'; 
import { Card } from '@/core/components/ui/card';
import {
  ScrollText, HeartHandshake, FlaskConical, Coins, Users, Leaf,
  Megaphone, Bell, BookOpen, ShieldCheck, Home, Utensils, FileText
} from 'lucide-react';

const iconMap = {
  mayordomia: Coins,
  diaconos: HeartHandshake,
  conquistadores: Leaf,
  "ministerios-personales": Megaphone,
  comunicaciones: Bell,
  "escuela-sabatica": BookOpen,
  jovenes: Users,
  universitarios: Users,
  educacion: BookOpen,
  capellania: ShieldCheck,
  familia: Home,
  salud: FlaskConical,
  dorcas: Utensils,
  evangelismo: Megaphone,
  tesoreria: Coins,
  secretaria: FileText,
  default: ScrollText,
};


const NotFound = () => (
  <div className="container py-16 text-center">
    <h2 className="text-xl font-medium text-foreground">Departamento no encontrado</h2>
  </div>
);

export default function DepartmentPage() {
  const { slug } = useParams<{ slug: string }>();

  const isValidSlug = (s: string): s is DepartmentSlug => {
    return s in departmentData;
  };

  if (!slug || !isValidSlug(slug)) {
    return <NotFound />;
  }

  const data = departmentData[slug];
  const Icon = iconMap[slug] || iconMap.default;

  return (
    <div className="container py-6 md:py-25 lg:py-28 max-w-4xl justify-self-center">
      <Card className="rounded-lg overflow-hidden border">
        <div className="relative h-48 md:h-56">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-1.5 rounded-md bg-white/20 backdrop-blur-sm">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium bg-black/30 px-2 py-1 rounded">
                {data.title}
              </span>
            </div>
            <p className="text-white/90 max-w-2xl">{data.description}</p>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {data.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              {section.heading && (
                <h2 className="text-xl font-semibold text-foreground border-b pb-2">
                  {section.heading}
                </h2>
              )}
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>

              {section.scripture && (
                <blockquote className="border-l-4 border-primary pl-4 italic my-3 text-foreground">
                  {section.scripture}
                </blockquote>
              )}

              {section.items && (
                <ul className="mt-3 space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}