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
                <div className="slide-bar"></div>
                <div className="button-container" style={{ marginLeft: '350px', marginTop: '18px' }}> 
                  <div className="parallelogram"></div>
                  <button className="titre" onClick={() => setPage('home')}>ACCUEIL</button>
                </div>
                <div className="button-container" style={{ marginLeft: '-50px', marginTop: '18px' }}>
                  <div className="parallelogram"></div>
                  <button className="titre" onClick={() => setPage('infos')}>INFOS</button>
                </div>
                <div className="button-container" style={{ marginLeft: '-50px', marginTop: '18px' }}>
                  <div className="parallelogram"></div>
                  <button className="titre">ÉQUIPE</button>
                </div>
                <div className="button-container" style={{ marginLeft: '-50px', marginTop: '18px', marginRight: '360px' }}>
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
              <div className="bottom-bar"></div>
            </div>
          </>
        );
      case 'infos':
        return (
          <div>
            <header className="header">
              <div className="slide-bar"></div>
              <div className="button-container" style={{ marginLeft: '350px', marginTop: '18px' }}> 
                <div className="parallelogram"></div>
                <button className="titre" onClick={() => setPage('home')}>ACCUEIL</button>
              </div>
              <div className="button-container" style={{ marginLeft: '-50px', marginTop: '18px' }}>
                <div className="parallelogram"></div>
                <button className="titre" onClick={() => setPage('infos')}>INFOS</button>
              </div>
              <div className="button-container" style={{ marginLeft: '-50px', marginTop: '18px' }}>
                <div className="parallelogram"></div>
                <button className="titre">ÉQUIPE</button>
              </div>
              <div className="button-container" style={{ marginLeft: '-50px', marginTop: '18px', marginRight: '360px' }}>
                <div className="parallelogram"></div>
                <button className="titre">CLASSEMENT</button>
              </div>
             {/* <img className="background" src='../image/Fortnite1.webp' alt="Background" />*/}
            </header>
            <div className="info-content">
              <h1>Instructions</h1>
              <p>Organisé par la Ville de Nevers, ce tournoi se déroule du 7 février 2025 au 8 février 2025 sur Fortnite.</p>
              <p>
                <a href="/ppt/reglement.pdf" download>Télécharger le réglement du tournoi ici.</a>
              </p>
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
