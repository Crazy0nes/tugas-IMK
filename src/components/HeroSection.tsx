import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Masa Depan
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Teknologi Interaktif
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Jelajahi inovasi revolusioner yang akan mengubah cara kita berinteraksi dengan dunia digital
        </p>
        
        <div className="flex justify-center animate-bounce">
          <ArrowDown className="h-8 w-8 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;