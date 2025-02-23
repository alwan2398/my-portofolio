import React from "react";
import AnimationContainer from "../utils/animation-container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { faqs } from "@/constant/FAQ";
import { MagicCard } from "../magicui/magic-card";
import FaqCard from "../utils/faq-card";

const Faqs = () => {
  return (
    <div className="w-full relative pb-20 py-10 z-40">
      <AnimationContainer animation="slide-up" delay={0.1} className="">
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            FAQS
          </h2>
        </div>
      </AnimationContainer>

      <AnimationContainer
        animation="slide-up"
        delay={0.2}
        className="flex items-center justify-center overflow-hidden relative w-full pt-10 mx-auto"
      >
        <Carousel className="w-full max-w-full">
          <CarouselContent>
            {faqs.map((faq, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2lg:basis-1/3 relative"
              >
                <div className="absolute inset-0 w-4/5 h-20 top-1/4 left-1/2 -translate-x-1/2 -rotate-45 lg:h-52 bg-indigo-500/10 blur-[8rem]" />
                <MagicCard className={"p-2"}>
                  <FaqCard faq={faq} />
                </MagicCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-4 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </AnimationContainer>
    </div>
  );
};

export default Faqs;
