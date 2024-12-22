import React from "react";

const Korsel = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
        PKorea Selatan – Negeri Ginseng
        </h1>
        <p className="text-gray-600 mt-2">
        Potret Korea Selatan (Pexels.com)
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-lg mb-8">
        <img
          src="/assets/korsel.png"
          alt="Batik"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed space-y-6">
        <p className="text-justify">
        Korea Selatan, yang dikenal luas sebagai "Negeri Ginseng," bukan hanya terkenal dengan 
budaya pop dan teknologi canggihnya, tetapi juga dengan ginseng berkualitas tinggi yang telah 
menjadi simbol kesehatan dan kebanggaan nasional. Ginseng Korea (Panax ginseng) telah 
diakui dunia karena manfaat kesehatannya, digunakan dalam pengobatan tradisional, dan 
menjadi salah satu komoditas ekspor unggulan. Julukan ini mencerminkan hubungan 
mendalam masyarakat Korea dengan tradisi dan alamnya, menjadikan ginseng sebagai bagian 
penting dari warisan budaya yang terus dipertahankan hingga kini. Itulah mengapa Korea 
Selatan dijuluki sebagai Negeri Ginseng. 
        </p>

        <p className="text-justify">
        1. Kehidupan Budaya di Korea Selatan<br/>
Korea Selatan telah menjadi pusat perhatian dunia berkat adanya budaya modern yang dikenal 
sebagai Hallyu atau Korean Wave. Musik K-Pop dengan grup-grup terkenal seperti BTS, NCT 
dan BLACKPINK menjadi salah satu ekspor budaya terbesar Korea yang membawa pengaruh 
besar di dunia internasional. Film dan drama Korea seperti "Parasite" dan "Squid Game" juga 
telah mendapatkan pengakuan global, membuktikan daya tarik industri hiburan mereka. 
        </p>

        <p className="text-justify">
        Namun, di balik gemerlap modernitas, Korea Selatan tetap menjaga tradisi, seperti upacara 
tradisional Dol-janchi (ulang tahun pertama bayi) dan perayaan Chuseok (hari panen) 
menunjukkan bagaimana masyarakat Korea menghormati leluhur dan merayakan kehidupan 
keluarga. Tradisi ini memberikan keseimbangan antara inovasi modern dan akar budaya yang 
kuat. 
        </p>
        <p className="text-justify">
        2. Agama di Korea Selatan<br/>
Agama di Korea Selatan mencerminkan keragaman dan toleransi. Meskipun negara ini sekuler, 
banyak penduduknya mempraktikkan agama seperti Kristen, Buddha, dan Shamanisme 
Korea. 
        </p>
        <p className="text-justify">
        Kuil-kuil Buddha seperti Bulguksa di Gyeongju dan kuil modern seperti Bongeunsa di Seoul 
menjadi tempat refleksi spiritual. Shamanisme, yang merupakan kepercayaan asli Korea, masih 
terlihat dalam gut, ritual tradisional yang dilakukan oleh shaman (mudang) untuk mengusir roh 
jahat atau memohon keberuntungan. 
        </p>
        <p className="text-justify">
        3. Pakaian Tradisional Korea<br/>
Hanbok, pakaian tradisional Korea, adalah salah satu elemen budaya paling ikonik. Hanbok 
digunakan dalam acara-acara resmi seperti pernikahan, perayaan tahun baru, dan upacara 
tradisional lainnya. Hanbok menjadi sangat terkenal, sehingga wisatawan yang datang ke 
Negeri Ginseng ini banyak mengenakan pakaian Hanbok setiap kali mengunjugi kuil kuil di 
Korea Selatan. Dengan desain yang elegan dan warna-warna cerah, hanbok mencerminkan 
keindahan estetika budaya Korea.  
        </p>
        <p className="text-justify">
        Hanbok pria dan wanita memiliki gaya yang unik. Untuk wanita, hanbok terdiri dari jeogori 
(blus) dan chima (rok panjang), sedangkan pria mengenakan baji (celana) dan jeogori. Saat 
ini, hanbok juga telah dimodifikasi menjadi lebih modern sehingga dapat digunakan dalam 
kehidupan sehari-hari. 
        </p>
      </div>
    </div>
  );
};

export default Korsel;
