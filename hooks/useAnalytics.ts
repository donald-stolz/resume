import { event } from "@/lib/gtag";

export function useAnalytics() {
  const trackEvent = (
    action: string,
    category: string,
    label: string,
    value?: string
  ) => {
    event({
      action,
      category,
      label,
      value: value || "",
    });
  };

  const trackSocialClick = (platform: string) => {
    trackEvent("social_click", "Social", platform);
  };

  const trackProjectClick = (projectName: string) => {
    trackEvent("project_click", "Project", projectName);
  };

  const trackResumeDownload = () => {
    trackEvent("resume_download", "Resume", "Download");
  };

  return {
    trackEvent,
    trackSocialClick,
    trackProjectClick,
    trackResumeDownload,
  };
}
