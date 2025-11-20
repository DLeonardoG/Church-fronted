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
  CONTENT: "quienes-somos",
} as const;

/**
 * Textos de la página Nosotros
 */
export const ABOUT_TEXTS = {
  JOIN_US: "Unete a Nosotros",
  VISIT_US: "Visitanos!",
  TITLE_1: "Iglesia Adventista ",
  TITLE_2: "Norte",
  DESCRIPTION:
    "La Iglesia Adventista del Séptimo Día lleva esperanza al mundo para que las personas vivan con la certeza de que su historia no termina aquí. Esa es la certeza encontrada a lo largo de toda la Biblia.",
  HERO_BUTTON: "Quienes Somos",
  CONTENT_TITLE: "Quienes Somos?",
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
    "https://oidyved.com/wp-content/uploads/2021/11/Screen-Shot-2021-11-10-at-5.50.05-AM.png.webp",
} as const;

/**
 * Creencias fundamentales de la Iglesia Adventista
 */
export const CHURCH_BELIEFS = [
  {
    ICON: "book-open",
    TITLE: "La Biblia como autoridad",
    DESCRIPTION:
      "Creemos que la Biblia es la Palabra inspirada de Dios, la única regla infalible de fe y práctica. Es la revelación escrita de Su voluntad y el fundamento de todas nuestras enseñanzas.",
  },
  {
    ICON: "cross",
    TITLE: "Jesucristo, nuestra esperanza",
    DESCRIPTION:
      "Jesús es el Hijo eterno de Dios, nuestro Salvador y Redentor. Por Su vida, muerte y resurrección, nos ofrece salvación gratuita y reconciliación con el Padre.",
  },
  {
    ICON: "heart",
    TITLE: "El sábado como santo",
    DESCRIPTION:
      "Guardamos el séptimo día de la semana (del ocaso del viernes al ocaso del sábado) como día de reposo, adoración y comunión. Es un memorial de la creación y un signo de nuestra relación con Dios.",
  },
  {
    ICON: "sun",
    TITLE: "La segunda venida de Cristo",
    DESCRIPTION:
      "Creemos en la inminente, visible y gloriosa venida de Jesucristo. Este evento transformará la tierra y marcará el fin del pecado, inaugurando la vida eterna con Dios.",
  },
] as const;

/**
 * Textos para la sección de Creencias
 */
export const BELIEFS_SECTION_TEXTS = {
  SECTION_TITLE: "Nuestras Creencias Fundamentales",
  SECTION_SUBTITLE:
    "Como iglesia adventista del séptimo día, nuestra fe se basa en la Biblia y se resume en 28 principios fundamentales. Aquí presentamos algunos pilares de nuestra identidad cristiana y esperanza.",
  CTA_TITLE: "¿Quieres profundizar?",
  CTA_DESCRIPTION:
    "Te invitamos a conocer los 28 Principios Fundamentales de la fe adventista, un resumen fiel de lo que creemos según las Escrituras.",
  CTA_BUTTON_TEXT: "Leer los 28 Principios",
  CTA_LINK: "https://www.adventistas.org/es/creencias/",
} as const;

export const BELIEF_SECTION_IDS = {
  HERO: "hero__creencias",
  CONTENT: "creencias",
} as const;