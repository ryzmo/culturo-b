import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  if (!product) {
    return <p className="text-center text-gray-700 mt-10">No product selected for checkout!</p>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // Mulai proses pembayaran
    setIsProcessingPayment(true);

    // Simulasi proses pembayaran
    setTimeout(() => {
      setIsProcessingPayment(false);
      navigate("/payment", { state: { product, formData } });
    }, 2000); // Simulasi waktu memproses
  };

  return (
    <div className="container mx-auto px-4 py-16 pt-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>

        {/* Detail Produk */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <span className="text-xl font-bold text-gray-800 mt-4 block">{product.price}</span>
        </div>

        {/* Formulir Checkout */}
        <form onSubmit={handlePayment}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Alamat"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Nomor Telepon"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isProcessingPayment}
            className={`mt-6 w-full ${
              isProcessingPayment
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            } text-white py-3 px-6 rounded-lg font-semibold transition duration-300`}
          >
            {isProcessingPayment ? "Processing..." : "Bayar Sekarang"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
