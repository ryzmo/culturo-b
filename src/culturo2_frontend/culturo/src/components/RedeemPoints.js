import React from "react";

const RedeemPoints = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Tukar Poin Anda</h1>
      <p className="text-lg text-gray-600 mb-6">
        Pilih hadiah menarik yang bisa Anda tukarkan dengan poin budaya Anda.
      </p>

      {/* Daftar Hadiah */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold text-gray-800">Diskon 10%</h2>
          <p className="text-gray-600">Tukar dengan 50 poin.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Tukar
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold text-gray-800">NFT Eksklusif</h2>
          <p className="text-gray-600">Tukar dengan 100 poin.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Tukar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedeemPoints;
