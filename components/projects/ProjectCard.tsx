import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/resume-types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-hover border-none h-full relative">
      {project.image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/projects/${project.image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
      <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 relative z-10"></div>
      <CardContent className="p-5 flex flex-col h-full relative z-10">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1 text-white">
            {project.name}
          </h3>
          <p className="text-gray-200 mb-4 line-clamp-3">
            {project.description}
          </p>
          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.highlights.map((highlight, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30"
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
            className="text-blue-300 hover:text-blue-100 text-sm font-medium inline-flex items-center mt-2"
          >
            View Project →
          </a>
        )}
      </CardContent>
    </Card>
  );
}
