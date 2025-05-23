"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Volunteer } from "./Volunteer";
import type { ResumeSchema } from "@/lib/resume-types";

interface ResumeTabsProps {
  resume: ResumeSchema;
}

export function ResumeTabs({ resume }: ResumeTabsProps) {
  return (
    <Tabs defaultValue="all" className="print:hidden">
      <TabsList className="mb-6 bg-gray-100 p-1">
        <TabsTrigger
          value="all"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          All
        </TabsTrigger>
        <TabsTrigger
          value="experience"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          Experience
        </TabsTrigger>
        <TabsTrigger
          value="education"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          Education
        </TabsTrigger>
        <TabsTrigger
          value="skills"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          Skills
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="space-y-8">
        <WorkExperience work={resume.work} />
        <Education education={resume.education} />
        <Skills skills={resume.skills} />
        <Volunteer volunteer={resume.volunteer} />
      </TabsContent>

      <TabsContent value="experience" className="space-y-8">
        <WorkExperience work={resume.work} />
      </TabsContent>

      <TabsContent value="education" className="space-y-8">
        <Education education={resume.education} />
      </TabsContent>

      <TabsContent value="skills" className="space-y-8">
        <Skills skills={resume.skills} />
      </TabsContent>
    </Tabs>
  );
}
