"use client";

import { useState } from "react";
import { Code } from "lucide-react";
import type { Project } from "@/lib/resume-types";
import { ProjectCard } from "./ProjectCard";
import { Select, SelectItem } from "@/components/ui/select";

interface ProjectsProps {
  projects?: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  // Get unique tags from all projects
  const uniqueTags = projects
    ? Array.from(
        new Set(
          projects
            .flatMap((project) => project.highlights || [])
            .filter(Boolean)
        )
      ).sort()
    : [];

  // Filter projects based on selected tag
  const filteredProjects = projects?.filter((project) => {
    if (selectedTag === "all") return true;
    return project.highlights?.includes(selectedTag);
  });

  if (!projects || projects.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <Code className="h-5 w-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold gradient-text">Projects</h2>
        </div>
        <Select
          value={selectedTag}
          onChange={(tag) => setSelectedTag(tag)}
          className="w-[180px]"
        >
          <SelectItem value="all">All Projects</SelectItem>
          {uniqueTags.map((tag) => (
            <SelectItem key={tag} value={tag}>
              {tag}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-stretch">
        {filteredProjects?.map((project, index) => (
          <div key={index} className="flex-1 min-w-[240px] min-h-[240px]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
