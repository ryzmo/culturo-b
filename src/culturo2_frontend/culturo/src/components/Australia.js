import React, { useEffect } from "react";

const Australia = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data of Australian features
  const australianFeatures = [
    { country: "Australia", culture: "Sydney Opera House, Aboriginal Art, Great Barrier Reef", image: require("./assets/benua/australia.jpg") },
    { country: "New Zealand", culture: "Maori Culture, Hobbiton, Adventure Sports", image: require("./assets/benua/newzealand.jpg") },
    { country: "Fiji", culture: "Tropical Islands, Traditional Kava Ceremonies, Coral Reefs", image: require("./assets/benua/fiji.jpg") },
    { country: "Papua New Guinea", culture: "Diverse Tribes, Huli Wigmen, Traditional Crafts", image: require("./assets/benua/papuanew.jpg") },
  ];

  return (
    <div className="font-poppins bg-blue-50 p-6 pt-24">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white text-center p-12 rounded-xl shadow-xl">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">Welcome to Australia</h1>
        <p className="text-lg mt-4 opacity-90">
          Discover the unique landscapes, cultures, and traditions of Australia and Oceania.
        </p>
      </header>

      {/* Australian Features Section */}
      <section className="mt-10 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Highlights of Australia and Oceania
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {australianFeatures.map((feature, index) => (
            <div
              key={index}
              className="w-full bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={feature.image}
                alt={`Culture of ${feature.country}`}
                className="w-full h-40 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl text-blue-600 font-semibold">{feature.country}</h3>
              <p className="mt-4 text-gray-700">Culture: {feature.culture}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Details Section */}
      <section className="mt-10 bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-16 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold">Deep Dive into Australian Culture</h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-3xl font-semibold">Australian Culture</h3>
            <p className="mt-2">
              Australia is famous for its natural wonders, iconic landmarks like the Sydney Opera House, and rich Aboriginal heritage.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">New Zealand Culture</h3>
            <p className="mt-2">
              New Zealand offers a vibrant Maori culture, breathtaking landscapes, and adventure-filled experiences.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Fijian Culture</h3>
            <p className="mt-2">
              Fiji is known for its warm hospitality, tropical islands, and unique cultural ceremonies like Kava drinking.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-6 rounded-xl shadow-xl">
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

export default Australia;
