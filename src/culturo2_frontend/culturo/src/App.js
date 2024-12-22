import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ShowcaseProvider } from "./ShowcaseContext";
import { authenticate, logout } from "./auth"; // Tambahkan fungsi logout

// Import komponen
import Navbar from './components/Navbar';

import Home from './components/Home';
import Asia from "./components/Asia";
import Afrika from "./components/Afrika";
import AmerikaUtara from "./components/AmerikaUtara";
import AmerikaSelatan from "./components/AmerikaSelatan";
import Antartika from "./components/Antartika";
import Eropa from "./components/Eropa";
import Australia from "./components/Australia";

import CultureLearn from "./components/CultureLearn";
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import Challenges from './components/Challenges';
import RedeemPoints from './components/RedeemPoints';
import CultureShowcase from "./components/CultureShowcase";

import Batik from "./components/articles/Batik"; // Halaman Batik
import Wayang from "./components/articles/Wayang";
import Kecak from "./components/articles/Kecak";
import Candi from "./components/articles/Candi";
import Gamelan from "./components/articles/Gamelan";
import Silat from "./components/articles/Silat";
import China from "./components/articles/China";
import India from "./components/articles/India";
import Italia from "./components/articles/Italia";
import Jepang from "./components/articles/Jepang";
import Korsel from "./components/articles/Korsel";
import Mesir from "./components/articles/Mesir";

import ProductDetail from "./components/produk/ProductDetail";
import CheckoutPage from "./components/CheckoutPage"; // Halaman baru
import PaymentPage from "./components/PaymentPage";
import TransactionHistory from "./components/TransactionHistory";
import Cart from "./components/Cart";



import './App.css'; // Import file CSS untuk styling global

const App = () => {
  const [identity, setIdentity] = useState(null); // State untuk menyimpan identitas pengguna

  // Fungsi login
  const handleLogin = () => {
    authenticate((userIdentity) => {
      console.log("User Identity:", userIdentity);
      setIdentity(userIdentity);
    });
  };

  // Fungsi logout
  const handleLogout = () => {
    logout(() => {
      console.log("Logged out");
      setIdentity(null); // Hapus state identity
    });
  };

  return (
    <ShowcaseProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              {/* Rute Publik */}
              <Route path="/" element={<Home />} />
              <Route path="/asia" element={<Asia />} />
              <Route path="/afrika" element={<Afrika />} />
              <Route path="/amerikautara" element={<AmerikaUtara />} />
              <Route path="/amerikaselatan" element={<AmerikaSelatan />} />
              <Route path="/antartika" element={<Antartika />} />
              <Route path="/eropa" element={<Eropa />} />
              <Route path="/australia" element={<Australia />} />

              <Route path="/culturelearn" element={<CultureLearn />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/redeem" element={<RedeemPoints />} />
              <Route path="/cultureshowcase" element={<CultureShowcase />} />

              <Route path="/articles/batik" element={<Batik />} />
              <Route path="/articles/wayang" element={<Wayang />} />
              <Route path="/articles/kecak" element={<Kecak />} />
              <Route path="/articles/candi" element={<Candi />} />
              <Route path="/articles/gamelan" element={<Gamelan />} />
              <Route path="/articles/silat" element={<Silat />} />
              <Route path="/articles/china" element={<China />} />
              <Route path="/articles/india" element={<India />} />
              <Route path="/articles/italia" element={<Italia />} />
              <Route path="/articles/jepang" element={<Jepang />} />
              <Route path="/articles/korsel" element={<Korsel />} />
              <Route path="/articles/mesir" element={<Mesir />} />

              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/history" element={<TransactionHistory />} />
              <Route path="/cart" element={<Cart />} />

              {/* Halaman Profile */}
              <Route
                path="/profile"
                element={
                  identity ? (
                    <div className="center-content py-16 pt-24">
                      <Profile userPrincipal={identity.getPrincipal().toString()} />
                      <button onClick={handleLogout} className="logout-button">
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="center-content py-16 pt-24">
                      <h2>Sign in to Access Your Profile</h2>
                      <button onClick={handleLogin} className="login-button">
                        Sign in with Internet Identity
                      </button>
                    </div>
                  )
                }
              />

              {/* Redirect jika rute tidak ditemukan */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ShowcaseProvider>
  );
};

export default App;
