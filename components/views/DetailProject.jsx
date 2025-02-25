import React from "react";
import AnimationContainer from "../utils/animation-container";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import Icons from "../ui/icons";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";

const DetailProject = ({ project }) => {
  return (
    <AnimationContainer className="w-full pb-16">
      <Card className="w-full p-3">
        <div className="flex flex-col gap-4">
          <h2 className="md:text-2xl text-lg font-semibold">{project.title}</h2>
          <hr className="my-4 border-zinc-400" />
          <div className="w-full max-h-[400px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={1024}
              height={1024}
              className="w-full max-h-[500px] object-cover object-center rounded-t-xl"
            />
          </div>
        </div>
      </Card>

      <Card className="w-full p-3 mt-4">
        <div className="flex flex-col gap-2">
          <h3 className="md:text-xl text-base font-semibold">
            Deskripsi Project
          </h3>
          <hr className="my-4 border-zinc-400" />
          <p className="text-sm md:text-base">{project.description}</p>
        </div>
      </Card>

      <Card className="w-full p-3 mt-4 space-y-4">
        <CardTitle className="md:text-xl text-base font-semibold">
          Feature Project
        </CardTitle>
        <hr className="my-4 border-zinc-400" />
        {project.feature.map((feature, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={20}
                height={20}
              />
              <p className="md:text-base text-sm">{feature.title}</p>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold"
          >
            <Button
              className="flex items-center w-full p-2"
              size="lg"
              variant="btnGithub"
            >
              <Icons.github className="size-6 z-10" />
              <span className="z-10">Github</span>
            </Button>
          </Link>
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold"
          >
            <Button
              className="flex items-center w-full p-2"
              size="lg"
              variant="btnGithub"
            >
              <ExternalLinkIcon className="size-6 z-10" />
              <span className="z-10">Demo Site</span>
            </Button>
          </Link>
        </div>
      </Card>
    </AnimationContainer>
  );
};

export default DetailProject;
