import { useState, useEffect } from 'react';
import './App.css';
import logo from '../image/logov1.png';
import Header from './Header';
import Home from './Home';
import Info from './Info';
import Leaderboard from './Leaderboard';

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [page, setPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleInscrireClick = () => {
    setPage('infos');
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <div className="container-blur">
            <Header setPage={setPage} />
            <Home onInscrireClick={handleInscrireClick} />
          </div>
        );
        
      case 'infos':
        return (
          <div className='container-blur-info'>
            <Header setPage={setPage} />
            <Info />
          </div>
        );

      case 'classement':
        return (
          <div className="container-blur">
            <Header setPage={setPage} />
            <Leaderboard />
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