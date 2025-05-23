"use client";

import { Printer, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeActions() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // TODO: Implement PDF download functionality
    console.log("Download PDF");
  };

  return (
    <div className="flex justify-between items-center print:hidden mb-6">
      <h1 className="text-2xl font-bold gradient-text">My Resume</h1>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={handlePrint}
        >
          <Printer className="h-4 w-4" />
          Print
        </Button>
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
