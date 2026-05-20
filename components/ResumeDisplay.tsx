"use client";

import { ResumeHeader } from "./resume/ResumeHeader";
import { ResumeTabs } from "./resume/ResumeTabs";
import type { ResumeSchema } from "@/lib/resume-types";
import { tabPanel, tabContentPadding } from "@/lib/tab-layout";

interface ResumeDisplayProps {
  resume: ResumeSchema;
}

export function ResumeDisplay({ resume }: ResumeDisplayProps) {
  return (
    <div className={tabPanel}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <ResumeHeader basics={resume.basics} />
        <div className={tabContentPadding}>
          <ResumeTabs resume={resume} />
        </div>
      </div>
    </div>
  );
}
