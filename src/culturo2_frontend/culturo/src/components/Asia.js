import React, { useEffect } from "react";

const Asia = () => {
  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data negara-negara di Asia
  const asianCountries = [
    { country: "China", culture: "Seni Kaligrafi, Festival Musim Semi, Seni Bela Diri", image: require("./assets/benua/china.jpg") },
    { country: "India", culture: "Agama-agama Besar, Festival Diwali dan Holi, Seni Musik dan Tari", image: require("./assets/benua/india.jpg") },
    { country: "Japan", culture: "Kimono, Teh, Seni Bela Diri, Festival Musim Semi", image: require("./assets/benua/japan.jpg") },
    { country: "Indonesia", culture: "Seni Batik, Tari Tradisional, Kebudayaan Bali dan Jawa", image: require("./assets/benua/indonesia.jpg") },
    { country: "Thailand", culture: "Wat Phra, Festival Songkran, Seni Masakan", image: require("./assets/benua/thailand.jpg") },
    { country: "Malaysia", culture: "Batik, Makanan Tradisional, Kebudayaan Melayu", image: require("./assets/benua/malaysia.jpg") },
  ];

  return (
    <div className="font-poppins bg-gray-50 p-6 pt-24">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-400 to-teal-500 text-white text-center p-12 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">Selamat datang di Asia</h1>
        <p className="text-lg mt-4 opacity-80">
          Eksplorasi budaya dan tradisi dari benua Asia yang kaya dan beragam.
        </p>
      </header>

      {/* Asian Countries Section */}
      <section className="mt-10 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Negara-Negara dengan Budaya Kaya di Asia
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-12">
          {asianCountries.map((country, index) => (
            <div
              key={index}
              className="w-full max-w-xs bg-white p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={country.image}
                alt={`Budaya dari ${country.country}`}
                className="w-full rounded-2xl mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl text-green-600 font-semibold">{country.country}</h3>
              <p className="mt-4 text-gray-700">Budaya: {country.culture}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Details Section */}
      <section className="mt-10 bg-gradient-to-r from-teal-400 to-teal-600 text-white text-center py-16 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold">Lebih Dalam Tentang Budaya Asia</h2>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-3xl font-semibold">Budaya Tiongkok</h3>
            <p className="mt-2">
              Tiongkok memiliki salah satu kebudayaan tertua dan paling berpengaruh di dunia.
              Dari seni kaligrafi, arsitektur, hingga festival-festival tradisional, budaya
              Tiongkok sangat kaya.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Budaya Jepang</h3>
            <p className="mt-2">
              Jepang dikenal dengan budaya yang menggabungkan teknologi modern dan tradisi
              kuno, seperti upacara minum teh, seni bela diri, dan festival musim semi.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Budaya India</h3>
            <p className="mt-2">
              India terkenal dengan agama-agama besar, tradisi musik, tari, dan festival
              seperti Diwali dan Holi.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gradient-to-r from-teal-500 to-green-400 text-white text-center py-6 rounded-xl shadow-xl">
        <p>&copy; 2024 Culturo. Semua Hak Dilindungi.</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="text-lg opacity-75 hover:opacity-100">
            Instagram
          </a>
          <a href="#" className="text-lg opacity-75 hover:opacity-100">
            Facebook
          </a>
          <a href="#" className="text-lg opacity-75 hover:opacity-100">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Asia;
