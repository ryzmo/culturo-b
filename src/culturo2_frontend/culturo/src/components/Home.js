import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const countries = [
    { name: "Asia", path: "/asia" },
    { name: "Afrika", path: "/afrika" },
    { name: "Amerika Utara", path: "/amerikautara" },
    { name: "Amerika Selatan", path: "/amerikaselatan" },
    { name: "Antartika", path: "/antartika" },
    { name: "Eropa", path: "/eropa" },
    { name: "Australia", path: "/australia" },
  ];

  const handleCountryChange = (countryPath) => {
    navigate(countryPath);
    setIsDropdownOpen(false); // Menutup dropdown setelah memilih
  };

  useEffect(() => {
    // Tambahkan delay kecil saat masuk halaman
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Section Latar Belakang Full Screen */}
      <div className="relative min-h-screen bg-pattern bg-cover bg-no-repeat bg-center">
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 animate-fade-in-up">
            Jelajahi Budaya Dunia
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Pilih benua untuk memulai eksplorasi keindahan budaya lokal dan tradisi dunia.
          </p>
          {/* Dropdown Pilihan Negara */}
          <div className="relative inline-block text-center">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
            >
              {isDropdownOpen ? "Tutup Daftar" : "Pilih Benua"}
            </button>
            {isDropdownOpen && (
              <ul
                className="absolute mt-2 w-48 bg-white/30 backdrop-blur-md shadow-lg rounded-md p-2 space-y-2 left-1/2 transform -translate-x-1/2 max-h-48 overflow-y-auto scrollbar-hide"
              >
                {countries.map((country) => (
                  <li
                    key={country.name}
                    onClick={() => handleCountryChange(country.path)}
                    className="cursor-pointer py-2 px-3 text-gray-800 hover:bg-yellow-100 hover:text-yellow-600 transition text-center"
                  >
                    {country.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Footer di Bawah Pattern */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-2">
            &copy; 2024 Culturo. Semua hak cipta dilindungi undang-undang.
          </p>
          <p className="text-sm">
            <a href="#" className="hover:underline">
              Tentang Kami
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privasi
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Syarat & Ketentuan
            </a>
          </p>
          <div className="mt-3">
            <a href="#" className="mx-2 text-xl hover:text-yellow-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="mx-2 text-xl hover:text-yellow-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="mx-2 text-xl hover:text-yellow-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="mx-2 text-xl hover:text-yellow-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
