"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeActions() {
  const handleDownload = () => {
    // Open visualcv in a new tab
    window.open("https://my.visualcv.com/donald-stolz/", "_blank");
  };

  return (
    <div className="flex justify-between items-center print:hidden mb-6">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>
    </div>
  );
}
