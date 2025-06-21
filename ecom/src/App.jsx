import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import WardrobeInterface from './pages/WardrobeInterface';
import ObsidianNavbar from './components/Navbar';
import ChooseYourVibe from './pages/GenreSection';
import TopSellers from './pages/Top';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ObsidianNavbar />
      <WardrobeInterface />
      <ChooseYourVibe />
      <TopSellers />
    </>
  );
}

export default App;
