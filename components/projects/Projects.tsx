"use client";

import { useCallback, useEffect, useState } from "react";
import { Code, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/lib/resume-types";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { Select, SelectItem } from "@/components/ui/select";

interface ProjectsProps {
  projects?: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [totalSlides, setTotalSlides] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    setTotalSlides(emblaApi.scrollSnapList().length);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Reset carousel when projects are filtered
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setSelectedIndex(0);
    }
  }, [filteredProjects, emblaApi]);

  if (!projects || projects.length === 0) return null;

  const isLastSlide = selectedIndex === totalSlides - 1;

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
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
      <div className="relative px-4 md:px-12">
        <div ref={emblaRef}>
          <div className="flex gap-4">
            {filteredProjects?.map((project, index) => {
              const isLast = index === filteredProjects.length - 1;
              return (
                <div
                  key={index}
                  className={`flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 ${
                    isLast ? "mr-4" : ""
                  }`}
                >
                  <div className="h-full">
                    <ProjectCard project={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white pointer-events-auto"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {!isLastSlide && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white pointer-events-auto"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
