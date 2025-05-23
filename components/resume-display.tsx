"use client";

import { ResumeHeader } from "./resume/ResumeHeader";
import { ResumeActions } from "./resume/ResumeActions";
import { ResumeTabs } from "./resume/ResumeTabs";
import { resumeData } from "@/lib/resume-data";

export function ResumeDisplay() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="flex justify-end mb-4">
          <ResumeActions />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <ResumeHeader basics={resumeData.basics} />
          <div className="p-6 md:p-8">
            <ResumeTabs resume={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
}
