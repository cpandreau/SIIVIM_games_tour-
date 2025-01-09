import React from "react";
import "./Home.css";

const Home = ({ onInscrireClick }) => {
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
        <a className="register" onClick={onInscrireClick}>S'INSCRIRE</a>
      </div>
      <div className="bottom-bar">
        <p>E-GAME SIIViM TOUR by EPITECH and SYNAPTIC-HUB</p>
        <img src='./image/synaptic2.png'></img>
        <p className="disclamer"><u>/!\</u> LA VILLE DE NEVERS N'EST PAS EN COLLABORATION AVEC FORTNITE ! <u>/!\</u></p>
        <div className="logos">
          <a href="https://www.tiktok.com/@villedenevers" target="_blank" rel="noopener noreferrer">
            <img src="./image/tiktok.webp" alt="Logo 1" />
          </a>
          <a href="https://www.instagram.com/villedenevers/" target="_blank" rel="noopener noreferrer">
            <img src="./image/insta.png" alt="Logo 2" />
          </a>
          <a href="https://discord.gg/XTNmeqmd59" target="_blank" rel="noopener noreferrer">
            <img src="./image/discord.png" alt="Logo 3" />
          </a>
        </div>
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
        <div className="twitch-stream">
          <iframe className="twitch" src="https://player.twitch.tv/?channel=villedenevers&parent=localhost" height="480" width="720" allowFullScreen></iframe>
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
      <div className="footer-text">
        <p>CET ÉVÉNEMENT N'EST EN AUCUN CAS SPONSORISÉ, APPROUVÉ OU
        ADMINISTRÉ PAR, OU AUTREMENT
        ASSOCIÉ À, EPIC GAMES, INC.</p>
        <p>LES INFORMATIONS QUE LES JOUEURS
        FOURNISSENT DANS LE CADRE DE CET
        ÉVÉNEMENT SONT FOURNIES À L'ORGANISATEUR DE L'ÉVÉNEMENT ET NON
        À EPIC GAMES, INC.</p>
        <a href="../ppt/invitation.pdf" download="Reglement_Tournoi.pdf" className="invitation">Inviter des amis !</a>
      </div>
    </main>
  );
};

export default Home;
