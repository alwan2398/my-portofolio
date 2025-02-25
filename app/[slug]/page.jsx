"use client";
import { Skeleton } from "@/components/ui/skeleton";
import AnimationContainer from "@/components/utils/animation-container";
import Wrapper from "@/components/utils/wrapper";
import DetailProject from "@/components/views/DetailProject";
import { getDetailProject } from "@/constant/Query";
import client from "@/lib/sanity";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await client.fetch(getDetailProject, { slug });
        setDetail(data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    if (slug) {
      fetchDetail();
    }
  }, [slug]);

  if (!detail) {
    return (
      <Wrapper className={"lg:max-w-screen-lg"}>
        <div className="flex flex-col items-start w-full mt-0 lg:mt-8 space-y-4">
          <Skeleton className="w-full h-80 bg-slate-900" />
          <Skeleton className="w-full h-60 bg-slate-900" />
          <Skeleton className="w-full h-40 bg-slate-900" />
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper className="lg:max-w-screen-lg">
      <div className="flex flex-col items-start w-full mt-4 lg:mt-8">
        <AnimationContainer className="w-full flex flex-col gap-5 mb-8">
          {detail.map((project, index) => (
            <DetailProject key={index} project={project} />
          ))}
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default ProjectDetail;
