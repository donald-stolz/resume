"use client";

import { cn } from "@/lib/utils";

interface TabNavigationProps {
  onTabChange: (tab: "resume" | "projects" | "contact") => void;
  activeTab: "resume" | "projects" | "contact";
}

export function TabNavigation({ onTabChange, activeTab }: TabNavigationProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-lg bg-gray-100 p-1">
        <button
          onClick={() => onTabChange("resume")}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            activeTab === "resume"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          )}
        >
          Resume
        </button>
        <button
          onClick={() => onTabChange("projects")}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            activeTab === "projects"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          )}
        >
          Projects
        </button>
        <button
          onClick={() => onTabChange("contact")}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            activeTab === "contact"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          )}
        >
          Contact
        </button>
      </div>
    </div>
  );
}
