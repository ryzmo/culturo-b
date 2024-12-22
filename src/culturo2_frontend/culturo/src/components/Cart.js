import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };

  const handleCheckout = () => {
    // Navigasi ke halaman pembayaran dengan data keranjang
    navigate("/payment", { state: { cart } });
  };

  return (
    <div className="container mx-auto px-4 py-16 pt-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Keranjang</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {cart.length > 0 ? (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map((item, index) => (
                <li key={index} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-800 font-semibold">{item.name}</p>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handleCheckout}
            >
              Lanjutkan ke Pembayaran
            </button>
          </>
        ) : (
          <p className="text-gray-600">Keranjang Anda kosong.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
