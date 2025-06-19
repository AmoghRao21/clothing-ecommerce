import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import WardrobeInterface from './pages/WardrobeInterface';
import ObsidianNavbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ObsidianNavbar />
      <WardrobeInterface />
    </>
  );
}

export default App;
