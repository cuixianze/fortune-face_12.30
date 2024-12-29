import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { LotteryResultsPage } from './components/LotteryResults/LotteryResultsPage';
import { PrizeCalculatorPage } from './components/PrizeCalculator/PrizeCalculatorPage';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-50 via-yellow-100 to-amber-200">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lottery-results" element={<LotteryResultsPage />} />
            <Route path="/prize-calculator" element={<PrizeCalculatorPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}