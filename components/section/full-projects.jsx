import { AppWindowMac } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const FullProjects = ({ project }) => {
  return (
    <div className="overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        width={1024}
        height={1024}
        className="w-full h-auto object-cover rounded-xl"
      />
      <h3 className="text-lg font-semibold mt-2 line-clamp-1">
        {project.title}
      </h3>
      <p className="text-sm text-foreground/80 mt-2 line-clamp-2">
        {project.description}
      </p>

      <div className="flex w-full mt-4">
        <Link href={`/${project.slug}`}>
          <Button variant="outline" size="sm">
            <AppWindowMac className="size-4 mr-2" />
            Detail Project
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FullProjects;
