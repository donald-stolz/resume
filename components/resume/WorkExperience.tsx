"use client";

import { useState } from "react";
import {
  Briefcase,
  Building,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Work } from "@/lib/resume-types";

interface WorkExperienceProps {
  work?: Work[];
}

export function WorkExperience({ work }: WorkExperienceProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!work || work.length === 0) return null;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedWork = isExpanded ? work : work.slice(0, 3);
  const hasMore = work.length > 3;

  return (
    <section>
      <div className="flex items-center mb-4">
        <div className="bg-purple-100 p-2 rounded-lg mr-3">
          <Briefcase className="h-5 w-5 text-purple-600" />
        </div>
        <h2 className="text-xl font-bold gradient-text">Work Experience</h2>
      </div>
      <div className="space-y-6">
        {displayedWork.map((job, index) => (
          <Card key={index} className="overflow-hidden card-hover border-none">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-2 text-gray-500" />
                    <h3 className="font-semibold text-lg">{job.position}</h3>
                  </div>
                  <div className="text-gray-700 ml-6">
                    {job.name}
                    {job.location && <span> · {job.location}</span>}
                  </div>
                </div>
                <div className="text-sm text-gray-600 whitespace-nowrap flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                  {job.startDate} — {job.endDate || "Present"}
                </div>
              </div>
              {job.summary && (
                <p className="mt-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                  {job.summary}
                </p>
              )}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="mt-3 space-y-2 text-gray-700">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {hasMore && (
        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={handleToggle}
            className="gap-2"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show More
              </>
            )}
          </Button>
        </div>
      )}
    </section>
  );
}
