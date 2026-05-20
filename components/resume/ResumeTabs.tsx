"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Volunteer } from "./Volunteer";
import { Awards } from "./Awards";
import type { ResumeSchema } from "@/lib/resume-types";
import { tabListMargin, tabSectionGap } from "@/lib/tab-layout";
import { cn } from "@/lib/utils";

interface ResumeTabsProps {
  resume: ResumeSchema;
}

export function ResumeTabs({ resume }: ResumeTabsProps) {
  return (
    <Tabs defaultValue="all" className="print:hidden">
      <TabsList
        className={cn(
          "h-auto w-fit max-w-full flex-wrap justify-start gap-1 bg-gray-100 p-1",
          tabListMargin
        )}
      >
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
        <TabsTrigger
          value="volunteer"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          Volunteer
        </TabsTrigger>
        <TabsTrigger
          value="awards"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          Awards
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all" className={tabSectionGap}>
        <WorkExperience work={resume.work} />
        <Education education={resume.education} />
        <Skills skills={resume.skills} />
        <Volunteer volunteer={resume.volunteer} />
        <Awards awards={resume.awards} />
      </TabsContent>

      <TabsContent value="experience" className={tabSectionGap}>
        <WorkExperience work={resume.work} />
      </TabsContent>

      <TabsContent value="education" className={tabSectionGap}>
        <Education education={resume.education} />
      </TabsContent>

      <TabsContent value="skills" className={tabSectionGap}>
        <Skills skills={resume.skills} />
      </TabsContent>

      <TabsContent value="volunteer" className={tabSectionGap}>
        <Volunteer volunteer={resume.volunteer} />
      </TabsContent>

      <TabsContent value="awards" className={tabSectionGap}>
        <Awards awards={resume.awards} />
      </TabsContent>
    </Tabs>
  );
}
