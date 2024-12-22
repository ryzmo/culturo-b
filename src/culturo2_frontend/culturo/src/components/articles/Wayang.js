import React from "react";

const Wayang = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
        Wayang Kulit - Pertunjukan Bayangan yang Memukau
        </h1>
        <p className="text-gray-600 mt-2">
        Foto wayang kulit sebagai warisan budaya Indonesia (Unsplash.com/Lighten Up)
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-lg mb-8">
        <img
          src="/assets/wayang.jpg"
          alt="Batik"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed space-y-6">
        <p className="text-justify">Wayang Kulit adalah seni pertunjukan tradisional Indonesia yang menggunakan boneka datar yang terbuat dari kulit sapi atau kerbau. Wayang menjadi warisan yang kerap kali dipertunjukkan kepada masyarakat di Indonesia oleh dalang di belakang layar. Tak heran, apabila masyarakat Indonesia mengenal warisan budaya yang satu ini. Pertunjukan wayang selalu menggambarkan cerita-cerita epik yang menunjukkan khas dari Indonesia sejak zaman dahulu, seperti Wayang Purwa yang mengisahkan cerita Mahabharata dan Ramayana, Wayang Gedog yang menceritakan kisah Panji, serta Wayang Wahyu yang menyampaikan ajaran agama.</p>

        <p className="text-justify">
        Seiring perkembangan zaman, wayang juga mengalami transformasi ke dalam bentuk yang lebih modern. Salah satu contohnya adalah Wayang Golek dengan karakter Cepot dari Jawa Barat yang lucu dan menghibur, serta Wayang Orang yang menghadirkan tokoh wayang dalam bentuk peran manusia. Bentuknya yang semakin menyerupai manusia asli menunjukkan bahwa seni wayang akan terus berkembang mengikuti zaman tanpa terkikis sedikitpun. Selain itu, teknologi turut mempengaruhi wayang, seperti adanya wayang digital atau animasi modern yang lebih interaktif untuk menarik perhatian generasi muda tanpa menghilangkan nilai budaya aslinya.
        </p>

        <p className="text-justify">
        Wayang tidak hanya menyuguhkan hiburan, tetapi juga mengandung nilai-nilai moral dan spiritual. Para penonton tidak hanya menikmati pertunjukan seni, tetapi juga belajar tentang ajaran kehidupan melalui cerita yang disampaikan dengan penuh makna.
        </p>

        <p className="text-justify">
        Wayang Kulit diakui oleh UNESCO (07 November 2003) sebagai Warisan Budaya Tak Benda, dan hingga kini, pertunjukan ini masih menjadi bagian penting dari kehidupan budaya masyarakat Indonesia, terutama di Jawa dan Bali. Wayang Kulit menarik minat banyak wisatawan internasional yang ingin merasakan keunikan dan keindahan seni pertunjukan ini.
        </p>
      </div>
    </div>
  );
};

export default Wayang;
