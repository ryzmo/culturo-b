import React, { useState, useEffect } from "react";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  // Load data dari Local Storage saat komponen dimuat
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 pt-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Riwayat Transaksi</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {transactions.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="py-4">
                <p className="text-gray-800 font-semibold">{transaction.product}</p>
                <p className="text-gray-600">Nomor Transaksi: {transaction.id}</p>
                <p className="text-gray-600">Tanggal: {transaction.date}</p>
                <p
                  className={`font-bold ${
                    transaction.status === "Berhasil" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Status: {transaction.status}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Tidak ada transaksi yang ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
