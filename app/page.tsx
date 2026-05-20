"use client";

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ResumeDisplay } from "@/components/ResumeDisplay";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import { TabNavigation } from "@/components/TabNavigation";
import { resumeData } from "@/lib/resume-data";
import {
  tabPanel,
  tabPanelPadding,
  tabPagePadding,
  tabContentPadding,
} from "@/lib/tab-layout";
import { cn } from "@/lib/utils";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"resume" | "projects" | "contact">(
    "resume"
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection resume={resumeData} />
      <div className={cn("container mx-auto", tabPanelPadding, tabPagePadding)}>
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "resume" ? (
          <ResumeDisplay resume={resumeData} />
        ) : activeTab === "projects" ? (
          <div className={tabPanel}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={tabContentPadding}>
                <Projects projects={resumeData.projects} />
              </div>
            </div>
          </div>
        ) : (
          <div className={tabPanel}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={tabContentPadding}>
                <Contact />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
