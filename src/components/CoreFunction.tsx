import React from 'react';
import { Brain, Eye, Sparkles, Zap } from 'lucide-react';

const CoreFunction = () => {
  const features = [
    {
      icon: Brain,
      title: "Dari Pikiran ke Visual",
      description: "Sensor canggih membaca dan menafsirkan pola aktivitas otak Anda ketika membayangkan sesuatu."
    },
    {
      icon: Sparkles,
      title: "AI Terintegrasi",
      description: "Kecerdasan buatan memproses data otak dan mengubahnya menjadi visualisasi yang koheren."
    },
    {
      icon: Eye,
      title: "Proyeksi Realtime",
      description: "Hasil diproyeksikan ke visor transparan sebagai AR atau VR yang imersif."
    },
    {
      icon: Zap,
      title: "Interaksi Langsung",
      description: "Berinteraksi dengan visualisasi yang diciptakan dari imajinasi Anda sendiri."
    }
  ];

  return (
    <section id="fungsi" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fungsi Inti
          </h2>
          <p className="text-2xl text-cyan-400 mb-4">Membentuk Visual dari Imajinasi</p>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Salah satu kemampuan paling memukau dari perangkat ini adalah fungsinya sebagai jendela ke dalam pikiran Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <feature.icon className="h-12 w-12 text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors" />
                <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl p-8 border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Bagaimana Ini Bekerja?</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/5 rounded-2xl p-6 text-left">
                <h4 className="text-cyan-400 font-semibold text-lg mb-3">📧 Bayangkan sebuah gambar</h4>
                <p className="text-gray-300">Anda memikirkan sebuah pemandangan indah, wajah seseorang, atau adegan bergerak di benak Anda.</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-left">
                <h4 className="text-purple-400 font-semibold text-lg mb-3">🧠 Sensor membaca pikiran</h4>
                <p className="text-gray-300">Sensor presisi menangkap pola aktivitas otak dan memahami "bahasa" pikiran Anda.</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-left">
                <h4 className="text-cyan-400 font-semibold text-lg mb-3">✨ AI menciptakan visual</h4>
                <p className="text-gray-300">Kecerdasan buatan mengolah data dan membentuk visualisasi dalam bentuk foto atau video.</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-left">
                <h4 className="text-purple-400 font-semibold text-lg mb-3">👁️ Lihat hasil imajinasi</h4>
                <p className="text-gray-300">Hasilnya ditampilkan di visor transparan, siap untuk Anda lihat dan berinteraksi dengannya.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFunction;