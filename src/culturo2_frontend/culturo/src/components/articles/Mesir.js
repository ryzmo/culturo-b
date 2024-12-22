import React from "react";

const Mesir = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
        Pencak Silat - Seni Bela Diri yang Memikat
        </h1>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-lg mb-8">
        <img
          src="/assets/mesir.png"
          alt="Batik"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed space-y-6">
        <p className="text-justify">
        1. Budaya dan Peradaban Kuno Mesir <br/>
Mesir dikenal sebagai salah satu pusat peradaban tertua di dunia. Peradaban Mesir Kuno 
meninggalkan warisan yang luar biasa, termasuk piramida yang megah, kuil kuno, dan hieroglif 
yang masih menjadi teka-teki hingga saat ini. Piramida Giza, salah satu dari Tujuh Keajaiban 
Dunia Kuno, adalah bukti kejayaan peradaban Mesir. 
        </p>

        <p className="text-justify">
        Selain piramida, Sungai Nil memainkan peran penting dalam kehidupan masyarakat Mesir 
kuno, menyediakan air untuk bertani dan jalur perdagangan. Kebudayaan Mesir juga dikenal 
dengan kepercayaan mereka akan kehidupan setelah mati, yang tercermin dalam seni 
mumifikasi dan makam-makam megah seperti di Lembah Para Raja. 
        </p>

        <p className="text-justify">
        2. Agama dan Kepercayaa<br/>
Mesir adalah negara dengan mayoritas penduduk Muslim Sunni, meskipun ada minoritas 
Kristen Koptik yang signifikan. Kepercayaan agama memainkan peran penting dalam 
kehidupan sehari-hari masyarakat Mesir modern. 
        </p>
        <p className="text-justify">
        Pada zaman kuno, agama Mesir kuno adalah politeisme yang kaya, dengan dewa-dewi seperti 
Ra, dewa matahari, dan Osiris, dewa kehidupan setelah mati. Pemujaan kepada para dewa 
dilakukan di kuil-kuil besar seperti Kuil Karnak dan Kuil Abu Simbel. 
        </p>
        <p className="text-justify">
        3. Pakaian Tradisional<br/>
Pakaian tradisional Mesir mencerminkan pengaruh budaya Islam dan tradisi kuno. Pria sering 
memakai galabeya, jubah panjang yang nyaman dan sesuai dengan iklim panas Mesir. 
Sementara itu, wanita sering mengenakan abaya dengan kerudung yang disebut hijab. 
        </p>
        <p className="text-justify">
        Pada masa Mesir Kuno, pakaian dibuat dari linen ringan. Orang-orang mengenakan pakaian 
sederhana, seperti shenti (rok pria) dan kalasiris (gaun wanita). Perhiasan emas dan batu mulia 
juga menjadi bagian penting dari busana, terutama di kalangan bangsawan. 
        </p>
        <p className="text-justify">
        4. Kuliner Khas Mesir<br/>
Kuliner Mesir adalah perpaduan unik dari tradisi Timur Tengah dan Mediterania. Salah satu 
makanan paling terkenal adalah koshari, hidangan campuran nasi, pasta, lentil, saus tomat, dan 
bawang goreng. 
        </p>
        <p className="text-justify">
        Hidangan lainnya adalah ful medames, kacang fava yang dimasak perlahan dengan minyak 
zaitun dan bawang putih, yang menjadi makanan sarapan favorit. Molokhia, sup hijau yang 
terbuat dari daun molokhia, juga sangat populer, terutama di kalangan keluarga tradisional. 
        </p>
        <p className="text-justify">
        5. Seni dan Tradisi <br/>
Seni Mesir dikenal karena keberagaman dan keindahannya, dari seni lukis dan patung zaman 
kuno hingga musik dan tarian modern. Pada zaman Mesir Kuno, seni dipengaruhi oleh agama, 
seperti relief dinding di makam yang menceritakan perjalanan ke kehidupan setelah mati. 
        </p>
        <p className="text-justify">
        Musik tradisional Mesir menggunakan alat musik seperti oud dan tabla. Tarian perut atau belly 
dance adalah seni tarian khas yang tidak hanya populer di Mesir, tetapi juga di dunia 
internasional. 
        </p>
      </div>
    </div>
  );
};

export default Mesir;
