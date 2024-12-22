import React from "react";

const Candi = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
        Candi Borobudur - Keajaiban Arsitektur Dunia 
        </h1>
        <p className="text-gray-600 mt-2">
        Potret Candi Buddha Borobudur – Magelang, Jawa Tengah (Unsplash.com/Steffen Bertram)
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-lg mb-8">
        <img
          src="/assets/candi.jpg"
          alt="Batik"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed space-y-6">
        <p className="text-justify">
        Candi Borobudur adalah salah satu situs warisan dunia yang paling terkenal di Indonesia. Candi 
      yang terletak di Magelang, Jawa Tengah, ini dibangun pada abad ke-9 dan merupakan salah 
      satu candi Buddha terbesar di dunia. Borobudur bukan hanya sebuah tempat ibadah, tetapi juga 
      sebuah karya arsitektur yang menakjubkan, dengan relief yang menggambarkan ajaran Buddha 
      serta kehidupan masyarakat pada masa lampau. Candi ini memiliki desain yang unik, berbentuk 
      stupa besar dengan berlapis-lapis, yang menjadikannya sebagai salah satu daya tarik utama 
      wisata budaya Indonesia.
        </p>

        <p className="text-justify">
        Kecantikan dan keunikan Borobudur tidak hanya terletak pada strukturnya, tetapi juga pada 
        makna spiritual yang terkandung dalam setiap reliefnya. Relief-relief yang ada di Borobudur 
        menceritakan kisah-kisah kehidupan Buddha, mulai dari kelahirannya hingga pencapaian 
        pencerahannya. Setiap sisi yang mengelilingi candi ini mengajak pengunjung untuk memahami 
        dan merenungkan ajaran-ajaran Buddha. Borobudur telah menjadi contoh yang luar biasa dari 
        kebudayaan Indonesia yang memadukan seni, arsitektur, dan spiritualitas, menarik wisatawan 
        dari seluruh dunia yang ingin merasakan keajaiban dan keindahan budaya ini. Oleh karena itu 
        Candi Borobudur diakui sebagai Warisan Budaya Dunia oleh UNESCO pada 12 Desember 
        1991. 
        </p>

        <p className="text-justify">
        Sebaliknya, batu-batu penyusun Candi Borobudur dirakit dengan teknik pemasangan kering 
        'dry masonry', di mana setiap batu dipotong dengan sangat presisi sehingga dapat saling 
        mengunci tanpa membutuhkan perekat. Teknik ini menunjukkan keahlian luar biasa para 
        pembangun Candi Borobudur yang menggunakan alat-alat sederhana, namun tetap berhasil 
        menciptakan struktur yang kokoh dan tahan lama. 
        </p>

        <p className="text-justify">
        Keunikan lainnya adalah bentuk candi yang berupa mandala tiga dimensi yang 
        menggambarkan alam semesta menurut ajaran Buddha. Candi ini terdiri dari 9 platform yang 
        semakin menyempit ke atas, dengan stupa-stupa besar yang terletak di puncaknya, serta 
        ratusan relief yang menggambarkan ajaran-ajaran Buddha dan kehidupan sehari-hari 
        </p>
      </div>
    </div>
  );
};

export default Candi;
