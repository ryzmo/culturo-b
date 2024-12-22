import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHistory } from "react-icons/fa";

const Marketplace = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Blok Singa",
      description: "Simbol budaya tradisional cina",
      price: "IDR 49,500",
      image: require("./assets/mart/1.png"),
    },
    {
      id: 2,
      name: "Kaos lengan panjang jawa",
      description: "Jawa wayang anoman",
      price: "IDR 105,000",
      image: require("./assets/mart/2.png"),
    },
    {
      id: 3,
      name: "Baju Prewedding",
      description: "Budaya cina",
      price: "IDR 6,200,000",
      image: require("./assets/mart/3.png"),
    },
    {
      id: 4,
      name: "Kartu pos adat budaya",
      description: "Gamelan",
      price: "IDR 4,400",
      image: require("./assets/mart/4.png"),
    },
    {
      id: 5,
      name: "Aksesoris kepala toraja",
      description: "Lambing untuk laki=laki",
      price: "IDR 89,000",
      image: require("./assets/mart/5.png"),
    },
    {
      id: 6,
      name: "Wayang Kulit Punokawan 30 cm 1 set",
      description: "Harga paket 1 set Punokawan lebih murah!",
      price: "IDR 99,900",
      image: require("./assets/mart/6.png"),
    },
    {
      id: 7,
      name: "GAMIS BATIK WANITA POLLYMICRO",
      description: "TBATIK PEKALONGAN",
      price: "IDR 200,000",
      image: require("./assets/mart/7.png"),
    },
    {
      id: 8,
      name: "Aksesoris kostum dayak",
      description: "Hiasan ini biasanya dipakai untuk pelengkap aksesoris pakaian adat dayak. bisa divariasikan untuk dipakai di dada atau di pinggang.",
      price: "IDR 200,000",
      image: require("./assets/mart/8.png"),
    },
  ];

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleBuyNow = (product) => {
    navigate("/checkout", { state: { product } }); // Arahkan ke halaman checkout
  };

  const handleViewCart = () => {
    navigate("/cart", { state: { cart } });
  };

  const handleViewHistory = () => {
    navigate("/history");
  };

  return (
    <div className="relative container mx-auto px-4 py-16 pt-24 bg-gradient-to-r from-blue-50 to-green-100">
      {/* Tombol Keranjang dan Riwayat Pesanan */}
      <div className="absolute top-30 right-6 flex space-x-6">
        <button
          className="relative text-blue-600 hover:text-blue-700 transition duration-300"
          onClick={handleViewCart}
        >
          <FaShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </button>
        <button
          className="text-green-600 hover:text-green-700 transition duration-300"
          onClick={handleViewHistory}
        >
          <FaHistory size={28} />
        </button>
      </div>

      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 animate-fadeIn">
        Marketplace Budaya Dunia
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 text-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="text-base font-bold text-gray-800">{product.name}</h3>
              <p className="mt-1 text-gray-600 text-sm">{product.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-base font-semibold text-gray-900">
                  {product.price}
                </span>
                <div className="flex items-center space-x-3">
                  <button
                    className="text-gray-800 hover:text-gray-600 transition duration-300"
                    onClick={() => handleAddToCart(product)}
                    title="Tambah ke Keranjang"
                  >
                    <FaShoppingCart size={20} />
                  </button>
                  <button
                    className="bg-green-500 text-white py-1 px-3 rounded-full hover:bg-green-600 transition-all duration-300 text-sm"
                    onClick={() => handleBuyNow(product)}
                  >
                    Beli
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
