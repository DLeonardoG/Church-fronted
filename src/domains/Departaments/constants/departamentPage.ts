import type { Department, DepartmentSlug } from '../types/types';

export const departmentData: Record<DepartmentSlug, Department> = {
  mayordomia: {
    title: "Departamento de Mayordomía",
    description: "Administrando con fidelidad lo que Dios nos ha confiado.",
    image: "https://chandlerspanishaz.adventistchurch.org/build/image/168.jpg?w=1024&h=1024&fit=max&s=7c02c989f80fabcc007bb5954c67cc2b", // placeholder
    sections: [
      {
        heading: "Sobre Nosotros",
        content: "La mayordomía adventista va más allá del dinero: es una respuesta de gratitud a Dios por todo lo que Él nos ha dado —tiempo, talentos, recursos y la vida misma.",
        scripture: "“Del Señor es la tierra y su plenitud; el mundo, y los que en él habitan.” — Salmo 24:1"
      },
      {
        heading: "Principios Clave",
        content: "Diezmos, ofrendas, uso sabio de los recursos, y el principio de que “todo pertenece a Dios”.",
        items: ["Devolver el diezmo fiel", "Ofrendas voluntarias", "Administración responsable"]
      }
    ]
  },
  diaconos: {
    title: "Diáconos y Diaconisas",
    description: "Sirviendo con amor, compasión y dedicación.",
    image: "https://chandlerspanishaz.adventistchurch.org/build/image/264.jpg?w=1024&h=1024&fit=max&s=4528fed0c78c8b5d7bcb147663eb803c",
    sections: [
      {
        heading: "Sobre Nosotros",
        content: "Las diaconisas desempeñan un papel muy importante y complementario al de los diáconos. Ellas están involucradas en diversas actividades de servicio dentro de la iglesia, que incluyen el cuidado y preparación para la Santa Cena, la organización de eventos especiales y la atención a las necesidades de los miembros, especialmente de las mujeres y niños.",
        items: [
          "Visitas a enfermos",
          "Apoyo emocional y espiritual",
          "Cuidado durante la Santa Cena",
          "Colaboración en programas comunitarios"
        ]
      }
    ]
  },
  conquistadores: {
    title: "Club de Conquistadores",
    description: "Formando jóvenes con valores, habilidades y amor por la naturaleza.",
    image: "https://image.slidesharecdn.com/organigramayestructura-230302200428-1669f8ad/75/Organigrama-y-Estructura-del-club-de-conquistadores-pdf-1-2048.jpg",
    sections: [
      {
        heading: "Sobre Nosotros",
        content: "Los Conquistadores son niños y niñas que oscilan entre los 10 y 15 años, y no hace acepción de personas por su condición social, color o religión. Se reúnen una vez por semana con el fin de desarrollar talentos, habilidades, percepciones y el gusto por la naturaleza.",
        items: [
          "Actividades al aire libre",
          "Supervivencia y campismo",
          "Artes manuales",
          "Trabajo en equipo"
        ]
      },
      {
        heading: "Reuniones",
        content: "Domingos de 10:30 a 13:00 horas"
      }
    ]
  },
  "ministerios-personales": {
    title: "Ministerios Personales",
    description: "Llevando el amor de Cristo de persona a persona.",
    image: "https://i0.wp.com/adventistasloscreadores.com/wp-content/uploads/2023/11/Min-Personal.png",
    sections: [
      {
        heading: "Misión",
        content: "Capacitar a cada miembro de la iglesia para compartir su fe de manera personal, amable y efectiva, siguiendo el ejemplo de Jesús.",
        items: [
          "Estudios bíblicos personales",
          "Evangelismo en el vecindario",
          "Capacitación en discipulado",
          "Seguimiento a nuevos creyentes"
        ]
      }
    ]
  },
  comunicaciones: {
    title: "Departamento de Comunicaciones",
    description: "Comunicando la esperanza con claridad y propósito.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75v3zFAUeneXRND24yIvLDr15QNfxS3AR3g&s",
    sections: [
      {
        heading: "Propósito",
        content: "Gestionar los canales de comunicación de la iglesia (redes sociales, boletines, sitio web) para fortalecer la comunidad y proclamar el mensaje adventista.",
        items: [
          "Gestión de redes sociales",
          "Diseño gráfico institucional",
          "Fotografía y video de eventos",
          "Boletines informativos"
        ]
      }
    ]
  },
  "escuela-sabatica": {
    title: "Escuela Sabática",
    description: "Estudiando la Palabra juntos cada sábado.",
    image: "https://www.iglesiaadventista7modiahumacao1.com/uploads/4/3/2/4/4324556/esc-sab-2_orig.jpg",
    sections: [
      {
        heading: "Visión",
        content: "Fomentar el estudio bíblico comunitario como medio para crecer en la fe, la amistad y el servicio.",
        items: [
          "Clases por grupos de edad",
          "Programas especiales sabáticos",
          "Participación en ofrendas misioneras",
          "Formación de maestros"
        ]
      }
    ]
  },
  jovenes: {
    title: "Ministerio de Jóvenes",
    description: "Guiando a la juventud a seguir a Jesús con pasión.",
    image: "https://s3.amazonaws.com/gravitalsoftware/ucn_web/instances/deparment/eb808eca-de13-4182-b339-896c545875a7.jpg",
    sections: [
      {
        heading: "Enfoque",
        content: "Crear un espacio donde los jóvenes encuentren identidad, propósito y comunidad en Cristo.",
        items: [
          "Retiros y congresos",
          "Servicio comunitario",
          "Discipulado grupal",
          "Actividades recreativas con propósito"
        ]
      }
    ]
  },
  universitarios: {
    title: "Ministerio Universitario",
    description: "Fortaleciendo la fe en la etapa universitaria.",
    image: "https://i.ytimg.com/vi/thaBWZ6WLzY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAIaV0GCri03bO41DwCOYCRP_Feww",
    sections: [
      {
        heading: "Objetivo",
        content: "Apoyar a los estudiantes adventistas en su vida académica y espiritual, conectándolos con una comunidad de fe.",
        items: [
          "Grupos de estudio bíblico en campus",
          "Orientación vocacional desde la fe",
          "Eventos interuniversitarios",
          "Apoyo en desafíos espirituales"
        ]
      }
    ]
  },
  educacion: {
    title: "Departamento de Educación",
    description: "Formando mentes y corazones para la eternidad.",
    image: "https://i.ytimg.com/vi/4eij-RsAmQk/maxresdefault.jpg",
    sections: [
      {
        heading: "Compromiso",
        content: "Promover una visión adventista de la educación que integre fe, aprendizaje y servicio.",
        items: [
          "Apoyo a escuelas adventistas",
          "Cursos para padres y maestros",
          "Recursos pedagógicos cristianos",
          "Fomento de la lectura bíblica"
        ]
      }
    ]
  },
  capellania: {
    title: "Capellanía",
    description: "Ofreciendo cuidado espiritual en momentos críticos.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROyz7Mvf2EU2EvQid34AqypLn1UV3f3O0KTA&s",
    sections: [
      {
        heading: "Rol",
        content: "Brindar acompañamiento pastoral en hospitales, hogares de ancianos, cárceles y situaciones de crisis.",
        items: [
          "Visitas hospitalarias",
          "Asesoramiento espiritual",
          "Oración con los afligidos",
          "Coordinación con líderes comunitarios"
        ]
      }
    ]
  },
  familia: {
    title: "Ministerio de la Familia",
    description: "Fortaleciendo hogares según el plan de Dios.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-FlzX_Wf1Fvkf_hXCszCWP564KCzBchi0Q&s",
    sections: [
      {
        heading: "Misión",
        content: "Equipar a las familias adventistas para vivir en armonía, amor y fidelidad a los principios bíblicos.",
        items: [
          "Cursos prematrimoniales",
          "Talleres para padres",
          "Dinámicas de reconciliación",
          "Recursos para el culto familiar"
        ]
      }
    ]
  },
  salud: {
    title: "Ministerio de Salud",
    description: "Cuidando el templo del Espíritu Santo: cuerpo, mente y espíritu.",
    image: "https://revista.adventista.es/wp-content/uploads/2020/11/1.jpg",
    sections: [
      {
        heading: "Visión Holística",
        content: "Promover un estilo de vida saludable basado en los 8 remedios naturales y los principios bíblicos.",
        items: [
          "Charlas sobre nutrición",
          "Programas de ejercicio",
          "Talleres de salud mental",
          "Campañas contra adicciones"
        ]
      }
    ]
  },
  dorcas: {
    title: "Ministerio Dorcas",
    description: "Sirviendo con manos de amor, como la Biblia nos enseña.",
    image: "https://i.ytimg.com/vi/Y6RKBplTskE/maxresdefault.jpg",
    sections: [
      {
        heading: "Herencia Bíblica",
        content: "Inspirado en Dorcas (Hechos 9:36), este ministerio realiza obras de misericordia: confección de ropa, mantas, y apoyo a necesitados.",
        items: [
          "Confección de prendas para el invierno",
          "Visitas a hogares vulnerables",
          "Apoyo en emergencias",
          "Capacitación en costura y manualidades"
        ]
      }
    ]
  },
  evangelismo: {
    title: "Departamento de Evangelismo",
    description: "Proclamando las buenas nuevas a toda criatura.",
    image: "https://files.adventistas.org/institucional/es/sites/12/2024/12/Logo-Escola-de-Evangelismo-ESPANHOL-1.png",
    sections: [
      {
        heading: "Pasión Misionera",
        content: "Organizar campañas evangelísticas, series bíblicas y estrategias para alcanzar a la comunidad local.",
        items: [
          "Series públicas de evangelismo",
          "Entrenamiento en evangelismo personal",
          "Campañas digitales",
          "Seguimiento post-bautismo"
        ]
      }
    ]
  },
  tesoreria: {
    title: "Tesorería de Iglesia",
    description: "Administrando con integridad los recursos de la obra de Dios.",
    image: "https://i.ytimg.com/vi/k1MQrTSs0F0/maxresdefault.jpg",
    sections: [
      {
        heading: "Funciones",
        content: "Gestionar los recursos financieros de la iglesia, asegurando que se administren de acuerdo con los principios de la mayordomía cristiana.",
        items: [
          "Supervisión de ingresos y egresos",
          "Registro detallado de transacciones",
          "Remisión fiel del diezmo a la Asociación"
        ]
      },
      {
        heading: "Bases bíblicas",
        content: "“Traigan todo el diezmo a la tesorería, y haya alimento en mi casa.”",
        scripture: "Malaquías 3:10"
      }
    ]
  },
  secretaria: {
    title: "Secretaría de Iglesia",
    description: "Organizando con eficiencia para el buen funcionamiento de la iglesia.",
    image: "https://i0.wp.com/adventistasloscreadores.com/wp-content/uploads/2023/07/Secretaria.png?resize=500%2C280&ssl=1",
    sections: [
      {
        heading: "Responsabilidades",
        content: "Mantener los registros oficiales de la iglesia, coordinar reuniones, gestionar documentación y apoyar a la junta directiva.",
        items: [
          "Registro de miembros",
          "Actas de reuniones",
          "Comunicación interna",
          "Gestión de archivos"
        ]
      }
    ]
  }
};