import React from "react";
import Wrapper from "../utils/wrapper";
import Hero from "../views/Hero";
import About from "../views/About";

const HomeSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Wrapper className={"lg:max-w-screen-lg"}>
        <Hero />
      </Wrapper>
    </div>
  );
};

export default HomeSection;
