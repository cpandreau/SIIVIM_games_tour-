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
          <button>Accueil</button>
          <button>Infos</button>
          <button>Inscription</button>
          <button>Equipe</button>
          <button>Classement</button>
        </header>
        <div>
        </div>
      </div>
    </>
  )
}

export default App
