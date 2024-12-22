import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Challenges = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: "Baca Artikel Budaya",
      description: "Baca 3 artikel budaya hari ini.",
      type: "Harian",
      points: 10,
      completed: false,
    },
    {
      id: 2,
      title: "Unggah Konten Budaya",
      description: "Unggah foto atau video karya seni tradisional.",
      type: "Mingguan",
      points: 50,
      completed: false,
    },
    {
      id: 3,
      title: "Beli Produk Budaya",
      description: "Beli 1 produk budaya di marketplace.",
      type: "Harian",
      points: 20,
      completed: true,
    },
  ]);

  useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }, []);

  const totalPoints = challenges.reduce(
    (acc, challenge) => (challenge.completed ? acc + challenge.points : acc),
    0
  );

  const completeChallenge = (id) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) =>
        challenge.id === id ? { ...challenge, completed: true } : challenge
      )
    );
  };

  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen bg-gray-50 p-6 pt-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Tantangan Budaya
        </h1>
        <p className="text-lg text-gray-600">
          Selesaikan tantangan harian dan mingguan untuk mengumpulkan poin budaya!
        </p>
      </div>

      {/* Daftar Tantangan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 ${
              challenge.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <h2 className="text-xl font-bold text-gray-800">{challenge.title}</h2>
            <p className="text-gray-600">{challenge.description}</p>
            <p className="text-sm text-gray-500 mt-2">Tipe: {challenge.type}</p>
            <p className="text-sm text-gray-500">Poin: {challenge.points}</p>
            {challenge.completed ? (
              <p className="text-green-600 font-semibold mt-4">Terselesaikan ✔️</p>
            ) : (
              <button
                onClick={() => completeChallenge(challenge.id)}
                className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
              >
                Selesaikan Tantangan
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Bagian Bawah: Poin dan Tukar Reward */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Poin Anda</h2>
        <p className="text-6xl font-extrabold text-blue-500">{totalPoints}</p>
        <button
          onClick={() => navigate("/redeem")}
          className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 shadow-md transition"
        >
          Tukar Poin
        </button>
        <p className="text-sm text-gray-500 mt-2">
          Tukarkan poin Anda dengan diskon atau NFT eksklusif!
        </p>
      </div>
    </div>
  );
};

export default Challenges;
