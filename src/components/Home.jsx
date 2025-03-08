import React, { useState } from 'react';
import NavBar from './NavBar'
import Carousel from './Carousel'

const Home = () => {
    const slides = [
        'https://lh3.googleusercontent.com/p/AF1QipNC910UDY9SN7HY4YwkkmxN7blwh4Y8i0Z71lat=w1024-k',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaeB0PzfLXmzpKsvgiXrero_N0LFuITVPTw&s'
    ]
  return (
    <>
   <NavBar/>
    <Carousel slides={slides}/>
   <h2>Home</h2>
   </>
  );
};

export default Home;