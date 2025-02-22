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
            Saya seorang Software Developer, dengan pengalaman lebih dari 2
            tahun yang berdedikasi dalam pengembangan aplikasi web dan mobile.
            Saya sangat excited untuk menciptakan pengalaman digital yang luar
            biasa, dengan menghadirkan solusi yang inovatif dan berkualitas
            tinggi pada setiap proyek yang di ciptakan. Menggabungkan arsitektur
            kode yang bersih dengan antarmuka pengguna yang intuitif,
            menciptakan solusi yang tidak hanya bekerja dengan sempurna tetapi
            juga menyenangkan pengguna. Saya berspesialisasi dalam membangun
            aplikasi web responsif dengan React dan menciptakan pengalaman
            aplikasi seluler platform menggunakan React Native. Saat saya tidak
            sedang membuat kode, Anda akan menemukan saya mendesain antarmuka
            pengguna yang ramping di Figma, selalu berusaha menjembatani
            kesenjangan antara fungsionalitas dan desain yang indah. Mari kita
            membangun sesuatu yang luar biasa bersama-sama! ✨
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default About;
