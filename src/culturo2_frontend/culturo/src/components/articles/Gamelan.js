import React from "react";

const Gamelan = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
        Gamelan - Irama Musik yang Menggetarkan 
        </h1>
        <p className="text-gray-600 mt-2">
        Sesorang pemain Gamelan beserta instrumennya – Tampak belakang 'Pexels.com/Maxime 
          LEVREL' 
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-lg mb-8">
        <img
          src="/assets/gamelan.jpg"
          alt="Batik"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed space-y-6">
        <p className="text-justify">
        Gamelan adalah ansambel musik tradisional yang berasal dari Jawa dan Bali yang terdiri dari 
        berbagai alat musik seperti gong, saron, dan kendang. Musik gamelan dikenal dengan 
        iramanya yang harmonis dan memiliki kedalaman emosi yang mampu menyentuh jiwa. Setiap 
        alat musik dalam gamelan memiliki peran penting untuk menciptakan keselarasan dalam setiap 
        pertunjukan. Gamelan sering kali digunakan dalam acara adat atau upacara keagamaan, serta 
        pertunjukan seni yang menggabungkan musik dan tari. 
        </p>

        <p className="text-justify">
        Hingga kini, musik gamelan tidak hanya dinikmati oleh masyarakat Indonesia, tetapi juga telah 
        mendapatkan perhatian internasional. Banyak festival musik dunia yang menyajikan 
        pertunjukan gamelan, memperkenalkan kekayaan budaya Indonesia kepada penonton global. 
        </p>
      </div>
    </div>
  );
};

export default Gamelan;
