/**
 * Configuración del scroll para la página de Home
 */
export const HOME_SCROLL_CONFIG = {
  panelSelector: "#sectionD, #Anuncios, #section2, #section3, #section4",
  snapDuration: 0.55,
  markers: false,
  disableOnMobile: true,
  endTrigger: "#section4",
} as const;

/**
 * IDs de las secciones del Home
 */
export const HOME_SECTION_IDS = {
  CAROUSEL: "sectionD",
  ANNOUNCEMENTS: "Anuncios",
  GRAPHS: "section2",
  CHURCHES: "section3",
  CALL_TO_ACTION: "section4",
  CONTACT: "Contactanos",
} as const;

/**
 * Textos de la página Home
 */
export const HOME_TEXTS = {
  ANNOUNCEMENTS_TITLE: "Anuncios",
  CHURCHES_TITLE: "Iglesias en Bucaramanga",
  CALL_TO_ACTION: "Queremos Ayudarte, Queremos Servirte.",
  HERO_TITLE_1: "Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre, y el que en mí cree, nunca tendrá sed. Juan 3:16",
  HERO_TITLE_2: "Contactanos, para mas informacion",
  HERO_BUTTON_TEXT: "Contactanos",
} as const;

/**
 * Rutas de medios
 */
export const HOME_MEDIA = {
  VIDEO_PATH: "/prueba.mp4",
} as const;

