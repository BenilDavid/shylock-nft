import React, { useState } from "react";
import './App.scss';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import LevelsPage from './components/LevelsPage';
import PrisonGatePage from './components/PrisonGatePage';
import PrisonPage from './components/PrisonPage';

function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div className="App">
      <BrowserRouter>
      <Header isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/levels" element={<LevelsPage />} />
            <Route exact path="/prison-gate" element={<PrisonGatePage />} />
            <Route exact path="/prison" element={<PrisonPage />} />
          </Routes>
        </BrowserRouter>
      </div>
     
    </>
  );
}

export default App;
