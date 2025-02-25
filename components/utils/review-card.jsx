import React from "react";
import { Card, CardContent } from "../ui/card";
import { StarIcon } from "lucide-react";

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <StarIcon
          key={i}
          className="size-4 lg:size-5 fill-foreground text-foreground"
        />
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push("");
    } else {
      stars.push("");
    }
  }
  return stars;
};

const ReviewCard = ({ riview }) => {
  return (
    <div className="bg-neutral-900/8 border-none p-0 transition-all duration-300 select-none rounded-xl lg:rounded-2xl">
      <article className="flex flex-col h-[22rem] lg:h-80 p-4 md:p-6">
        <div className="flex items-center gap-2">
          {renderStars(riview.rating)}
        </div>
        <p className="text-neutral-300 flex-grow mt-4 text-sm text-justify md:text-lg leading-relaxed">
          {riview.message}
        </p>
        <div className="mt-auto">
          <h4 className="text-lg text-foreground font-semibold">
            {riview.name}
          </h4>
        </div>
      </article>
    </div>
  );
};

export default ReviewCard;
