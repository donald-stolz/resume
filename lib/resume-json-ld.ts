import resumeJSON from "./RESUME.json";

export const resumeSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resumeJSON.basics.name,
  jobTitle: resumeJSON.basics.label,
  url: resumeJSON.basics.url,
  image: resumeJSON.basics.image,
  email: resumeJSON.basics.email,
  description: resumeJSON.basics.summary,
  sameAs: resumeJSON.basics.profiles?.map((profile) => profile.url),
  knowsAbout: resumeJSON.skills?.flatMap((skill) => skill.keywords),
  workExperience: resumeJSON.work?.map((job) => ({
    "@type": "Organization",
    name: job.name,
    url: job.url,
    position: job.position,
    startDate: job.startDate,
    endDate: job.endDate,
    description: job.summary,
  })),
  alumniOf: resumeJSON.education?.map((edu) => ({
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
  award:
    resumeJSON.awards?.map((award) => ({
      "@type": "Award",
      name: award.title,
      awardedBy: award.awarder,
      date: award.date,
    })) || [],
  hasCredential: resumeJSON.skills?.map((skill) => ({
    "@type": "EducationalCredential",
    credentialCategory: skill.name,
    competencyRequired: skill.keywords,
  })),
  memberOf: resumeJSON.volunteer?.map((org) => ({
    "@type": "Organization",
    name: org.organization,
    url: org.url,
    roleName: org.position,
    startDate: org.startDate,
    endDate: org.endDate,
    description: org.summary,
  })),
  creator: resumeJSON.projects?.map((project) => ({
    "@type": "CreativeWork",
    name: project.name,
    url: project.url,
    description: project.description,
    keywords: project.highlights?.join(", ") || "",
  })),
};
