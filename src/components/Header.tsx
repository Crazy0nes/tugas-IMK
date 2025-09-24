import React, { useState } from 'react';
import { Menu, X, Settings, Brain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/Untitled design (6).png" 
              alt="Futura Gearia Logo" 
              className="h-8 w-8"
            />
            <span className="text-white text-xl font-bold">Futura Gearia</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#intro" className="text-gray-300 hover:text-cyan-400 transition-colors">Pengenalan</a>
            <a href="#fungsi" className="text-gray-300 hover:text-cyan-400 transition-colors">Fungsi Inti</a>
            <a href="#cara-kerja" className="text-gray-300 hover:text-cyan-400 transition-colors">Cara Kerja</a>
            <a href="#manfaat" className="text-gray-300 hover:text-cyan-400 transition-colors">Manfaat</a>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#intro" className="text-gray-300 hover:text-cyan-400 transition-colors py-2">Pengenalan</a>
              <a href="#fungsi" className="text-gray-300 hover:text-cyan-400 transition-colors py-2">Fungsi Inti</a>
              <a href="#cara-kerja" className="text-gray-300 hover:text-cyan-400 transition-colors py-2">Cara Kerja</a>
              <a href="#manfaat" className="text-gray-300 hover:text-cyan-400 transition-colors py-2">Manfaat</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;