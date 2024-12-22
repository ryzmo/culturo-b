import React, { useEffect } from "react";

const Afrika = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data of African countries
  const africanCountries = [
    { country: "Nigeria", culture: "Seni Musik Afrobeats, Festival Durbar, Seni Kain Adire", image: require("./assets/benua/nigeria.jpg") },
    { country: "Kenya", culture: "Budaya Maasai, Safari dan Kehidupan Liar, Tarian Tradisional", image: require("./assets/benua/kenya.jpg") },
    { country: "Egypt", culture: "Sejarah Firaun, Piramida, Seni Hieroglif", image: require("./assets/benua/egypt.jpg") },
    { country: "South Africa", culture: "Nelson Mandela, Musik Jazz Cape, Festival Makanan Afrika Selatan", image: require("./assets/benua/shouthafrica.jpg") },
    { country: "Morocco", culture: "Arsitektur Bersejarah, Masakan Tagine, Seni Anyaman Karpet", image: require("./assets/benua/morocco.jpg") },
    { country: "Ethiopia", culture: "Budaya Injera, Sejarah Kekaisaran, Festival Timkat", image: require("./assets/benua/ethiopia.jpg") },
    { country: "Ghana", culture: "Kain Kente, Festival Panen Homowo, Tradisi Adat Asante", image: require("./assets/benua/ghana.jpg") },
    { country: "Tanzania", culture: "Kilimanjaro, Seni Ukiran Makonde, Festival Swahili", image: require("./assets/benua/tanzania.jpeg") },
  ];

  return (
    <div className="font-poppins bg-yellow-50 p-6 pt-24">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-yellow-600 to-orange-500 text-white text-center p-12 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">Selamat datang di Afrika</h1>
        <p className="text-lg mt-4 opacity-90">
          Jelajahi keindahan budaya dan tradisi dari benua Afrika yang kaya dan penuh warna.
        </p>
      </header>

      {/* African Countries Section */}
      <section className="mt-10 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Negara-Negara dengan Budaya Kaya di Afrika
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {africanCountries.map((country, index) => (
            <div
              key={index}
              className="w-full bg-white p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={country.image}
                alt={`Budaya dari ${country.country}`}
                className="w-full rounded-2xl mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl text-yellow-600 font-semibold">{country.country}</h3>
              <p className="mt-4 text-gray-700">Budaya: {country.culture}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Details Section */}
      <section className="mt-10 bg-gradient-to-r from-orange-400 to-red-500 text-white text-center py-16 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold">Lebih Dalam Tentang Budaya Afrika</h2>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-3xl font-semibold">Budaya Nigeria</h3>
            <p className="mt-2">
              Nigeria dikenal dengan musik Afrobeats yang mendunia, festival tradisional yang megah, dan seni kain Adire yang unik.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Budaya Mesir</h3>
            <p className="mt-2">
              Mesir memiliki warisan budaya yang luar biasa dari zaman Firaun, termasuk seni hieroglif dan arsitektur piramida.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Budaya Afrika Selatan</h3>
            <p className="mt-2">
              Afrika Selatan kaya dengan tradisi musik, seni, dan sejarah perjuangan kemerdekaan yang dipimpin oleh Nelson Mandela.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gradient-to-r from-yellow-600 to-orange-500 text-white text-center py-6 rounded-xl shadow-xl">
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

export default Afrika;
