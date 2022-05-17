import React from "react";
import { Link } from "react-router-dom";
import ListWorks from "../ListWorks/ListWorks";

const Home = () => {
  return (
    <div className="home">
      <h1>
        Hola! Mi nombre es Jorge Caballero y soy un desarrollador frontend.
        Ofrezco mis servicios de <strong>programación y diseño web</strong>. Los
        lenguajes que manejo son Javascript, React, Redux y Node.js.
      </h1>
      <h2 className="title">
        En este momento estoy trabajando en una aplicación web que se encuentra
        en desarrollo. Puedo ayudarte a crear una aplicación web que se adapte a
        tus necesidades, y que sea de fácil acceso y manejo.
      </h2>
      <Link to="/contacto">Contacta conmigo</Link>
      <section className="last-works">
        <h3 className="heading">Últimos trabajos</h3>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <ListWorks limit="3"/>
      </section>
    </div>
  );
};

export default Home;
