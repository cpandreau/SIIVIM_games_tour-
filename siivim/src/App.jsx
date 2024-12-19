import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header style={{ backgroundColor: 'darkblue', padding: '10px', height: '10vh', width: '100%', position: 'fixed', top: 0, left: 0 }}>
          <button className="titre">Accueil</button>
          <button className="titre">Infos</button>
          <button className="titre">Inscription</button>
          <button className="titre">Equipe</button>
          <button className="titre">Classement</button>
        </header>
        <body>
          <div className='Titre + inscription'>
            <h2>FORTNITE</h2>
            <text>E-GAMES SIIViM TOUR BY NEVERS</text>
            <button>INSCRIPTION</button>
          </div>
          <div className='Infos'>
            <h2>Présentation</h2>
            <text>Le SIIViM TOUR est un tournoi de jeux vidéo organisé par la ville de Nevers et ses partenaires. Il se déroulera en ligne sur le jeu vidéo Fortnite. Le site internet a été développé par les étudiants d'EPITECH Moulins.
            <br/>Planning des matchs sur Discord : <a href="https://discord.com/invite/CTSzXXwM5H">EgamesTournament<br/></a>
            Clip de présentation du tournoi : <a href="https://www.youtube.com/watch?v=Unu4B3LRWuo">Youtube</a>
            <image></image>
            <img src="./image/logo-egame.webp" alt="E-games by Nevers" />
            </text>
          </div>
        </body>
      </div>
    </>
  )
}

export default App
