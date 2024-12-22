import React from "react";

const Silat = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
        Pencak Silat - Seni Bela Diri yang Memikat
        </h1>
        <p className="text-gray-600 mt-2">
        Potret dua orang remaja yang sedang memperagakan Pencak Silat (Pexels.com/Pok Rie) 
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-lg mb-8">
        <img
          src="/assets/silat.jpg"
          alt="Batik"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed space-y-6">
        <p className="text-justify">
        Pencak Silat menjadi wajah bagi Indonesia dalam dunia bela diri yang memiliki gerakan yang 
        indah dan sangat teknis. Meskipun pada dasarnya merupakan teknik bertarung, pencak silat 
        juga merupakan bentuk seni yang menggabungkan gerakan tari dan musik, sehingga 
        menciptakan keharmonisan dalam setiap gerakannya. Pencak Silat tidak hanya mengajarkan 
        nilai-nilai keberanian, tetapi juga ketangguhan, dan rasa hormat. Seni bela diri ini telah 
        menyebar luas ke berbagai negara, dengan banyak orang yang mengadopsinya sebagai 
        olahraga atau bentuk pertahanan diri.
        </p>

        <p className="text-justify">
        Selain aspek fisiknya, Pencak Silat juga memiliki unsur spiritual yang mendalam. Setiap 
        gerakan dalam pencak silat dipenuhi dengan filosofi kehidupan, mengajarkan pengendalian 
        diri, kedamaian, dan kebijaksanaan. Pencak Silat telah menjadi daya tarik di banyak negara, 
        dengan berbagai kompetisi internasional yang melibatkan pesilat dari seluruh dunia. Di 
        Indonesia sendiri, pencak silat masih dimainkan di banyak daerah dan sering kali 
        dipertunjukkan dalam acara-acara budaya dan festival, menambah kebanggaan terhadap 
        warisan budaya Indonesia. 
        </p>

        <p className="text-justify">
        Pencak Silat resmi diakui sebagai Warisan Budaya Tak Benda oleh UNESCO pada 12 
        Desember 2019. Pengakuan ini diberikan dalam sesi ke-14 Intergovernmental Committee 
        for the Safeguarding of the Intangible Cultural Heritage di Bogotá, Kolombia. 
        </p>
      </div>
    </div>
  );
};

export default Silat;
