import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/core/components/ui/resizable";
import { useState, useEffect } from "react";

const eventosPrincipales = [
  {
    titulo: "Santa Cena",
    descripcion: "La Santa Cena es una celebración cuatrimestral que simboliza el sacrificio de Cristo y la promesa de su regreso.",
    fecha: "21 de Julio de 2025",
    imagen: "https://cdn-images.dzcdn.net/images/cover/412ffaeea38c065ea2654ac4873fd9ff/1900x1900-000000-81-0-0.jpg"
  }
];

const eventosSecundarios = [
  [
    { titulo: "Voceros del Reino", descripcion: "Somos la Agrupación Musical Voceros Del Reino que por medio de la música alabamos a Dios", fecha: "22 de Julio 2025", imagen: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noZWBTgTxpbsA_Lc8jHHDIXwoShzoJF_vStBskpNm33xXo6X1QKQmKigzk-C-fYSNLShWdyv29N0huklfZYeVupaIbFsjRXpZaZcjwvNHoMW71I9i4-dJ2TxAFbO6LCUQ6htkh9=s680-w680-h510-rw" },
    { titulo: "Conferencia Semanal", descripcion: "Somos la Agrupación Musical Voceros Del Reino que por medio de la música alabamos a Dios", fecha: "22 de Julio 2025", imagen: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrj2y8FhHRByoPy24Let0yZCfhwIZYBPViWeimSJ5rubO-tXt5yFnL-PRXWlO1-A0YyFmPFgpHkbGSkSyn-ouus6i2W2SlF7W4xlr5FiMqHL3pSijL1oQl7hwNSvlAZ7KZfTr0tEw=s680-w680-h510-rw" },
    { titulo: "Campamento Guias Mayores", descripcion: "El Club de Guías Mayores es un programa opcional de la Iglesia Adventista del Séptimo Día.", fecha: "22 de Julio 2025", imagen: "https://i.ytimg.com/vi/NxcWsV0fKlw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGEgYShhMA8=&rs=AOn4CLAJE9SWLgez9TzpIhTRFWlbPvpzuw" },
    { titulo: "Congreso Juvenil", descripcion: "Somos la Agrupación Musical Voceros Del Reino que por medio de la música alabamos a Dios", fecha: "22 de Julio 2025", imagen: "https://cdn.stayhappening.com/events5/banners/2cb8fd547af710ef4c45d1657a8202097e59b21b9ee204e70235d9c0a1e55b7f-rimg-w1200-h600-gmir.jpg?v=1644807816" }
  ],
  [
    { titulo: "Congreso de Líderes y Discípulos Creativos", descripcion: "Descripción del evento Seis", fecha: "26 de Julio", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDzg6pY9syIc7Z6SiC6VXwyBfjg3q9u4o3w&s" },
    { titulo: "Dia de Oracion Trimestral", descripcion: "Descripción del evento Siete", fecha: "27 de Julio", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9u4QM423f7nPJiwwRNNduw_1T07tTrwIG8BcljyEKqhUlYJQ-jqOhRpvsthS3Bfyhk_w&usqp=CAU" },
    { titulo: "Día del reconocimiento del Maestro Adventista", descripcion: "Descripción del evento Ocho", fecha: "28 de Julio", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01iM5gYb53LXH-uOKat2TvPF1NJiT8Z41LQ&s" },
    { titulo: "Vigilia", descripcion: "Una vigilia adventista es un servicio religioso nocturno que puede durar varias horas, enfocado en la preparación espiritual.", fecha: "29 de Julio", imagen: "https://static.wixstatic.com/media/7f07bc_8b71095098e142819754b5b44aefd365~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/7f07bc_8b71095098e142819754b5b44aefd365~mv2.png" }
  ]
];

function Anuncios() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    handler(); 
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);


  return (
    <div className="h-120 flex md:h-120 lg:h-100 w-full rounded-lg justify-center items-center">
      <ResizablePanelGroup
      direction={isMobile ? "vertical" : "horizontal"}
      className="rounded-lg border md:w-200 lg:w-[100px]"
    >
      <ResizablePanel defaultSize={35}>
        <div className="relative w-full h-full overflow-hidden rounded-lg group">
          <img
            src={eventosPrincipales[0].imagen}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4 text-center">
            <h4 className="text-lg font-bold">{eventosPrincipales[0].titulo}</h4>
            <p className="text-sm mt-2">{eventosPrincipales[0].descripcion}</p>
            <span className="text-xs mt-1">{eventosPrincipales[0].fecha}</span>
          </div>
        </div>

      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={65}>
        <ResizablePanelGroup direction={isMobile ? "vertical" : "horizontal"}>
          <ResizablePanel defaultSize={50}>
            <div className="relative w-full h-full overflow-hidden rounded-lg group">
              <img
                src={eventosSecundarios[1][3].imagen}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4 text-center">
                <h4 className="text-lg font-bold">{eventosSecundarios[1][3].titulo}</h4>
                <p className="text-sm mt-2">{eventosSecundarios[1][3].descripcion}</p>
                <span className="text-xs mt-1">{eventosSecundarios[1][3].fecha}</span>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="relative w-full h-full overflow-hidden rounded-lg group">
              <img
                src={eventosSecundarios[0][2].imagen}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4 text-center">
                <h4 className="text-lg font-bold">{eventosSecundarios[0][2].titulo}</h4>
                <p className="text-sm mt-2">{eventosSecundarios[0][2].descripcion}</p>
                <span className="text-xs mt-1">{eventosSecundarios[0][2].fecha}</span>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
  );
}

export default Anuncios;
