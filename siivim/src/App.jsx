import { useState, useEffect } from 'react';
import './App.css';
import logo from '../image/logov1.png';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
            <button className="titre">ACCUEIL</button>
          </div>
          <div className="button-container" style={{ marginLeft: '-50px', marginTop: '18px' }}>
            <div className="parallelogram"></div>
            <button className="titre">INFOS</button>
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
}

export default App;
