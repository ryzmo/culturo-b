import React, { useEffect } from "react";

const AmerikaSelatan = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data of South American countries
  const southAmericanCountries = [
    { country: "Brazil", culture: "Samba, Karnaval Rio, Hutan Amazon", image: require("./assets/benua/brazil.jpg") },
    { country: "Argentina", culture: "Tango, Masakan Asado, Seni Futbol", image: require("./assets/benua/argentina.jpg") },
    { country: "Chile", culture: "Puisi Pablo Neruda, Seni Rupa, Anggur Tradisional", image: require("./assets/benua/chile.jpg") },
    { country: "Peru", culture: "Machu Picchu, Tradisi Inca, Masakan Ceviche", image: require("./assets/benua/peru.jpg") },
    { country: "Colombia", culture: "Seni Musik Cumbia, Kopi Kolombia, Festival Bunga", image: require("./assets/benua/colombia.jpg") },
    { country: "Venezuela", culture: "Tarian Joropo, Angel Falls, Arepas Tradisional", image: require("./assets/benua/venezuela.jpg") },
    { country: "Ecuador", culture: "Pulau Galapagos, Tradisi Andes, Seni Anyaman", image: require("./assets/benua/ecuador.jpg") },
    { country: "Uruguay", culture: "Tradisi Mate, Musik Candombe, Pantai Punta del Este", image: require("./assets/benua/uruguay.jpg") },
  ];

  return (
    <div className="font-poppins bg-white p-6 pt-24">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center p-12 rounded-xl shadow-xl">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">Welcome to South America</h1>
        <p className="text-lg mt-4 opacity-90">
          Discover the vibrant cultures and traditions of the South American continent.
        </p>
      </header>

      {/* South American Countries Section */}
      <section className="mt-10 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Countries with Rich Cultures in South America
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {southAmericanCountries.map((country, index) => (
            <div
              key={index}
              className="w-full bg-gray-100 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={country.image}
                alt={`Culture of ${country.country}`}
                className="w-full h-40 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl text-red-600 font-semibold">{country.country}</h3>
              <p className="mt-4 text-gray-700">Culture: {country.culture}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Details Section */}
      <section className="mt-10 bg-gradient-to-r from-yellow-500 to-red-600 text-white text-center py-16 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold">Deep Dive into South American Culture</h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-3xl font-semibold">Brazilian Culture</h3>
            <p className="mt-2">
              Brazil is celebrated for its samba music, the vibrant Rio Carnival, and the stunning Amazon rainforest.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Argentinian Culture</h3>
            <p className="mt-2">
              Argentina is renowned for its passionate tango dance, flavorful asado cuisine, and love for football.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Peruvian Culture</h3>
            <p className="mt-2">
              Peru boasts the historic Machu Picchu, rich Inca traditions, and delicious ceviche dishes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center py-6 rounded-xl shadow-xl">
        <p>&copy; 2024 Culturo. All Rights Reserved.</p>
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

export default AmerikaSelatan;
