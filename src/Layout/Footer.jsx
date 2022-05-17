import React from "react";

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      Portafolio Jorge Caballero &copy; Curso Master en React - {year}
    </footer>
  );
};

export default Footer;
