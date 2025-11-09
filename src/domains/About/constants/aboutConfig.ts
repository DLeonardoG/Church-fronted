/**
 * Configuración del scroll para la página de Nosotros (About)
 */
export const ABOUT_SCROLL_CONFIG = {
  panelSelector: "#hero__nosotros, #nosotros",
  snapDuration: 0.55,
  markers: false,
  disableOnMobile: true,
  endTrigger: "#nosotros",
} as const;

/**
 * IDs de las secciones de About
 */
export const ABOUT_SECTION_IDS = {
  HERO: "hero__nosotros",
  CONTENT: "nosotros",
} as const;

/**
 * Textos de la página Nosotros
 */
export const ABOUT_TEXTS = {
  JOIN_US: "Unete a Nosotros",
  VISIT_US: "Visitanos!",
  TITLE_1: "Iglesia Adventista",
  TITLE_2: "Norte",
  DESCRIPTION:
    "La Iglesia Adventista del Séptimo Día lleva esperanza al mundo para que las personas vivan con la certeza de que su historia no termina aquí. Esa es la certeza encontrada a lo largo de toda la Biblia.",
  HERO_BUTTON: "Quienes Somos",
  CONTENT_TITLE: "Quienes Somos",
  CONTENT_SUBTITLE: "Descubre más sobre nuestra misión, visión y valores que nos impulsan a servir a la comunidad.",
} as const;

/**
 * Misión y Visión
 */
export const MISSION_VISION = {
  MISSION: {
    TITLE: "Nuestra Misión",
    DESCRIPTION:
      "Glorificar a Dios haciendo discípulos de Jesucristo que, como miembros de la familia de la iglesia, crecen espiritualmente y transforman sus comunidades a través del amor, el servicio y la proclamación del evangelio eterno.",
  },
  VISION: {
    TITLE: "Nuestra Visión",
    DESCRIPTION:
      "Ser una comunidad de fe que inspire y transforme vidas, llevando esperanza y amor a cada corazón, reflejando el carácter de Cristo en todo lo que hacemos y preparando a las personas para su pronto regreso.",
  },
} as const;

/**
 * Valores de la iglesia
 */
export const CHURCH_VALUES = [
  {
    TITLE: "Fe en Cristo",
    DESCRIPTION: "Creemos en Jesús como nuestro Salvador y Señor, fundamento de nuestra esperanza.",
    ICON: "cross",
  },
  {
    TITLE: "Amor al Prójimo",
    DESCRIPTION: "Servimos con compasión y dedicación a nuestra comunidad y al mundo.",
    ICON: "heart",
  },
  {
    TITLE: "Estudio Bíblico",
    DESCRIPTION: "La Biblia es nuestra guía suprema para la fe y la práctica cristiana.",
    ICON: "book",
  },
  {
    TITLE: "Vida Saludable",
    DESCRIPTION: "Promovemos el bienestar integral: físico, mental, espiritual y social.",
    ICON: "sparkles",
  },
  {
    TITLE: "Comunidad",
    DESCRIPTION: "Construimos relaciones genuinas basadas en el respeto y el apoyo mutuo.",
    ICON: "users",
  },
  {
    TITLE: "Esperanza Viva",
    DESCRIPTION: "Vivimos con la esperanza del regreso de Cristo y la vida eterna.",
    ICON: "sun",
  },
] as const;

/**
 * Historia de la iglesia
 */
export const CHURCH_HISTORY = {
  TITLE: "Nuestra Historia",
  SUBTITLE: "Un legado de fe y servicio en Bucaramanga",
  DESCRIPTION:
    "La Iglesia Adventista del Séptimo Día en la región Norte de Bucaramanga ha sido un faro de esperanza y servicio durante años. Desde nuestros humildes comienzos, hemos crecido como una familia de fe comprometida con llevar el amor de Cristo a nuestra comunidad.",
  HIGHLIGHT:
    "Hoy somos una red de congregaciones vibrantes que trabajan unidas para transformar vidas a través de la educación, la salud, y el ministerio espiritual.",
} as const;

/**
 * Rutas y URLs
 */
export const ABOUT_LINKS = {
  JOIN_US_HREF: "/home#Contactanos",
  HERO_BUTTON_HREF: "#nosotros",
} as const;

/**
 * Imágenes y multimedia
 */
export const ABOUT_MEDIA = {
  HERO_BACKGROUND:
    "https://media.istockphoto.com/id/1062640036/es/foto/incontables-decenas-de-hermosas-rosas-rojas-en-un-carro-de-flor-visto-desde-arriba-en-una.jpg?s=612x612&w=0&k=20&c=ajZFBmCWLU4oL1sOWvkbl5IGnka-C1mO12646kPxXyg=",
} as const;

