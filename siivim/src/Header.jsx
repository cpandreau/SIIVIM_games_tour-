import React from "react";
import "./Header.css";

const Header = ({ setPage }) => {
  return (
    <header>
        <nav>
          <a href="#home" onClick={() => setPage('home')}>ACCUEIL</a>
          <a href="#infos" onClick={() => setPage('infos')}>INFOS</a>
          <a href="#classement" onClick={() => setPage('classement')}>CLASSEMENT</a>
        </nav>
    </header>
  );
};

export default Header;
