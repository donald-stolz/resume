"use client";

import { Code } from "lucide-react";
import type { Project } from "@/lib/resume-types";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  projects?: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section>
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-2 rounded-lg mr-3">
          <Code className="h-5 w-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold gradient-text">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
