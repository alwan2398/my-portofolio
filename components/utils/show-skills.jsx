import React from "react";
import { Badge } from "../ui/badge";

const ShowSkills = ({ stack }) => {
  return (
    <>
      {stack.map((item, index) => (
        <Badge
          key={index}
          size="lg"
          radius="sm"
          variant="filled"
          color="dark"
          className="bg-neutral-600/70 hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
        >
          <span className="font-medium text-white">{item}</span>
        </Badge>
      ))}
    </>
  );
};

export default ShowSkills;
