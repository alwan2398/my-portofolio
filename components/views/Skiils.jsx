import React from "react";
import AnimationContainer from "../utils/animation-container";
import { SKILLS } from "@/constant/MySkills";
import ShowSkills from "../utils/show-skills";

const Skiils = () => {
  return (
    <div className="w-full relative pb-20 py-10 z-40">
      <AnimationContainer
        animation="slide-up"
        delay={0.1}
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Skills & Tools
          </h2>

          <p className="text-justify lg:leading-7 text-foreground/80 lg:text-start mt-10">
            Seorang pemecah masalah kreatif dengan pengalaman lebih dari 2 tahun
            di bidang pemrograman. Saya telah mengeksplorasi berbagai bahasa
            pemrograman, pustaka, dan teknologi, serta mengasah keterampilan
            dalam pengembangan Frontend, Backend, dan Aplikasi.
          </p>

          <p className="text-justify lg:leading-7 text-foreground/80 lg:text-start mt-4">
            Saya memiliki semangat belajar yang tinggi dan mudah beradaptasi
            dengan teknologi baru. Dengan komitmen untuk terus mengembangkan
            keterampilan, saya siap menghadapi tantangan di dunia teknologi yang
            terus berkembang.
          </p>
        </div>
      </AnimationContainer>

      <div className="flex flex-col pt-10 w-full">
        <div className="flex flex-col flex-wrap items-start gap-5">
          {SKILLS.map((skill, index) => (
            <AnimationContainer
              key={skill.title}
              delay={0.1 * index + 0.1}
              className="flex flex-col mb-4"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-bold">{skill.title}</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <ShowSkills stack={skill.stack} />
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skiils;
