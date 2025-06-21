import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ObsidianNavbar from './components/Navbar';
import WardrobeInterface from './pages/WardrobeInterface';
import ChooseYourVibe from './pages/GenreSection';
import TopSellers from './pages/Top';
import FitFeed from './pages/FitFeed';
import DarkELKChatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <ObsidianNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WardrobeInterface />
              <ChooseYourVibe />
              <TopSellers />
              <DarkELKChatbot />
            </>
          }
        />
        <Route path="/fitfeed" element={<FitFeed />} />
        <Route path="*" element={<div className="text-white p-10">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
