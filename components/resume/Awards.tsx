"use client";

import { useState } from "react";
import { Trophy, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Award as AwardType } from "@/lib/resume-types";

interface AwardsProps {
  awards?: AwardType[];
}

export function Awards({ awards }: AwardsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!awards || awards.length === 0) return null;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedAwards = isExpanded ? awards : awards.slice(0, 3);
  const hasMore = awards.length > 3;

  return (
    <section>
      <div className="flex items-center mb-4">
        <div className="bg-amber-100 p-2 rounded-lg mr-3">
          <Trophy className="h-5 w-5 text-amber-600" />
        </div>
        <h2 className="text-xl font-bold gradient-text">Awards</h2>
      </div>
      <div className="space-y-4">
        {displayedAwards.map((award, index) => (
          <Card key={index} className="overflow-hidden card-hover border-none">
            <div className="h-2 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-semibold text-lg">{award.title}</h3>
                  <div className="text-gray-700">{award.awarder}</div>
                </div>
                <div className="text-sm text-gray-600 whitespace-nowrap flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                  {award.date}
                </div>
              </div>
              {award.summary && (
                <p className="mt-3 text-gray-600">{award.summary}</p>
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
