import React from 'react';
import { Headphones } from 'lucide-react';

const IntroSection = () => {
  return (
    <section id="intro" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Memperkenalkan
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Headphones className="h-12 w-12 text-cyan-400" />
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Headset Realitas Terintegrasi Penuh
            </h3>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Jembatan Menuju Dunia Imajinasi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <p className="text-gray-300 text-lg leading-relaxed">
                Perangkat yang Anda lihat ini, dengan garis-garis bersih dan kesan futuristiknya, bukan sekadar gadget biasa. 
                Ini adalah <span className="text-cyan-400 font-semibold">Headset Realitas Terintegrasi Penuh</span>, sebuah perangkat 
                inovatif yang dirancang untuk menjadi jembatan antara pikiran Anda dan dunia digital.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed">
                Secara garis besar, alat ini adalah langkah maju menuju bagaimana kita berinteraksi dengan teknologi di masa depan. 
                Teknologi yang mengubah cara kita berimajinasi dan berkreasi.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-white/10">
                <img 
                  src="/Untitled design (5).png" 
                  alt="VR Headset Model" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;