import React from "react";

const Kecak = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
        Tari Kecak – Tari Api
        </h1>
        <p className="text-gray-600 mt-2">
        Potret Tari Kecak – Bali (Pexels.com/el jusuf)
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-lg mb-8">
        <img
          src="/assets/kecak.jpg"
          alt="Batik"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed space-y-6">
        <p className="text-justify">
        Tari Kecak menjadi satu tarian ikonik dari Bali yang telah dikenal secara internasional sebagai salah satu simbol budaya Indonesia yang unik. Tarian ini pertama kali dikembangkan pada tahun 1930-an oleh Wayan Limbak bersama seniman Jerman Walter Spies, dengan inspirasi dari ritual Sanghyang tradisional yang melibatkan komunikasi dengan roh. Tari Kecak mengisahkan epos Ramayana, khususnya perjuangan Rama dalam menyelamatkan istrinya, Dewi Sita, dari penculikan Rahwana, raja raksasa dari Alengka.
        </p>

        <p className="text-justify">
          Meski belum secara resmi diakui sebagai warisan budaya tak benda oleh UNESCO, Tari Kecak memiliki potensi besar untuk mendapatkan pengakuan tersebut di masa depan karena keunikannya yang menggabungkan gerak tari, cerita epik, dan harmoni suara manusia. Pertunjukan ini menampilkan puluhan penari laki-laki yang duduk melingkar sambil meneriakkan "cak-cak-cak" secara ritmis tanpa iringan alat musik, menciptakan suasana dramatis yang menegangkan dan memukau. Pertunjukan Kecak di Bali sering ditampilkan di beberapa tempat yang populer dan dianggap suci, seperti di Pura Uluwatu atau di tempat wisata Garuda Wisnu Kencana saat matahari terbenam. Para penari menyuguhkan Tari Kecak ketika matahari hendak tenggelam, mereka menganggap unsur tersebut semakin akan menambah keindahan dan daya tarik Tari Kecak bagi wisatawan lokal maupun mancanegara.
        </p>
      </div>
    </div>
  );
};

export default Kecak;
