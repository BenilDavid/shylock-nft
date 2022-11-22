import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import LevelsPage from './components/LevelsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/levels" element={<LevelsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
