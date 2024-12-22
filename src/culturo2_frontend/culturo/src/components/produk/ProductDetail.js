import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Kerajinan Tangan Bali",
      description: "Kerajinan tangan tradisional Bali, cocok untuk dekorasi rumah.",
      price: "IDR 150,000",
      image: "product-image.jpg",
      care: "Bersihkan dengan kain lembut dan simpan di tempat kering untuk menjaga kualitas.",
      benefits: [
        "Menambah nilai estetika ruangan.",
        "Produk handmade dengan nilai seni tinggi.",
        "Mendukung pengrajin lokal Bali.",
      ],
    },
    {
      id: 2,
      name: "Songket Palembang",
      description: "Kain tenun tradisional Palembang dengan motif khas.",
      price: "IDR 350,000",
      image: "songket.jpg",
      care: "Hindari mencuci dengan mesin cuci, gunakan deterjen lembut, dan jemur di tempat teduh.",
      benefits: [
        "Cocok untuk pakaian formal dan adat.",
        "Motif khas Palembang yang elegan.",
        "Menggunakan bahan berkualitas tinggi.",
      ],
    },
    {
      id: 3,
      name: "Topeng Betawi",
      description: "Topeng tradisional Betawi untuk seni pertunjukan.",
      price: "IDR 200,000",
      image: "topeng.jpg",
      care: "Lap dengan kain lembab secara berkala, hindari paparan sinar matahari langsung.",
      benefits: [
        "Menambah dekorasi artistik di rumah.",
        "Melestarikan budaya Betawi.",
        "Cocok untuk koleksi seni.",
      ],
    },
  ];

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p className="text-center text-gray-700 mt-10">Product not found!</p>;

  const handleCheckout = () => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="container mx-auto px-4 py-16 pt-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gambar Produk */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-l-xl"
            />
            <div className="absolute bottom-4 left-4 bg-white/70 py-2 px-4 rounded-lg backdrop-blur-md shadow-md">
              <span className="text-gray-800 font-semibold text-lg">
                {product.price}
              </span>
            </div>
          </div>

          {/* Detail Produk */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
              <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
            </div>
            <div className="mt-6">
              <button
                onClick={handleCheckout}
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
              >
                Checkout
              </button>
              <button
                onClick={() => window.history.back()}
                className="w-full mt-4 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-400 transition duration-300"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Informasi Lainnya */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Informasi Lainnya</h2>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          {/* Cara Perawatan */}
          <h3 className="text-lg font-bold text-gray-700 mb-4">Cara Perawatan</h3>
          <p className="text-gray-600 leading-relaxed">{product.care}</p>

          {/* Manfaat Produk */}
          <h3 className="text-lg font-bold text-gray-700 mt-6 mb-4">Manfaat Produk</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
