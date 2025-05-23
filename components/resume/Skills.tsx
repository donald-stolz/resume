"use client";

import { Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Skill } from "@/lib/resume-types";
import { SkillLevel } from "@/lib/resume-types";

interface SkillsProps {
  skills?: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  if (!skills || skills.length === 0) return null;

  const getSkillColor = (skillName: string) => {
    const colors = [
      "bg-purple-100 text-purple-800",
      "bg-pink-100 text-pink-800",
      "bg-blue-100 text-blue-800",
      "bg-green-100 text-green-800",
      "bg-yellow-100 text-yellow-800",
      "bg-indigo-100 text-indigo-800",
    ];

    const hash = skillName
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const getLevelValue = (level?: SkillLevel) => {
    switch (level) {
      case SkillLevel.Expert:
        return 95;
      case SkillLevel.Advanced:
        return 80;
      case SkillLevel.Intermediate:
        return 70;
      case SkillLevel.Proficient:
        return 60;
      case SkillLevel.Beginner:
        return 40;
      default:
        return 50;
    }
  };

  return (
    <section>
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-2 rounded-lg mr-3">
          <Code className="h-5 w-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold gradient-text">Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <Card key={index} className="overflow-hidden card-hover border-none">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <CardContent className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                {skill.level && (
                  <span className="text-sm text-gray-600">{skill.level}</span>
                )}
              </div>
              <Progress
                value={getLevelValue(skill.level)}
                className="h-2 mb-4"
              />
              {skill.keywords && skill.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {skill.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className={`text-sm px-3 py-1 rounded-full ${getSkillColor(
                        keyword
                      )}`}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
