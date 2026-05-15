import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp'; // Add this
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import Contact from './pages/Contact';
import WorkshopPage from './pages/Workshop';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 font-sans transition-colors duration-300">
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workshop" element={<WorkshopPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp /> {/* Added here */}
      </div>
    </Router>
  );
}