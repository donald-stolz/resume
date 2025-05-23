"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ResumeSchema } from "@/lib/resume-types";

interface EducationProps {
  education?: ResumeSchema["education"];
}

export function Education({ education }: EducationProps) {
  if (!education || education.length === 0) return null;

  return (
    <section>
      <div className="flex items-center mb-4">
        <div className="bg-pink-100 p-2 rounded-lg mr-3">
          <GraduationCap className="h-5 w-5 text-pink-600" />
        </div>
        <h2 className="text-xl font-bold gradient-text">Education</h2>
      </div>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index} className="overflow-hidden card-hover border-none">
            <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-semibold text-lg">{edu.institution}</h3>
                  <div className="text-gray-700">
                    {edu.studyType} in {edu.area}
                  </div>
                </div>
                <div className="text-sm text-gray-600 whitespace-nowrap flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                  {edu.startDate} — {edu.endDate || "Present"}
                </div>
              </div>
              {edu.courses && edu.courses.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Key Courses:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
