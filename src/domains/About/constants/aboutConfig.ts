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
  TITLE_1: "IGLESIA ADVENTISTA ",
  TITLE_2: "NORTE",
  DESCRIPTION:
    "La Iglesia Adventista del Séptimo Día lleva esperanza al mundo para que las personas vivan con la certeza de que su historia no termina aquí.",
  HERO_BUTTON: "Quiénes Somos",
  CONTENT_TITLE: "¿QUIENES SOMOS?",
  CONTENT_SUBTITLE: "Conoce quiénes somos como iglesia, nuestra fe y el propósito que nos inspira a servir a Dios y a nuestra comunidad.",
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
  SUBTITLE: "Un legado de fe, esperanza y servicio en Bucaramanga, construido por generaciones que han dedicado su vida a compartir el mensaje de Cristo y servir con amor a nuestra comunidad.",
  DESCRIPTION:
    "La Iglesia Adventista del Séptimo Día en la región Norte de Bucaramanga ha sido un faro de esperanza y servicio durante años. Desde nuestros humildes comienzos, hemos crecido como una familia de fe comprometida con llevar el amor de Cristo a nuestra comunidad.",
  HIGHLIGHT:
    "Hoy somos una red de congregaciones vibrantes que trabajan unidas para transformar vidas a través de la educación, la salud, y el ministerio espiritual.",
} as const;

/**
 * Rutas y URLs
 */
export const ABOUT_LINKS = {
  JOIN_US_HREF: "/#/#Contactanos",
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
    img: "https://www.chapellibrary.org/images/covers/booklets/daots.jpg?width=250",
    DESCRIPTION:
      "Creemos que la Biblia es la Palabra inspirada de Dios y la guía segura para nuestra fe y práctica.",
  },
  {
    ICON: "cross",
    TITLE: "Jesucristo, nuestro Salvador",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYim4C5eI5hKSyUzYx-VedB0hI65ZxbjBgg&s",
    DESCRIPTION:
      "Jesús es el centro del plan de salvación, quien murió y resucitó para darnos vida eterna.",
  },
  {
    ICON: "heart",
    TITLE: "El sábado como día de descanso",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3gKRLpvHIc6fCzCHrFdARabyFkOwFgC0Vw&s",
    DESCRIPTION:
      "Observamos el sábado como un regalo divino para descansar, adorar y reconectar con Dios.",
  },
  {
    ICON: "sun",
    TITLE: "La segunda venida de Cristo",
    img: "https://i.pinimg.com/236x/bc/57/9d/bc579db03daecda9905ee74a19c9fe5a.jpg",
    DESCRIPTION:
      "Esperamos con esperanza el pronto regreso de Jesús, la promesa final de restauración.",
  },
  {
    ICON: "users",
    TITLE: "La iglesia como familia espiritual",
    img: "https://image.isu.pub/201214234258-349cf89b75992665645ac4194daabf32/jpg/page_1_social_preview.jpg",
    DESCRIPTION:
      "Somos una comunidad que crece, sirve y comparte el amor de Cristo dentro y fuera de la congregación.",
  },
  {
    ICON: "leaf",
    TITLE: "Mayordomía y vida saludable",
    img: "https://imgv2-1-f.scribdassets.com/img/document/464813929/original/67b45c6360/1?v=1",
    DESCRIPTION:
      "Promovemos un estilo de vida equilibrado que honra a Dios en lo físico, mental y espiritual.",
  },
  {
    ICON: "globe",
    TITLE: "Misión para el mundo",
    img: "https://image.isu.pub/211221150318-01fde18c5af2365b9bf92cad0d58c520/jpg/page_1_social_preview.jpg",
    DESCRIPTION:
      "Compartimos el mensaje de esperanza a nuestra comunidad y al mundo, siguiendo el ejemplo de Jesús.",
  },
  {
    ICON: "sparkles",
    TITLE: "El Espíritu Santo y la transformación",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAnarRWJKfiKJ9oHLCv8e1zt1FojVngJZ0Q&s",
    DESCRIPTION:
      "Creemos en el poder del Espíritu Santo para guiarnos, fortalecernos y transformar nuestras vidas.",
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