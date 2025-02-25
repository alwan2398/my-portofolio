"use client";
import React, { useEffect, useState } from "react";
import AnimationContainer from "../utils/animation-container";
import client from "@/lib/sanity";
import { getRiview } from "@/constant/Query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { MagicCard } from "../magicui/magic-card";
import ReviewCard from "../utils/review-card";
import { ArrowLeft } from "lucide-react";

const Riviews = () => {
  const [riview, setRivew] = useState([]);

  useEffect(() => {
    const fetchRiview = async () => {
      try {
        const data = await client.fetch(getRiview);
        setRivew(data);
      } catch (error) {
        console.error("Error fetch riviews:", error);
      }
    };

    fetchRiview();
  }, []);

  return (
    <div className="w-full relative pb-20 py-10 z-40">
      <AnimationContainer animation="slide-up" delay={0.1} className="">
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Apa Kata Mereka
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
            {riview.map((review, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2lg:basis-1/3 relative"
              >
                <div className="absolute inset-0 w-4/5 h-20 top-1/4 left-1/2 -translate-x-1/2 -rotate-45 lg:h-52 bg-blue-500/10 blur-[8rem]"></div>
                <MagicCard
                  className="p-2"
                  gradientSize={100}
                  gradientFrom="rgb(99 102 241)"
                  gradientTo="rgb(67 56 202)"
                >
                  <ReviewCard riview={review} />
                </MagicCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-10 right-16 justify-end">
            <CarouselPrevious className="text-white" />
            <CarouselNext />
          </div>
        </Carousel>
      </AnimationContainer>
    </div>
  );
};

export default Riviews;
