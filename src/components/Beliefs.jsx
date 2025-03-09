import React, { useState } from "react";
import NavBar from "./NavBar";
import Carousel from "./Carousel";

const Beliefs = () => {
  const slides = [
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpc2FqZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/517188688/es/foto/paisaje-de-monta%C3%B1a.jpg?s=612x612&w=0&k=20&c=EnSd5sJdxih_svZHscQ5Hfzr3RSOdXO9MpdmKK4CMTs=",
  ];
  return (
    <>
      <NavBar />
      <Carousel slides={slides} />
      <h2>Aqui ira una pagina con las creencias y demas tenemos que estar atentos  a sugerencias y demas</h2>
    </>
  );
};

export default Beliefs;
