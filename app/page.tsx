"use client";

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ResumeDisplay } from "@/components/ResumeDisplay";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import { TabNavigation } from "@/components/TabNavigation";
import { resumeData } from "@/lib/resume-data";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"resume" | "projects" | "contact">(
    "resume"
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection resume={resumeData} />
      <div className="container mx-auto px-4 py-8 ">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "resume" ? (
          <ResumeDisplay resume={resumeData} />
        ) : activeTab === "projects" ? (
          <div className="max-w-4xl mx-auto ">
            <Projects projects={resumeData.projects} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Contact />
          </div>
        )}
      </div>
    </main>
  );
}
