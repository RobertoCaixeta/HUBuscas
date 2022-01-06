import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css';
import MainPage from './pages/MainPage';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
