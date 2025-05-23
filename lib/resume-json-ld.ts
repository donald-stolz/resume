import { resumeData } from "./resume-data";

export const resumeSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resumeData.basics.name,
  jobTitle: resumeData.basics.label,
  url: resumeData.basics.url,
  image: resumeData.basics.image,
  email: resumeData.basics.email,
  description: resumeData.basics.summary,
  sameAs: resumeData.basics.profiles?.map((profile) => profile.url),
  knowsAbout: resumeData.skills?.flatMap((skill) => skill.keywords),
  workExperience: resumeData.work?.map((job) => ({
    "@type": "Organization",
    name: job.name,
    url: job.url,
    position: job.position,
    startDate: job.startDate,
    endDate: job.endDate,
    description: job.summary,
  })),
  alumniOf: resumeData.education?.map((edu) => ({
    "@type": "EducationalOrganization",
    name: edu.institution,
    url: edu.url,
    areaServed: {
      "@type": "Place",
      name: "United States",
    },
    educationalCredentialAwarded: edu.studyType,
    fieldOfStudy: edu.area,
    startDate: edu.startDate,
    endDate: edu.endDate,
  })),
  award: [
    {
      "@type": "Award",
      name: "AWS Solutions Architect Certification",
      awardedBy: "Amazon Web Services",
    },
  ],
  hasCredential: resumeData.skills?.map((skill) => ({
    "@type": "EducationalCredential",
    credentialCategory: skill.name,
    competencyRequired: skill.keywords,
  })),
  memberOf: resumeData.volunteer?.map((org) => ({
    "@type": "Organization",
    name: org.organization,
    url: org.url,
    roleName: org.position,
    startDate: org.startDate,
    endDate: org.endDate,
    description: org.summary,
  })),
  creator: resumeData.projects?.map((project) => ({
    "@type": "CreativeWork",
    name: project.name,
    url: project.url,
    description: project.description,
    keywords: project.highlights?.join(", ") || "",
  })),
};
