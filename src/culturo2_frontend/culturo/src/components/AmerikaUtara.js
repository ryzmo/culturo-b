import React, { useEffect } from "react";

const AmerikaUtara = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data of North American countries
  const northAmericanCountries = [
    { country: "United States", culture: "Hollywood, Jazz, Tradisi Thanksgiving", image: require("./assets/benua/us.jpg") },
    { country: "Canada", culture: "Festival Musim Dingin, Tradisi First Nations, Maple Syrup", image: require("./assets/benua/canada.jpg") },
    { country: "Mexico", culture: "Hari Orang Mati, Musik Mariachi, Masakan Tradisional", image: require("./assets/benua/mexico.jpg") },
    { country: "Cuba", culture: "Musik Salsa, Sejarah Revolusi, Cerutu Kuba", image: require("./assets/benua/cuba.jpg") },
    { country: "Jamaica", culture: "Reggae, Tradisi Rastafari, Festival Musim Panas", image: require("./assets/benua/jamaica.jpg") },
    { country: "Haiti", culture: "Vodou, Seni Tradisional, Masakan Karibia", image: require("./assets/benua/haiti.jpg") },
    { country: "Panama", culture: "Terusan Panama, Festival Karnaval, Seni Anyaman Molas", image: require("./assets/benua/panama.jpg") },
    { country: "Guatemala", culture: "Peninggalan Maya, Festival Semana Santa, Tradisi Anyaman Tekstil", image: require("./assets/benua/guatemala.jpg") },
  ];

  return (
    <div className="font-poppins bg-white p-6 pt-24">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-center p-12 rounded-xl shadow-xl">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">Welcome to North America</h1>
        <p className="text-lg mt-4 opacity-90">
          Explore the rich cultures and traditions of the diverse North American continent.
        </p>
      </header>

      {/* North American Countries Section */}
      <section className="mt-10 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Countries with Rich Cultures in North America
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {northAmericanCountries.map((country, index) => (
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
              <h3 className="text-2xl text-indigo-600 font-semibold">{country.country}</h3>
              <p className="mt-4 text-gray-700">Culture: {country.culture}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Details Section */}
      <section className="mt-10 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center py-16 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold">Deep Dive into North American Culture</h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-3xl font-semibold">United States Culture</h3>
            <p className="mt-2">
              The United States is known for its global pop culture influence, including Hollywood, jazz music, and unique traditions like Thanksgiving.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Canadian Culture</h3>
            <p className="mt-2">
              Canada is celebrated for its winter festivals, First Nations heritage, and iconic maple syrup production.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Mexican Culture</h3>
            <p className="mt-2">
              Mexico is renowned for its vibrant traditions like the Day of the Dead, mariachi music, and flavorful cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-center py-6 rounded-xl shadow-xl">
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

export default AmerikaUtara;
