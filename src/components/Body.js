import React from 'react'
import Carrusel from './Carrusel'
import axios from 'axios';

const popular = [
  {
      nombre: 'Proyecto X',
      imagen: "proyectoX.jpg",
  },
  {
      nombre: 'Forrest Gump',
      imagen: "forrest gump.jpg"
  },
  {
      nombre: 'Peligro',
      imagen: "peligro.jpg"
  },
  {
      nombre: 'Juanes',
      imagen: "juanes.jpg"
  },
  {
      nombre: 'Pika',
      imagen: "pika.jpg"
  },
  {
      nombre: 'Image3',
      imagen: "image3.jpeg"
  },
  {
      nombre: 'Image2',
      imagen: "image2.jpeg"
  },
  {
      nombre: 'Image1',
      imagen: "image1.jpeg"
  }]
  const proximamente = [
  {
      nombre: 'Image0',
      imagen: "image0.jpeg"
  },
  {
      nombre: 'image5',
      imagen: "image5.jpeg"
  },
  {
      nombre: 'image4',
      imagen: "image4.jpeg"
  },
  {
      nombre: 'medellin',
      imagen: "medellin.jpeg"
  },
  {
      nombre: 'jimmoYang',
      imagen: "jimmyoYang.jpg"
  },
  {
      nombre: 'spiderman',
      imagen: "spiderman.jpg"
  },
  {
      nombre: 'thePurge',
      imagen: "the-purge.jpg"
  },
  {
      nombre: 'Unhinged',
      imagen: "unhinged.jpeg"
  }]
  const paraTi = [
  {
      nombre: 'Optimization 6',
      imagen: "Optimization6.png"
  },
  {
      nombre: 'invincible',
      imagen: "invincible.jpg"
  },
  {
      nombre: 'clarkson',
      imagen: "clarkson.jpg"
  },
  {
      nombre: 'atentado',
      imagen: "atentado.jpg"
  },
  {
      nombre: 'accion1',
      imagen: "accion1.png"
  },
  {
      nombre: 'accion2',
      imagen: "accion2.png"
  },
  {
      nombre: 'accion3',
      imagen: "accion3.png"
  },
  {
      nombre: 'accion4',
      imagen: "accion4.png"
  }
];

export default function Body({peliculas, peliculas2, peliculas3}) {
    console.log(peliculas, peliculas2, peliculas3);
  return (
    <>
      {/*<Carrusel peliculas={popular} />
      <Carrusel peliculas={proximamente} />
      <Carrusel peliculas={paraTi} />*/}
      <Carrusel peliculas={peliculas} />
      <Carrusel peliculas={peliculas2} />
      <Carrusel peliculas={peliculas3} />
    </>
  )
}
