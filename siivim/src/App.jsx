import { useState, useEffect } from 'react';
import './App.css';
import logo from '../image/logov1.png';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <>
            <div className={`logo-overlay ${isLoaded ? 'hidden' : ''}`}>
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <header className="header">
                <div className="slide-bar" style={{ marginLeft: '15rem', marginTop: '1.3rem'}}></div>
                <div className="button-container" style={{ marginLeft: '-120rem', marginTop: '1.3rem' }}> 
                  <div className="parallelogram"></div>
                  <button className="titre" onClick={() => setPage('home')}>ACCUEIL</button>
                </div>
                <div className="button-container" style={{ marginLeft: '-50px', marginTop: '1.3rem' }}>
                  <div className="parallelogram"></div>
                  <button className="titre" onClick={() => setPage('infos')}>INFOS</button>
                </div>
                <div className="button-container" style={{ marginRight: '17.8rem', marginTop: '1.3rem'}}>
                  <div className="parallelogram"></div>
                  <button className="titre">CLASSEMENT</button>
                </div>
                <img className="background" src='../image/Fortnite1.webp' alt="Background" />
              </header>
              <div className="container"></div>
              <div style={{ marginTop: '60px' }}></div>
                <button className='FORTNITE'>S'INSCRIRE</button>
                <text className='GM'>Game Mode</text>
                <text className='DUO'>DUO</text>
                <button className='NPC'>NE PAS COMBLER</button>
                <p>E-GAMES SIIViM TOUR</p>
              <div className="info_bar"></div>
              <div className="info_bar2">SEASON OG</div>
              <div className="info_bar3">8-9 FÉVRIER 2025</div>
              <img className="og-map" src='../image/OG.webp' alt="Map"/>
              <div className="quetes">S'amuser</div>
              <div className="quete-bar-fun"></div>
              <div className="winrate">100%</div>
              <img className="xp" src='../image/xp-fortnite.webp' alt="XP"/>
              <img className="etoile" src='../image/etoile-fortnite.webp' alt="Etoile"/>
              <div className="quete2">Remporter la victoire</div>
              <img className="etoile2" src='../image/etoile-fortnite.webp' alt="Etoile"/>
              <img className="xp2" src='../image/xp-fortnite.webp' alt="XP"/>
              <div className="winrate2">???</div>
              <img className="llama" src='../image/Llama.webp' alt="Lama"/>
              <div className="bottom-bar"></div>
            </div>
          </>
        );
      case 'infos':
        return (
          <div>
            <header className="header">
            <div className="slide-bar" style={{ marginLeft: '15rem', marginTop: '1.3rem'}}></div>
                <div className="button-container" style={{ marginLeft: '-120rem', marginTop: '1.3rem' }}> 
                  <div className="parallelogram"></div>
                  <button className="titre" onClick={() => setPage('home')}>ACCUEIL</button>
                </div>
                <div className="button-container" style={{ marginLeft: '-50px', marginTop: '1.3rem' }}>
                  <div className="parallelogram"></div>
                  <button className="titre" onClick={() => setPage('infos')}>INFOS</button>
                </div>
                <div className="button-container" style={{ marginRight: '17.8rem', marginTop: '1.3rem'}}>
                  <div className="parallelogram"></div>
                  <button className="titre">CLASSEMENT</button>
                </div>
             <img className="background2" src='../image/Fortnite2.webp' alt="Background"/>
            </header>
            <div className="info-content">
              <div className= "parallelogram2"></div>
              <h1 className="INSTRUCTIONS">Instructions</h1>
              <img className="kevin" src='../image/kevin.webp' alt="Image"/>
              <div className="case">Organisé par la Ville de Nevers, ce tournoi se déroule du 8 février 2025 au 9 février 2025 sur Fortnite.</div>
              <a className="Regl" href="/ppt/reglement.pdf" download>Télécharger le réglement du tournoi ici.</a>
            <h2>Conditions d'éligibilité</h2>
            <p>Ouvert à toutes les équipes et joueurs respectant les conditions d'éligibilité.
            Interdit aux employés et agents de Epic Games ou membres du Comité d'organisation et leur famille immédiate.</p>
            <p>Au moins un joueur de l'équipe doit être domicilié dans une ville éligible. </p>
            <p>Les joueurs doivent avoir un compte Epic Games et Fortnite valide</p>
            <p>Les joueurs ne peuvent participer que dans une seule équipe pendant toute la durée du tournoi.</p>
              <p>Tous les participants doivent respecter l'esprit de fair-play et les règles du jeu.</p>
              <p>Les inscriptions doivent être complètes et conformes aux exigences avant la date limite fixée par l'organisation.</p>
              <p>Les participants doivent s'assurer de la stabilité de leur connexion internet pour les phases en ligne.</p>
              <p>Les décisions de l'arbitrage pendant le tournoi sont finales et sans appel.</p>
              <p>Les participants doivent être disponibles pour les phases en ligne.</p>
              <h2>Âge minimum requis</h2>
              <p>Les joueurs doivent avoir au moins 15 ans à la date du 6 janvier 2025, les joueurs de 15 à 17 ans doivent fournir une authorisation parentale lors de l'inscriptions</p>
              <h2>Calendrier des parties</h2>
              <p>Qualification: Samedi 8 février 2025</p>
              <p>Finale: Dimanche 9 février 2025</p>
              <h2>Dotations</h2>
              <p>1er Duo 600€</p>
              <p>2ème Duo 300€</p>
              <p>3ème Duo 100€</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;
