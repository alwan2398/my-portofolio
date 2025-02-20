import { cn } from "@/lib/utils";
import React from "react";
import AnimationContainer from "./animation-container";

export const TimeLine = ({ children }) => {
  return (
    <AnimationContainer className="w-full py-12 lg:py-16 space-y-10">
      <div className="flex justify-center mb-2 md:justify-start">
        <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
          Pengalaman
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-0 size-20 rounded-full bg-indigo-600 blur-[5rem] -top-0.5 -left-2"></div>
        {children}
      </div>
    </AnimationContainer>
  );
};

export const TimeLineItem = ({ active, children, last }) => {
  return (
    <div
      className={cn(
        "w-full flex justify-start gap-6 border-neutral-800",
        !last && "border-l pb-16"
      )}
    >
      <div className="relative">
        <div
          className={cn(
            "w-4 h-4 rounded-full absolute -top-0.5 -left-2 outline-neutral-900",
            active && "bg-indigo-600",
            !active && "bg-neutral-800 w-3 h-3 left-[-5.5px]"
          )}
        >
          {active && (
            <div className="top-0 left-0 w-4 h-4 rounded-full -z-10 bg-indigo-600 animate-ping" />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 -mt-1">{children}</div>
    </div>
  );
};

const TimeLineItemTitle = ({ children }) => (
  <p className="text-white text-medium">{children}</p>
);

const TimeLineItemDescription = ({ children }) => (
  <p className="text-base text-neutral-200">{children}</p>
);

TimeLineItem.Title = TimeLineItemTitle;
TimeLineItem.Description = TimeLineItemDescription;
