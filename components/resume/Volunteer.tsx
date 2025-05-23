"use client";

import { useState } from "react";
import { Heart, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Volunteer as VolunteerType } from "@/lib/resume-types";

interface VolunteerProps {
  volunteer?: VolunteerType[];
}

export function Volunteer({ volunteer }: VolunteerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!volunteer || volunteer.length === 0) return null;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedVolunteer = isExpanded ? volunteer : volunteer.slice(0, 3);
  const hasMore = volunteer.length > 3;

  return (
    <section>
      <div className="flex items-center mb-4">
        <div className="bg-red-100 p-2 rounded-lg mr-3">
          <Heart className="h-5 w-5 text-red-600" />
        </div>
        <h2 className="text-xl font-bold gradient-text">
          Volunteer Experience
        </h2>
      </div>
      <div className="space-y-4">
        {displayedVolunteer.map((vol, index) => (
          <Card key={index} className="overflow-hidden card-hover border-none">
            <div className="h-2 bg-gradient-to-r from-red-500 to-pink-500"></div>
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-semibold text-lg">{vol.organization}</h3>
                  <div className="text-gray-700">{vol.position}</div>
                </div>
                <div className="text-sm text-gray-600">
                  {vol.startDate} — {vol.endDate || "Present"}
                </div>
              </div>
              {vol.summary && (
                <p className="mt-3 text-gray-600">{vol.summary}</p>
              )}
              {vol.highlights && vol.highlights.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {vol.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-600">{highlight}</span>
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
