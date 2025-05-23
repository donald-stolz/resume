import { HeroSection } from "@/components/hero-section";
import { ResumeDisplay } from "@/components/resume-display";
import { resumeData } from "@/lib/resume-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection resume={resumeData} />
      <ResumeDisplay resume={resumeData} />
    </main>
  );
}
