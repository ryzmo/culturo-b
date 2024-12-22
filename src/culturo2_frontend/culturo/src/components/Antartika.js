import React, { useEffect } from "react";

const Antarctika = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data of Antarctica exploration and wildlife
  const antarcticaData = [
    { title: "Penguins", description: "Home to Emperor Penguins and Adélie Penguins.", image: require("./assets/benua/penguins.jpg") },
    { title: "Icebergs", description: "Massive ice formations with stunning shapes and sizes.", image: require("./assets/benua/icebergs.jpg") },
    { title: "Research Stations", description: "Scientific research hubs like McMurdo and Amundsen-Scott Station.", image: require("./assets/benua/research.jpg") },
    { title: "Auroras", description: "Breathtaking southern lights illuminate the Antarctic sky.", image: require("./assets/benua/auroras.jpg") },
  ];

  return (
    <div className="font-poppins bg-blue-50 p-6 pt-24">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center p-12 rounded-xl shadow-xl">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">Welcome to Antarctica</h1>
        <p className="text-lg mt-4 opacity-90">
          Explore the pristine wilderness and unique features of the Earth's southernmost continent.
        </p>
      </header>

      {/* Antarctica Features Section */}
      <section className="mt-10 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Wonders of Antarctica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {antarcticaData.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl text-blue-600 font-semibold">{item.title}</h3>
              <p className="mt-4 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-16 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold">Explore Antarctica's Unique Features</h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-3xl font-semibold">Wildlife</h3>
            <p className="mt-2">
              Antarctica is home to diverse wildlife including penguins, seals, and seabirds, thriving in extreme conditions.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Glaciers and Icebergs</h3>
            <p className="mt-2">
              The continent boasts massive glaciers and intricate iceberg formations that captivate explorers.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Scientific Discovery</h3>
            <p className="mt-2">
              Antarctica serves as a crucial hub for studying climate change, astronomy, and marine biology.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-6 rounded-xl shadow-xl">
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

export default Antarctika;
