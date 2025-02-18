import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GeneratorPage from './pages/GeneratorPage';
import ManagerPage from './pages/ManagerPage';
import CheckerPage from './pages/CheckerPage';

const App = () => {
  return (
    <BrowserRouter basename="/LockHive"> {/* ✅ Sets correct base URL */}
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 pt-20 flex-grow"> {/* ✅ Prevents navbar overlap */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generator" element={<GeneratorPage />} />
            <Route path="/manager" element={<ManagerPage />} />
            <Route path="/checker" element={<CheckerPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
