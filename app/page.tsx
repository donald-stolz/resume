"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { ResumeDisplay } from "@/components/resume-display";
import { Projects } from "@/components/resume/Projects";
import { TabNavigation } from "@/components/TabNavigation";
import { resumeData } from "@/lib/resume-data";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"resume" | "projects">("resume");

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection resume={resumeData} />
      <div className="container mx-auto px-4 py-8">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "resume" ? (
          <ResumeDisplay resume={resumeData} />
        ) : (
          <div className="max-w-4xl mx-auto">
            <Projects projects={resumeData.projects} />
          </div>
        )}
      </div>
    </main>
  );
}
