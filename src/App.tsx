import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import CoreFunction from './components/CoreFunction';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <HeroSection />
      <IntroSection />
      <CoreFunction />
      <HowItWorks />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;