import { CarouselOrientation } from "./carouselEvents";
import { ArrowUpRight } from "lucide-react"
import { CountdownTimer } from "@/core/components/ui/countdown-timer"


const eventosPrincipales = {
  titulo: "Santa Cena",
  descripcion:
    "La Santa Cena es una celebración cuatrimestral que simboliza el sacrificio de Cristo y la promesa de su regreso.",
  fecha: "2025-10-21T00:00:00",
  imagen:
    "https://marketplace.canva.com/EAGYTACmB7o/2/0/1600w/canva-post-de-instagram-santa-cena-iglesia-cristiana-uj4YxF3HReg.jpg",
};

const eventosSecundarios = [
  [
    {
      titulo: "Voceros del Reino",
      descripcion:
        "Somos la Agrupación Musical Voceros Del Reino que por medio de la música alabamos a Dios",
      fecha: "2025-10-28T00:00:00",
      imagen:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=570x10000:format=jpg/path/s7758858ede33c652/image/i37f5d62dc8dac510/version/1278951977/image.jpg",
    },
    {
      titulo: "Conferencia Semanal",
      descripcion:
        "Somos la Agrupación Musical Voceros Del Reino que por medio de la música alabamos a Dios",
      fecha: "2025-11-21T00:00:00",
      imagen:
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrj2y8FhHRByoPy24Let0yZCfhwIZYBPViWeimSJ5rubO-tXt5yFnL-PRXWlO1-A0YyFmPFgpHkbGSkSyn-ouus6i2W2SlF7W4xlr5FiMqHL3pSijL1oQl7hwNSvlAZ7KZfTr0tEw=s680-w680-h510-rw",
    },
    {
      titulo: "Campamento Guías Mayores",
      descripcion:
        "El Club de Guías Mayores es un programa opcional de la Iglesia Adventista del Séptimo Día.",
      fecha: "2025-12-22T00:00:00",
      imagen:
        "https://i.ytimg.com/vi/NxcWsV0fKlw/maxresdefault.jpg",
    },
    {
      titulo: "Congreso Juvenil",
      descripcion:
        "Somos la Agrupación Musical Voceros Del Reino que por medio de la música alabamos a Dios",
      fecha: "2026-07-22T00:00:00",
      imagen:
        "https://cdn.stayhappening.com/events5/banners/2cb8fd547af710ef4c45d1657a8202097e59b21b9ee204e70235d9c0a1e55b7f-rimg-w1200-h600-gmir.jpg?v=1644807816",
    },
  ],
  [
    {
      titulo: "Congreso de Líderes y Discípulos Creativos",
      descripcion: "Descripción del evento Seis",
      fecha: "2026-07-26T00:00:00",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDzg6pY9syIc7Z6SiC6VXwyBfjg3q9u4o3w&s",
    },
    {
      titulo: "Día de Oración Trimestral",
      descripcion: "Descripción del evento Siete",
      fecha: "2026-07-27T00:00:00",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9u4QM423f7nPJiwwRNNduw_1T07tTrwIG8BcljyEKqhUlYJQ-jqOhRpvsthS3Bfyhk_w&usqp=CAU",
    },
    {
      titulo: "Reconocimiento del Maestro Adventista",
      descripcion: "Descripción del evento Ocho",
      fecha: "2026-07-28T00:00:00",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01iM5gYb53LXH-uOKat2TvPF1NJiT8Z41LQ&s",
    },
    {
      titulo: "Vigilia",
      descripcion:
        "Una vigilia adventista es un servicio religioso nocturno que puede durar varias horas, enfocado en la preparación espiritual.",
      fecha: "2025-07-29T00:00:00",
      imagen:
        "https://static.wixstatic.com/media/7f07bc_8b71095098e142819754b5b44aefd365~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/7f07bc_8b71095098e142819754b5b44aefd365~mv2.png",
    },
  ],
];


function Anuncios() {


  return (
    <div className="flex flex-wrap w-full h-full flex px-5 justify-between">


      <aside
        className="relative h-full w-110 rounded-4xl shrink-3 border flex flex-col px-8 py-13 justify-between overflow-hidden group"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${eventosPrincipales.imagen})` }}
        />

        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="w-full h-40 p-3 space-y-5">
            <h3 className="font-bold text-4xl italic text-black">
              {eventosPrincipales.titulo}
            </h3>
            <div className="flex w-full gap-18 items-center">
              <button className="cursor-pointer rounded-full w-15 h-15 bg-white flex items-center justify-center">
                <ArrowUpRight  size={32} strokeWidth={1.5} />
              </button>
              <p className="text-sm w-50 mr-4 text-black">
                {eventosPrincipales.descripcion}
              </p>
            </div>
          </div>

          <div className="flex w-full h-15 space-x-3 items-center">
            <CountdownTimer targetDate={eventosPrincipales.fecha} />
            <button className="flex w-2/5 rounded-full h-[85%] bg-white justify-between items-center p-5 cursor-pointer transition duration-300 hover:scale-98 hover:bg-white/95">
              <span className="text-black text-lg italic">Ver más</span>
              <ArrowUpRight size={25} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </aside>


      <div className="h-full w-175 flex items-center justify-center">
        <CarouselOrientation eventos={eventosSecundarios.flat()} />
      </div>
    </div>
  );
}

export default Anuncios;
