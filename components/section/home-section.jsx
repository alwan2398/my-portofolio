import React from "react";
import Wrapper from "../utils/wrapper";
import Hero from "../views/Hero";
import About from "../views/About";
import Experience from "../views/Experience";
import Projects from "../views/Projects";
import Skiils from "../views/Skiils";

const HomeSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Wrapper className={"lg:max-w-screen-lg"}>
        <Hero />
      </Wrapper>
      <Wrapper>
        <About />
      </Wrapper>
      <Wrapper>
        <Experience />
      </Wrapper>
      <Wrapper>
        <Projects />
      </Wrapper>
      <Wrapper>
        <Skiils />
      </Wrapper>
    </div>
  );
};

export default HomeSection;
