import React from 'react';
import { Palette, MessageCircle, GraduationCap, Heart, Gamepad2, Infinity } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Palette,
      title: "Ekspresi Kreatif Tanpa Batas",
      description: "Para seniman, desainer, atau siapa pun dengan ide visual dapat langsung memunculkan kreasi mereka tanpa alat desain rumit.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: MessageCircle,
      title: "Komunikasi yang Lebih Dalam",
      description: "Berbagi ide atau pengalaman visual secara langsung dari pikiran Anda, mengurangi hambatan bahasa dan interpretasi.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: GraduationCap,
      title: "Edukasi Revolusioner",
      description: "Mempelajari konsep kompleks dengan memvisualisasikannya secara instan, atau berlatih dalam simulasi yang disesuaikan.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Bantuan untuk Disabilitas",
      description: "Bagi mereka dengan kesulitan berbicara atau bergerak, perangkat ini menjadi suara dan tangan mereka untuk berkomunikasi.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Gamepad2,
      title: "Hiburan Imersif",
      description: "Game dan pengalaman VR menjadi lebih personal dan responsif terhadap kondisi mental dan imajinasi Anda.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Infinity,
      title: "Masa Depan Teknologi",
      description: "Teknologi menjadi perpanjangan dari diri kita, mengubah cara kita berinteraksi dengan dunia digital.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="manfaat" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Manfaat yang Menjanjikan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Potensi manfaat dari perangkat semacam ini sangat luas dan transformatif
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-white/10 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Era Baru Teknologi</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Dengan perangkat seperti ini, batas antara pikiran dan realitas digital semakin menipis, 
            membuka era baru di mana imajinasi kita bukan lagi sekadar khayalan, melainkan cetak biru 
            untuk apa yang bisa kita ciptakan dan alami.
          </p>
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 p-1 rounded-2xl">
            <div className="bg-slate-900 px-8 py-4 rounded-2xl">
              <p className="text-white font-semibold text-lg">
                Ini adalah lompatan besar menuju masa depan di mana teknologi benar-benar menjadi perpanjangan dari diri kita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;