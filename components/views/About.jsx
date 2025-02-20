import React from "react";
import AnimationContainer from "../utils/animation-container";

const About = () => {
  return (
    <div className="w-full relative pt-10 pb-20 z-40">
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Tentang Saya
          </h2>
        </div>
      </AnimationContainer>
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
      >
        <div className="w-full flex items-center justify-center">
          <p className="text-base md:text-lg text-justify w-full">
            Saya adalah seorang Software Developer dengan pengalaman lebih dari
            satu tahun dalam membangun dan mengembangkan website serta aplikasi.
            Saya memiliki passion yang tinggi dalam menciptakan solusi digital
            yang tidak hanya estetis tetapi juga dioptimalkan untuk performa dan
            pengalaman pengguna yang maksimal. Dalam setiap proyek, saya
            berkomitmen untuk mengembangkan aplikasi yang responsif, cepat, dan
            efisien dengan menerapkan praktik terbaik dalam pengkodean, optimasi
            performa, serta pengalaman pengguna. Saya percaya bahwa desain yang
            menarik harus diimbangi dengan fungsionalitas yang solid agar dapat
            memberikan nilai lebih bagi pengguna maupun bisnis. Saya memiliki
            keahlian dalam JavaScript, React.js, Next.js, dan Tailwind CSS,
            serta pengalaman dalam mengintegrasikan berbagai teknologi seperti
            Firebase, Sanity.io, dan Clerk untuk autentikasi serta manajemen
            data. Selain itu, saya juga memiliki pemahaman tentang backend
            development, termasuk penggunaan Strapi dan PostgreSQL untuk
            mengelola database secara efisien. Dengan pendekatan yang detail dan
            berorientasi pada solusi, saya selalu terbuka terhadap tantangan
            baru dalam dunia teknologi dan siap berkontribusi dalam tim untuk
            menciptakan produk digital yang inovatif dan berkualitas. ✨
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default About;
