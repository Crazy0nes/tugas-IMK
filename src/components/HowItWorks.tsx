import React from 'react';
import { Cpu, Monitor, Waves, Zap } from 'lucide-react';

const HowItWorks = () => {
  const technologies = [
    {
      icon: Waves,
      title: "Antarmuka Neurosensorik",
      description: "Sensor presisi mendengarkan pola gelombang listrik dan aktivitas saraf yang unik saat Anda berpikir atau membayangkan sesuatu.",
      color: "cyan"
    },
    {
      icon: Monitor,
      title: "Display Realitas Campuran",
      description: "Visor beresolusi tinggi yang menampilkan informasi digital di atas pemandangan nyata atau mengubah pandangan menjadi dunia virtual.",
      color: "purple"
    },
    {
      icon: Cpu,
      title: "Unit Pemrosesan AI",
      description: "Kecerdasan buatan yang menerjemahkan sinyal otak kompleks menjadi gambar atau video yang koheren.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Pembelajaran Adaptif",
      description: "Semakin sering digunakan, semakin baik AI memahami gaya dan cara Anda berpikir.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/30 text-cyan-400",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-400/30 text-purple-400",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-400/30 text-blue-400",
      green: "from-green-500/20 to-green-600/20 border-green-400/30 text-green-400"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <section id="cara-kerja" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bagaimana Cara Kerjanya?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Di balik kemampuannya mewujudkan imajinasi, perangkat ini bekerja melalui kombinasi teknologi mutakhir
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${getColorClasses(tech.color).split(' ')[0]} ${getColorClasses(tech.color).split(' ')[1]} backdrop-blur-sm rounded-2xl p-8 border ${getColorClasses(tech.color).split(' ')[2]} hover:scale-105 transition-all duration-300`}>
                <tech.icon className={`h-16 w-16 ${getColorClasses(tech.color).split(' ')[3]} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-white font-bold text-xl mb-4">{tech.title}</h3>
                <p className="text-gray-300 leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Bukan Sihir, Melainkan Ilmu Pengetahuan</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Teknologi ini didasarkan pada pemahaman mendalam tentang bagaimana otak kita bekerja dan cara menginterpretasikan sinyal neural menjadi data digital yang dapat diproses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 text-2xl font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Deteksi Neural</h4>
              <p className="text-gray-400 text-sm">Sensor menangkap sinyal otak dengan presisi tinggi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 text-2xl font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Pemrosesan AI</h4>
              <p className="text-gray-400 text-sm">Algoritma canggih menerjemahkan sinyal menjadi visual</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-2xl font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Rendering</h4>
              <p className="text-gray-400 text-sm">Hasil ditampilkan dalam realitas campuran</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;