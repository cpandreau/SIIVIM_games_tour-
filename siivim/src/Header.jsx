import React from "react";
import "./Header.css";

const Header = ({ setPage }) => {
  return (
    <header>
        <img src="image/e-games.png" alt="Logo" />
        <nav>
          <img src="image/page404.png" alt="Logo1" className="falling-logo" style={{ left: '10%' }} />
          <img className="epitech" src="image/Epitech.png" alt="Logo2" style={{ left: '30%' }} />
          <img src="image/ville-nevers.png" alt="Logo3" className="falling-logo" style={{ left: '50%' }} />
          <img src="image/SIIViM.png" alt="Logo4" className="falling-logo" style={{ left: '70%' }} />
          <img src="image/nevers-agglo.png" alt="Logo5" className="falling-logo" style={{ left: '90%' }} />
          <a href="#home" onClick={() => setPage('home')}>ACCUEIL</a>
          <a href="#infos" onClick={() => setPage('infos')}>INFOS</a>
          <a href="#classement" onClick={() => setPage('classement')}>CLASSEMENT</a>
        </nav>
    </header>
  );
};

export default Header;
