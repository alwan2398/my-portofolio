import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { AppWindowMac } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 p-2">
        <Image
          src={project.image}
          alt={project.title}
          width={1024}
          height={1024}
          className="w-full h-auto object-cover rounded-t-xl"
        />
        <h2 className="text-lg font-medium">{project.title}</h2>
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
    </div>
  );
};

export default ProjectCard;
