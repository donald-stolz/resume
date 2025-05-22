import type { ResumeSchema } from "./resume-types"

export const resumeData: ResumeSchema = {
  basics: {
    name: "John Doe",
    label: "Senior Software Engineer",
    image: "/placeholder.svg?height=150&width=150",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    url: "https://johndoe.com",
    summary:
      "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team to build software programs and effectively track changes.",
    location: {
      address: "123 Main St",
      postalCode: "10001",
      city: "New York",
      countryCode: "US",
      region: "NY",
    },
    profiles: [
      {
        network: "LinkedIn",
        username: "johndoe",
        url: "https://linkedin.com/in/johndoe",
      },
      {
        network: "GitHub",
        username: "johndoe",
        url: "https://github.com/johndoe",
      },
    ],
  },
  work: [
    {
      name: "Tech Innovations Inc.",
      position: "Senior Software Engineer",
      url: "https://techinnovations.com",
      startDate: "2019-01",
      endDate: "Present",
      summary: "Lead developer for a team of 5 engineers working on cloud-based solutions.",
      highlights: [
        "Developed a microservices architecture that improved system reliability by 35%",
        "Implemented CI/CD pipelines that reduced deployment time by 50%",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with product managers to define and prioritize features",
      ],
      location: "New York, NY",
    },
    {
      name: "Digital Solutions LLC",
      position: "Software Engineer",
      url: "https://digitalsolutions.com",
      startDate: "2016-03",
      endDate: "2018-12",
      summary: "Full-stack developer for e-commerce applications.",
      highlights: [
        "Built RESTful APIs using Node.js and Express",
        "Developed responsive front-end interfaces with React",
        "Optimized database queries that improved performance by 25%",
        "Implemented authentication and authorization systems",
      ],
      location: "Boston, MA",
    },
    {
      name: "WebTech Startup",
      position: "Junior Developer",
      url: "https://webtech.com",
      startDate: "2014-06",
      endDate: "2016-02",
      summary: "Worked on front-end development for various client projects.",
      highlights: [
        "Developed responsive websites using HTML, CSS, and JavaScript",
        "Collaborated with designers to implement UI/UX improvements",
        "Participated in daily stand-ups and sprint planning",
      ],
      location: "San Francisco, CA",
    },
  ],
  education: [
    {
      institution: "Massachusetts Institute of Technology",
      url: "https://mit.edu",
      area: "Computer Science",
      studyType: "Bachelor of Science",
      startDate: "2010-09",
      endDate: "2014-05",
      score: "3.8/4.0",
      courses: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Systems",
        "Computer Networks",
        "Artificial Intelligence",
      ],
    },
    {
      institution: "Stanford University",
      url: "https://stanford.edu",
      area: "Software Engineering",
      studyType: "Master of Science",
      startDate: "2014-09",
      endDate: "2016-06",
      score: "3.9/4.0",
      courses: [
        "Advanced Algorithms",
        "Distributed Systems",
        "Machine Learning",
        "Cloud Computing",
        "Software Design Patterns",
      ],
    },
  ],
  skills: [
    {
      name: "Front-end Development",
      level: "Advanced",
      keywords: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Angular"],
    },
    {
      name: "Back-end Development",
      level: "Expert",
      keywords: ["Node.js", "Express", "Python", "Django", "Ruby on Rails", "Java", "Spring Boot"],
    },
    {
      name: "Database",
      level: "Intermediate",
      keywords: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
    },
    {
      name: "DevOps",
      level: "Advanced",
      keywords: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Jenkins", "GitHub Actions"],
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Native speaker",
    },
    {
      language: "Spanish",
      fluency: "Professional working proficiency",
    },
    {
      language: "French",
      fluency: "Elementary proficiency",
    },
  ],
  awards: [
    {
      title: "Outstanding Achievement Award",
      date: "2020-11",
      awarder: "Tech Innovations Inc.",
      summary: "Awarded for leading the team that delivered a critical project ahead of schedule.",
    },
    {
      title: "Hackathon Winner",
      date: "2018-03",
      awarder: "TechCrunch Disrupt",
      summary: "First place in the annual hackathon for developing an innovative solution for remote healthcare.",
    },
  ],
  interests: [
    {
      name: "Open Source",
      keywords: ["Contributing to open source projects", "Building developer tools"],
    },
    {
      name: "Outdoor Activities",
      keywords: ["Hiking", "Rock climbing", "Camping"],
    },
  ],
  projects: [
    {
      name: "Personal Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies.",
      highlights: [
        "Implemented with React and Next.js",
        "Responsive design using Tailwind CSS",
        "Optimized for performance and accessibility",
      ],
      keywords: ["React", "Next.js", "Tailwind CSS"],
      startDate: "2021-06",
      endDate: "2021-08",
      url: "https://johndoe.com",
      roles: ["Developer", "Designer"],
      type: "Personal Project",
    },
    {
      name: "E-commerce Platform",
      description: "A full-stack e-commerce platform with payment processing and inventory management.",
      highlights: [
        "Built with Node.js and Express backend",
        "React frontend with Redux for state management",
        "Integrated with Stripe for payment processing",
        "MongoDB for database storage",
      ],
      keywords: ["Node.js", "Express", "React", "Redux", "MongoDB", "Stripe"],
      startDate: "2020-01",
      endDate: "2020-05",
      url: "https://github.com/johndoe/ecommerce",
      roles: ["Lead Developer"],
      type: "Team Project",
    },
  ],
}
