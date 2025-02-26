"use client";
import React, { useEffect, useState } from "react";
import FullProjects from "@/components/section/full-projects";
import Wrapper from "@/components/utils/wrapper";
import client from "@/lib/sanity";
import { getAllProjects } from "@/constant/Query";
import { Skeleton } from "@/components/ui/skeleton";
import AnimationContainer from "@/components/utils/animation-container";
import { MagicCard } from "@/components/magicui/magic-card";

const AllProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchAllProject = async () => {
      try {
        const data = await client.fetch(getAllProjects);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    fetchAllProject();
  }, []);

  if (!projects) {
    return (
      <Wrapper className={"max-w-xl w-full mx-auto"}>
        <div className="gird grid-cols-2">
          <Skeleton className={"w-full bg-slate-900"} />
          <Skeleton className={"w-full bg-slate-900"} />
          <Skeleton className={"w-full bg-slate-900"} />
          <Skeleton className={"w-full bg-slate-900"} />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="max-w-2xl w-full mx-auto mb-24 p-3">
      <div className="flex flex-col items-start w-full mt-0 lg:mt-8">
        <AnimationContainer className="w-full flex flex-col gap-5 mb-8">
          <h2 className="text-xl font-semibold">Semua Project</h2>
          <p className="text-base text-justify lg:leading-8 text-foreground/80">
            Berikut kumpulan project saya yang mengubah ide menjadi nyata,
            solusi kerja. Dari alat yang berguna bagi pelajar hingga SaaS yang
            kreatif platform, proyek-proyek ini menunjukkan kecintaan saya pada
            membangun hal-hal itu memecahkan masalah nyata dengan web modern dan
            aplikasi mobile.
          </p>
          <hr className="my-4 border-zinc-400" />
        </AnimationContainer>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <MagicCard
            key={project._id || `project-${index}`}
            className="p-2"
            gradientSize={100}
            gradientFrom="rgb(99 102 241)"
            gradientTo="rgb(67 56 202)"
          >
            <FullProjects project={project} />
          </MagicCard>
        ))}
      </div>
    </Wrapper>
  );
};

export default AllProject;
