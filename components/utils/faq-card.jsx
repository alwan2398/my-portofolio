import React from "react";
import { Card, CardContent } from "../ui/card";

const FaqCard = ({ faq }) => {
  return (
    <Card className="bg-neutral-900/8 border-none p-0 transition-all duration-300 select-none rounded-xl lg:rounded-2xl w-full">
      <CardContent className="flex flex-col h-[22rem] lg:h-80 p-4 md:p-6">
        <div className="flex flex-col gap-2 border-b-2 border-neutral-400 pb-8">
          <span className="text-base font-bold">Question:</span>
          <p className="w-full text-lg text-gray-200">{faq.question}</p>
        </div>
        <div className="mt-auto">
          <span className="text-base font-bold">Answer:</span>
          <p className="w-full text-lg text-gray-200">{faq.answer}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FaqCard;
