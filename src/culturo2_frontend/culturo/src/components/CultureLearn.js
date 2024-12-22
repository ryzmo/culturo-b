import React, { useEffect, useState } from "react";
import { useShowcase } from "../ShowcaseContext";
import { useNavigate } from "react-router-dom";

const CultureLearn = () => {
  const { showcases } = useShowcase();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const articles = [
    {
      id: 1,
      title: "Wayang Kulit - Pertunjukan Bayangan yang Memukau",
      description:
        "Wayang Kulit adalah seni pertunjukan tradisional Indonesia yang mengisahkan cerita epik penuh nilai moral dan spiritual, diakui UNESCO sebagai Warisan Budaya Tak Benda sejak 2003.",
      image: require("./assets/wayang.jpg"),
      link: "/articles/wayang",
    },
    {
      id: 2,
      title: "Batik - Warisan Dunia dari Jawa",
      description:
        "Batik adalah warisan budaya Indonesia yang diakui UNESCO, memiliki nilai seni tinggi dengan pola bermakna filosofis, terus berkembang dalam dunia modern sebagai simbol kebanggaan dan identitas bangsa.",
      image: require("./assets/batik.jpg"),
      link: "/articles/batik",
    },
    {
      id: 3,
      title: "Tari Kecak – Tari Api",
      description: "Tari Kecak adalah tarian ikonik Bali yang mengisahkan epos Ramayana melalui harmoni suara 'cak' tanpa alat musik, menawarkan keunikan budaya dramatis yang memukau wisatawan lokal maupun internasional.",
      image: require("./assets/kecak.jpg"),
      link: "/articles/kecak",
    },
    {
      id: 4,
      title: "Candi Borobudur - Keajaiban Arsitektur Dunia",
      description: "Tari Kecak adalah tarian ikonik Bali yang mengisahkan epos Ramayana melalui harmoni suara 'cak' tanpa alat musik, menawarkan keunikan budaya dramatis yang memukau wisatawan lokal maupun internasional.",
      image: require("./assets/candi.jpg"),
      link: "/articles/candi",
    },
    {
      id: 5,
      title: "Gamelan - Irama Musik yang Menggetarkan",
      description: "Tari Kecak adalah tarian ikonik Bali yang mengisahkan epos Ramayana melalui harmoni suara 'cak' tanpa alat musik, menawarkan keunikan budaya dramatis yang memukau wisatawan lokal maupun internasional.",
      image: require("./assets/gamelan.jpg"),
      link: "/articles/gamelan",
    },
    {
      id: 6,
      title: "Pencak Silat - Seni Bela Diri yang Memikat",
      description: "Tari Kecak adalah tarian ikonik Bali yang mengisahkan epos Ramayana melalui harmoni suara 'cak' tanpa alat musik, menawarkan keunikan budaya dramatis yang memukau wisatawan lokal maupun internasional.",
      image: require("./assets/silat.jpg"),
      link: "/articles/silat",
    },
    {
      id: 7,
      title: "Jepang – Negara Sakura, Surganya Pecinta Anime",
      description: "Tari Kecak adalah tarian ikonik Bali yang mengisahkan epos Ramayana melalui harmoni suara 'cak' tanpa alat musik, menawarkan keunikan budaya dramatis yang memukau wisatawan lokal maupun internasional.",
      image: require("./assets/jepang.png"),
      link: "/articles/jepang",
    },
    {
      id: 8,
      title: "Korea Selatan – Negeri Ginseng",
      description: "Tari Kecak adalah tarian ikonik Bali yang mengisahkan epos Ramayana melalui harmoni suara 'cak' tanpa alat musik, menawarkan keunikan budaya dramatis yang memukau wisatawan lokal maupun internasional.",
      image: require("./assets/korsel.png"),
      link: "/articles/korsel",
    },
    {
      id: 9,
      title: "India – Tanah Para Maharaja dan Para Dewa",
      description: "Tari Kecak adalah tarian ikonik Bali yang mengisahkan epos Ramayana melalui harmoni suara 'cak' tanpa alat musik, menawarkan keunikan budaya dramatis yang memukau wisatawan lokal maupun internasional.",
      image: require("./assets/india.png"),
      link: "/articles/india",
    },
    {
      id: 10,
      title: "China - Negeri Tirai Bambu",
      description: "Tari Kecak adalah tarian ikonik Bali yang mengisahkan epos Ramayana melalui harmoni suara 'cak' tanpa alat musik, menawarkan keunikan budaya dramatis yang memukau wisatawan lokal maupun internasional.",
      image: require("./assets/china.png"),
      link: "/articles/china",
    },
    {
      id: 11,
      title: "Italia – Rumah Bagi Para Pasta",
      description: "Tari Kecak adalah tarian ikonik Bali yang mengisahkan epos Ramayana melalui harmoni suara 'cak' tanpa alat musik, menawarkan keunikan budaya dramatis yang memukau wisatawan lokal maupun internasional.",
      image: require("./assets/italia.png"),
      link: "/articles/italia",
    },
    {
      id: 12,
      title: "Mesir: Negeri Piramida",
      description: "Tari Kecak adalah tarian ikonik Bali yang mengisahkan epos Ramayana melalui harmoni suara 'cak' tanpa alat musik, menawarkan keunikan budaya dramatis yang memukau wisatawan lokal maupun internasional.",
      image: require("./assets/mesir.png"),
      link: "/articles/mesir",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Pagelaran Sabang Merauke, Pelataran Candi Prambanan, 26 Maret 2022",
      thumbnail: require("./assets/video1.jpg"),
      link: "https://youtu.be/PMzMViJ3CMw?si=RyvIhXCP-JXyEA9-",
    },
    {
      id: 2,
      title: "TARI TANJUNG GEMIRANG - DAMAR ART (Official Musik dan Video)",
      thumbnail: require("./assets/video2.jpg"),
      link: "https://youtu.be/ONlHCTn7cBo?si=ytrca9nwwGNFbruc",
    },
  ];

  const regions = [
    {
      id: 1,
      name: "Asia",
      image: require("./assets/asia.jpg"),
      description: "Budaya dari Jepang, India, Indonesia, dan lainnya.",
      link: "/asia",
    },
    {
      id: 2,
      name: "Afrika",
      image: require("./assets/afrika.png"),
      description: "Eksplorasi seni dan tradisi dari Perancis, Spanyol, dan Italia.",
      link: "/afrika",
    },
    {
      id: 3,
      name: "Amerika Utara",
      image: require("./assets/amerikautara.jpg"),
      description: "Pelajari tarian, seni, dan cerita rakyat dari Afrika.",
      link: "/amerikautara",
    },
    {
      id: 4,
      name: "Amerika Selatan",
      image: require("./assets/amerikaselatan.jpg"),
      description: "Pelajari tarian, seni, dan cerita rakyat dari Afrika.",
      link: "/amerikaselatan",
    },
    {
      id: 5,
      name: "Antartika",
      image: require("./assets/antartikajpg.jpg"),
      description: "Pelajari tarian, seni, dan cerita rakyat dari Afrika.",
      link: "/antartika",
    },
    {
      id: 6,
      name: "Eropa",
      image: require("./assets/eropa.jpg"),
      description: "Pelajari tarian, seni, dan cerita rakyat dari Afrika.",
      link: "/eropa",
    },
    {
      id: 7,
      name: "Australia",
      image: require("./assets/australia.jpg"),
      description: "Pelajari tarian, seni, dan cerita rakyat dari Afrika.",
      link: "/australia",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gray-50 p-6 pt-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-10 ">
        <h1 className="text-5xl font-bold text-gray-800">CultureLearn</h1>
        <p className="text-lg text-gray-600 mt-4">
          Artikel, video pendek, dan eksplorasi budaya dari seluruh dunia. Jelajahi tradisi,
          seni, dan karya budaya.
        </p>
      </div>

      {/* Galeri dari CultureShowcase */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Galeri Karya Seni</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcases.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition duration-300"
            >
              <img
                src={item.preview}
                alt={item.title}
                className="rounded-md"
                style={{ maxWidth: "300px", maxHeight: "300px", margin: "0 auto" }}
              />
              <h3 className="text-lg font-bold mt-2">{item.title}</h3>
              <p>{item.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Pengunggah: {item.uploader}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Artikel */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Artikel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{article.title}</h3>
                <p className="text-gray-600 mt-2">{article.description}</p>
                <a
                  href={article.link}
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  Baca Selengkapnya →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Video</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition duration-300"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{video.title}</h3>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  Tonton Video →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Eksplorasi Wilayah */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Eksplorasi Wilayah</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" style={{
      display: "flex", // Flexbox untuk memastikan baris terakhir terpusat
      flexWrap: "wrap", // Membungkus elemen untuk baris baru
      justifyContent: "center", // Rata tengah untuk elemen di baris terakhir
    }}>
          {regions.map((region) => (
            <div
              key={region.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition duration-300"
              style={{ maxWidth: "324px", flex: "1 1 calc(25% - 16px)", margin: "8px" }}
            >
              <img
                src={region.image}
                alt={region.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{region.name}</h3>
                <p className="text-gray-600 mt-2">{region.description}</p>
                <button
                  className="inline-block mt-4 text-blue-500 hover:underline"
                  onClick={() => navigate(region.link)}
                >
                  Jelajahi →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CultureLearn;
