//2. App Component (App.jsx)
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GeneratorPage from './pages/GeneratorPage';
import ManagerPage from './pages/ManagerPage';
import CheckerPage from './pages/CheckerPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generator" element={<GeneratorPage />} />
            <Route path="/manager" element={<ManagerPage />} />
            <Route path="/checker" element={<CheckerPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;