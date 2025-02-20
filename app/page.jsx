import HomeSection from "@/components/section/home-section";
import GradientBackground from "@/components/utils/gradient-background";
import React from "react";

const Home = () => {
  return (
    <GradientBackground>
      <main className="relative min-h-screen">
        <HomeSection />
      </main>
    </GradientBackground>
  );
};

export default Home;
