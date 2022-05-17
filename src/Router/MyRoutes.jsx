import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Cv from "../components/Curriculum/Cv";
import Contact from "../components/Contact/Contact";
import HeaderNav from "../Layout/HeaderNav";
import Footer from "../Layout/Footer";
import Project from "../components/Proyect/Project";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      {/* HEADER y NAVEGACION */}
      <HeaderNav />
      <main className="content">
        {/* CONTENIDO */}
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/curriculum" element={<Cv />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/proyecto/:id" element={<Project />} />
          <Route path="/*" element={<h1 className="heading">Error 404</h1>} />
        </Routes>
      </main>
      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
