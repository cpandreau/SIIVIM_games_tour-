import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className="register-container">
        <div className="game-mode">
          <p>Game mode</p>
        </div>
        <div className="duo">
          <p>Duo</p>
        </div>
        <div className="npc">
          <p>NE PAS COMBLER</p>
        </div>
        <a className="register">S'INSCRIRE</a>
      </div>
      <div className="bottom-bar">
        <p>E-GAME SIIViM TOUR</p>
      </div>
      <div className="info-container">
        <div className="og-season">
          <p>SEASON OG</p>
        </div>
        <div className="date">
          <p>8-9 FÉVRIER 2025</p>
        </div>
        <div className="og-map">
          <img src="../image/OG.webp" alt="Map" />
        </div>
      <div className="quest-container">
        <div className="quest-fun">
          <p>S'amuser</p>
            <div className="quest-bar-fun">
                <p>100%</p>
                <img className="quest-item" src="../image/xp-fortnite.webp" alt="XP" />
                <img className="quest-item" src="../image/etoile-fortnite.webp" alt="Etoile" />
            </div>
        </div>
        <div className="quest-win">
          <p>Remporter la victoire</p>
            <div className="quest-bar-win">
                <p>???</p>
                <img className="quest-item" src="../image/xp-fortnite.webp" alt="XP" />
                <img className="quest-item" src="../image/etoile-fortnite.webp" alt="Etoile" />
            </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Home;
