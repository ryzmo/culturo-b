import React from "react";

const Batik = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
          Batik - Warisan Dunia dari Jawa
        </h1>
        <p className="text-gray-600 mt-2">
          KPotret seseorang sedang membatik (Pexels.com/Jeffry S. S.) 
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-lg mb-8">
        <img
          src="/assets/batik.jpg"
          alt="Batik"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed space-y-6">
        <p className="text-justify">
          Batik merupakan salah satu warisan budaya tak benda yang memiliki nilai seni
          tinggi. Proses pembuatannya menggunakan teknik tradisional{" "}
          <span className="italic">“mencanting”</span> atau <span className="italic">“mencap”</span>
          dengan lilin panas untuk membentuk pola pada kain. Setiap pola yang dihasilkan
          memiliki makna mendalam dan sering kali menggambarkan filosofi kehidupan.
        </p>

        <p className="text-justify">
          Batik sudah ada sejak zaman kerajaan Majapahit dan terus berkembang hingga kini.
          Pada tahun <span className="font-semibold">2009</span>, Batik diakui oleh{" "}
          <a
            href="https://en.unesco.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold hover:underline"
          >
            UNESCO
          </a>{" "}
          sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi. Pengakuan ini
          menjadikan batik sebagai simbol kebanggaan bangsa Indonesia yang patut dilestarikan.
        </p>

        <p className="text-justify">
          Setiap daerah di Indonesia memiliki motif batik khasnya masing-masing. Di Jawa
          Tengah, motif <span className="font-bold">Sidomukti</span> dari Solo menggambarkan harapan
          akan kebahagiaan dan kemakmuran. Sementara itu, motif{" "}
          <span className="font-bold">Mega Mendung</span> dari Cirebon terkenal dengan pola awan yang
          melambangkan kesabaran dan ketenangan.
        </p>

        <p className="text-justify">
          Selain itu, motif <span className="font-bold">Truntum</span> dari Yogyakarta memiliki makna
          cinta yang tumbuh kembali. Biasanya, motif ini digunakan dalam upacara pernikahan
          karena melambangkan kesetiaan dan kasih sayang yang abadi.
        </p>

        <p className="text-justify">
          Batik tidak hanya digunakan sebagai pakaian tradisional, tetapi juga mulai diadaptasi
          dalam dunia fashion modern. Desainer lokal maupun internasional sering memanfaatkan
          keindahan batik dalam rancangan mereka. Hal ini membuktikan bahwa batik mampu
          mengikuti perkembangan zaman tanpa kehilangan identitas budayanya.
        </p>

        <p className="text-justify">
          Di era digital ini, batik juga semakin mudah dijangkau oleh masyarakat luas. Dengan
          adanya teknologi, promosi dan edukasi tentang batik dapat dilakukan melalui berbagai
          platform online. Berbagai inovasi dalam teknik pewarnaan dan bahan baku juga
          membantu mempertahankan eksistensi batik sebagai warisan budaya.
        </p>

        <p className="text-justify">
          Mencintai batik berarti turut melestarikan budaya dan identitas bangsa. Dengan
          mengenakan batik dalam keseharian, kita ikut memperkenalkan keindahan batik ke mata
          dunia. Batik bukan sekadar kain, melainkan simbol kebanggaan dan penghormatan
          terhadap karya seni yang diwariskan oleh leluhur kita.
        </p>
      </div>
    </div>
  );
};

export default Batik;
