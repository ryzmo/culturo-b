import React, { useEffect } from "react";

const Eropa = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data of European countries
  const europeanCountries = [
    { country: "France", culture: "Eiffel Tower, French Cuisine, Art and Fashion", image: require("./assets/benua/france.jpg") },
    { country: "Italy", culture: "Colosseum, Renaissance Art, Italian Cuisine", image: require("./assets/benua/italia.jpg") },
    { country: "Germany", culture: "Beer Gardens, Oktoberfest, Historical Architecture", image: require("./assets/benua/germany.jpeg") },
    { country: "Spain", culture: "Flamenco, Sagrada Familia, Tapas", image: require("./assets/benua/spain.jpg") },
    { country: "Greece", culture: "Ancient Ruins, Mediterranean Cuisine, Mythology", image: require("./assets/benua/greece.jpg") },
    { country: "United Kingdom", culture: "British Monarchy, Shakespeare, Afternoon Tea", image: require("./assets/benua/uk.jpg") },
    { country: "Netherlands", culture: "Windmills, Tulips, Van Gogh Museum", image: require("./assets/benua/netherland.jpg") },
    { country: "Switzerland", culture: "Swiss Alps, Chocolate, Watches", image: require("./assets/benua/switzerland.jpg") },
  ];

  return (
    <div className="font-poppins bg-gray-50 p-6 pt-24">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center p-12 rounded-xl shadow-xl">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">Welcome to Europe</h1>
        <p className="text-lg mt-4 opacity-90">
          Discover the rich history, culture, and traditions of the European continent.
        </p>
      </header>

      {/* European Countries Section */}
      <section className="mt-10 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Countries with Rich Cultures in Europe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {europeanCountries.map((country, index) => (
            <div
              key={index}
              className="w-full bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={country.image}
                alt={`Culture of ${country.country}`}
                className="w-full h-40 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl text-purple-600 font-semibold">{country.country}</h3>
              <p className="mt-4 text-gray-700">Culture: {country.culture}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Details Section */}
      <section className="mt-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-16 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold">Deep Dive into European Culture</h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-3xl font-semibold">French Culture</h3>
            <p className="mt-2">
              France is renowned for its iconic landmarks like the Eiffel Tower, exquisite cuisine, and contributions to art and fashion.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Italian Culture</h3>
            <p className="mt-2">
              Italy is celebrated for its rich history, Renaissance art, and world-famous cuisine such as pasta and pizza.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Greek Culture</h3>
            <p className="mt-2">
              Greece is known for its ancient ruins, mythology, and delicious Mediterranean dishes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-6 rounded-xl shadow-xl">
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

export default Eropa;
