"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumeJSON from "@/lib/RESUME.json";

export function ResumeActions() {
  const handleDownload = () => {
    window.open(resumeJSON.basics.resumeDownloadUrl, "_blank");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="absolute top-4 right-4 z-10 gap-2 bg-white/90 backdrop-blur-sm print:hidden"
      onClick={handleDownload}
      aria-label="Download resume PDF"
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      Download PDF
    </Button>
  );
}
