import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, formData } = location.state || {};

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'success', or 'failure'
  const [transactionDetails, setTransactionDetails] = useState(null);

  if (!product || !formData) {
    return <p className="text-center text-gray-700 mt-10">No payment data available!</p>;
  }

  const handleCompletePayment = () => {
    setIsProcessingPayment(true);

    setTimeout(() => {
      setIsProcessingPayment(false);

      const isSuccess = Math.random() > 0.2; // 80% berhasil, 20% gagal
      if (isSuccess) {
        const newTransaction = {
          id: `TRX${Date.now()}`,
          product: product.name,
          date: new Date().toLocaleString(),
          status: "Berhasil",
        };

        setPaymentStatus("success");
        setTransactionDetails(newTransaction);

        // Simpan transaksi ke Local Storage
        const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
        localStorage.setItem("transactions", JSON.stringify([...storedTransactions, newTransaction]));
      } else {
        setPaymentStatus("failure");
      }
    }, 3000);
  };

  const handleViewHistory = () => {
    navigate("/history"); // Pastikan rute "/history" diarahkan ke TransactionHistory
  };

  const closeModal = () => {
    setPaymentStatus(null);
  };

  return (
    <div className="relative">
      <div className={`container mx-auto px-4 py-16 pt-24 ${paymentStatus ? "blur-sm" : ""}`}>
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Proses Pembayaran</h1>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <span className="text-xl font-bold text-gray-800 mt-4 block">{product.price}</span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Informasi Pelanggan</h3>
            <p className="text-gray-600">Nama: {formData.name}</p>
            <p className="text-gray-600">Email: {formData.email}</p>
            <p className="text-gray-600">Alamat: {formData.address}</p>
            <p className="text-gray-600">Telepon: {formData.phone}</p>
          </div>

          {!paymentStatus && (
            <button
              onClick={handleCompletePayment}
              disabled={isProcessingPayment}
              className={`mt-6 w-full ${
                isProcessingPayment
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              } text-white py-3 px-6 rounded-lg font-semibold transition duration-300`}
            >
              {isProcessingPayment ? "Processing Payment..." : "Selesaikan Pembayaran"}
            </button>
          )}
        </div>
      </div>

      {paymentStatus && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            {paymentStatus === "success" ? (
              <>
                <h3 className="text-xl font-bold text-green-600">Pembayaran Berhasil!</h3>
                <p>Nomor Transaksi: {transactionDetails.id}</p>
                <p>Produk: {transactionDetails.product}</p>
                <p>Tanggal: {transactionDetails.date}</p>
                <div className="mt-6 flex flex-col items-center gap-4">
                  <button
                    onClick={handleViewHistory}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Lihat Riwayat Transaksi
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
                  >
                    Tutup
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold text-red-600">Pembayaran Gagal</h3>
                <p>Silakan coba lagi.</p>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  Tutup
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
