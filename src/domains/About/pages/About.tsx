import { useScrollHomeTrigger } from "@/shared/hooks/scrollHomeTrigger";
import { useScrollToSection } from "@/shared/hooks/useScrollToSection";
import { AboutContentSection } from "../components/AboutContentSection";
import { AboutHeroSection } from "../components/AboutHeroSection";
import { ABOUT_SCROLL_CONFIG } from "../constants/aboutConfig";

/**
 * Página principal de About (Nosotros)
 * Organiza todas las secciones de la página "Quiénes Somos"
 * 
 * Estructura:
 * - Hero Section: Presentación con imagen de fondo
 * - Content Section: Misión, Visión, Valores e Historia
 */
export default function About() {
  // Configurar el scroll animado para las secciones
  useScrollHomeTrigger(ABOUT_SCROLL_CONFIG);
  
  // Manejar scroll a secciones cuando se navega con hash
  useScrollToSection();

  return (
    <main className="w-full min-h-screen bg-background">
      {/* Sección Hero con background y mensaje principal */}
      <AboutHeroSection />

      {/* Sección de contenido principal con todas las subsecciones */}
      <AboutContentSection />
    </main>
  );
}

