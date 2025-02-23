"use client";

import client from "@/lib/sanity";
import React, { useState, useEffect } from "react";
import { MagicCard } from "../magicui/magic-card";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { getNewProjects } from "@/constant/Query";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await client.fetch(getNewProjects);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, []);

  return (
    <div className="w-full relative pb-20 py-10 z-40">
      <div className="flex items-center justify-center overflow-hidden w-full mx-auto">
        <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
          Project Terbaru
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-blue-500/10 hidden lg:block -z-10 w-[30rem] left-[-5rem] bottom-[8rem] absolute h-[18rem] blur-[10rem] rounded-full"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 w-full pt-10">
        {projects.length > 0
          ? projects
              .slice(0, Math.min(4, projects.length))
              .map((project, index) => (
                <MagicCard
                  key={project._id || `project-${index}`}
                  className="p-2"
                  gradientSize={100}
                  gradientFrom="rgb(99 102 241)"
                  gradientTo="rgb(67 56 202)"
                >
                  <ProjectCard project={project} />
                </MagicCard>
              ))
          : !loading && (
              <p className="text-center text-gray-500">No projects found.</p>
            )}
      </div>

      <div className="mt-6">
        <Link href="/projects">
          <Button variant="secondary" size="sm">
            Project Lainnya
            <ArrowRightIcon className="size-4 ml-1.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
