"use client";

import { Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/resume-types";

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
          <Card key={index} className="overflow-hidden card-hover border-none">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <CardContent className="p-5">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center mt-2"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
