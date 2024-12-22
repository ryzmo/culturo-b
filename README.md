# Culturo - A Global Hub for Culture

**Culturo** adalah platform inovatif berbasis Internet Computer Protocol (ICP) yang memungkinkan pengguna untuk belajar, memamerkan, dan membeli produk budaya dari seluruh dunia. Dengan teknologi blockchain, Culturo bertujuan untuk melestarikan warisan budaya sekaligus memberdayakan komunitas lokal secara ekonomi.

---

## 🌟 Features

1. **CultureLearn**: Sumber belajar dan tutorial tentang budaya.
2. **CultureShowcase**: Ruang untuk berbagi dan menemukan seni serta tradisi budaya global.
3. **CultureMart**: Marketplace e-commerce untuk produk budaya unik.
4. **CultureChallenges**: Tantangan harian/mingguan untuk melibatkan pengguna dan memberikan hadiah.

---

## 🛠️ Tech Stack

- **Frontend**: React.js/Vue.js, Tailwind CSS
- **Backend**: Motoko, Rust, ICP Canisters
- **Database**: Penyimpanan terdesentralisasi di Internet Computer
- **Tools**: Internet Identity ICP untuk autentikasi pengguna dan WebAssembly untuk performa tinggi

---

## 🚀 How to Run the Project

### Prerequisites
1. Install **Node.js** (v16 atau lebih baru)
2. Install **DFINITY SDK** untuk pengembangan ICP:
   ```bash
   sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
   ```
3. Install dependencies proyek:
   ```bash
   npm install
   ```

### Steps to Run Locally
1. Clone repository:
   ```bash
   git clone https:/https://github.com/ryzmo/culturo-b
   cd culturo-b
   ```
2. Jalankan jaringan Internet Computer secara lokal:
   ```bash
   dfx start
   ```
3. Deploy canisters (smart contracts):
   ```bash
   dfx deploy
   ```
4. Jalankan aplikasi frontend:
   ```bash
   npm run start
   ```
5. Buka browser dan navigasikan ke `http://localhost:3000` untuk melihat aplikasi.

---

## 🔧 Directory Structure

```plaintext
culturo-b/
├── .dfx/                          # File ICP lokal
├── node_modules/                  # Dependencies Node.js
├── public/                        # Aset publik
├── src/                           # Kode sumber
│   ├── assets/                    # Aset statis
│   ├── culto_backend/             # Backend (Motoko)
│   ├── culto_frontend/            # Frontend utama
├── declarations/                  # Deklarasi untuk Internet Identity
│   ├── internet_identity/         # Konfigurasi Internet Identity
├── .env                           # Konfigurasi lingkungan
├── .gitignore                     # File yang dikecualikan Git
├── dfx.json                       # Konfigurasi ICP
├── package-lock.json              # Versi dependencies
├── package.json                   # Daftar dependencies Node.js
├── postcss.config.js              # Konfigurasi PostCSS
├── tailwind.config.js             # Konfigurasi TailwindCSS
├── tsconfig.json                  # Konfigurasi TypeScript
└── README.md                      # Dokumentasi proyek
```

---

## 👥 Project Team

Proyek ini dikembangkan oleh tim berikut dalam rangka **Hackathon 9.0**:

1. **Muhammad Farhan Fadlurrohman** - Fontend and Backend Developer  
2. **Silvia Rafa Ramadhani** - UI/UX Designer 
3. **Irsyad Annafi Nurhikmah** - Fontend Developer 

---

## ✨ Contributions

Kami menyambut kontribusi untuk meningkatkan CultureSphere! Ikuti langkah berikut:
1. Fork repository ini.
2. Buat branch baru (`feature/your-feature`).
3. Commit perubahan Anda dan push.
4. Kirimkan Pull Request.

---

## 🎯 Future Roadmap

- Mengembangkan rekomendasi budaya berbasis AI.
- Menambahkan pengalaman AR/VR untuk eksplorasi budaya.
- Dukungan multibahasa untuk audiens global.

---

## 📜 License

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
