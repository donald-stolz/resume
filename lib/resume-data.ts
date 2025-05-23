import { SkillLevel, type ResumeSchema } from "./resume-types";

export const resumeData: ResumeSchema = {
  basics: {
    name: "Donald Stolz",
    label: "Senior Software Engineer",
    image: "/images/profile-pic.jpg",
    email: "Don@Stolz.dev",
    phone: "",
    url: "https://donald-stolz.github.io/resume/",
    summary:
      "Senior Software Engineer with 6+ years of experience. Proven expertise in cloud technologies and full stack application development. Utilizes problem-solving skills to drive team success and accelerate project delivery.",
    location: {
      city: "Austin",
      countryCode: "US",
      region: "TX",
    },
    profiles: [
      {
        network: "Facebook",
        username: "dtstolz",
        url: "http://facebook.com/dtstolz",
      },
      {
        network: "Twitter",
        username: "donstolz",
        url: "https://twitter.com/donstolz",
      },
      {
        network: "LinkedIn",
        username: "Donald Stolz",
        url: "https://www.linkedin.com/in/donaldstolz",
      },
      {
        network: "Instagram",
        username: "donstolz",
        url: "https://www.instagram.com/donstolz/",
      },
      {
        network: "Github",
        username: "donald-stolz",
        url: "https://github.com/donald-stolz",
      },
    ],
  },
  work: [
    {
      name: "soona",
      position: "Senior Software Engineer",
      url: "https://soona.co",
      startDate: "2023-06",
      endDate: "2025-01",
      summary:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      highlights: [],
    },
    {
      name: "Trend",
      position: "Head of Engineering",
      url: "https://trend.io/",
      startDate: "2021-12",
      endDate: "2023-05",
      summary:
        "We help companies win at marketing. We connect brands with creators who provide original & specifically targeted content.",
      highlights: [
        "Lead technical developer, reporting directly to CEO & CPO",
        "Planned sprints and brokedown tickets into actionable subtasks with CPO using Asana",
        "Presented in product demos to keep team members informed on what's being built and to hear feedback",
        "Managed relationships with outside partners and contractors",
        "Decided on long-term technical direction and goals. Including new AWS services, cloud function migrations, new frontend frameworks, and other major technical decisions",
        "Maintained live site while migrating to new backend and frontend. Split traffic between old and new site",
        "Created technical and non-technical documentation. Used tools such as Notion, Swagger, and OpenAPI",
        "AWS - Content service, AppRunner, Lambda",
        "Google Cloud - firestore, firebase, realtime, functions",
        "Backend Migration - NestJs, Lambdas, AppRunner, Firestore, MongoDB",
        "Frontend Migration - NextJs, React, Typescript, SASS, Storybook, Custom Design System",
        "3rd Party Libraries - Stripe, SendGrid, PayPal",
      ],
    },
    {
      name: "Asset Dash",
      position: "Co-Founder & Technology Lead",
      url: "https://assetdash.com/",
      startDate: "2021-01",
      endDate: "2021-12",
      summary:
        "The leaderboard for assets. Asset Dash ranks the top stocks, ETFs, and cryptocurrencies by market capitalization. Track over 4,000 of the largest companies and cryptos.",
      highlights: [
        "Migrated backend and database from Heroku to Google Cloud Platform",
        "Updated and maintained Postgres database Refactored client to Next.js; Improved performance & SEO",
        "Created new features to drive user growth and increase session duration",
      ],
    },
    {
      name: "Elevator Media",
      position: "Full Stack Engineer",
      url: "https://elevatormag.com/",
      startDate: "2021-02",
      endDate: "2021-10",
      summary:
        "The dopest new hip hop, upcoming artists, music news, culture, and style.",
      highlights: [
        "Maintenance and support for backend, frontend, and internal tools",
        "Created internal utility library",
        "Updated and significantly grew usage of socialite open-source tool",
        "Published packages privately to GitHub and publicly to NPM",
        "Implemented BitPay crypto payments",
      ],
    },
    {
      name: "Unstoppable Domains",
      position: "Full Stack Engineer",
      url: "https://unstoppabledomains.com/",
      startDate: "2019-04",
      endDate: "2020-11",
      summary:
        "Unstoppable Domains builds blockchain domains, that improve crypto payments by replacing wallet addresses with human readable names and can connect to censorship-resistant decentralized websites.",
      highlights: [
        "Took lead on many large tasks such as client side business logic refactor",
        "Made major mobile UI & performance improvements",
        "Improved client-side site performance by transitioning site from CRA to Next JS",
        "Setup multiple site integrations for business analytics, including technologies such as Segment, Snowflake, & Mode",
        "Implemented integrations that saved development time and cut costs. E.g. RudderStack and Lever",
        "Created first iteration of our Website builder tools and our advanced templates. New tools helped grow domains with sites from ~100 in January to >15,000 in June",
      ],
    },
    {
      name: "Code for Fun",
      position: "Instructor",
      url: "http://codeforfun.com",
      startDate: "2018-10",
      endDate: "2019-05",
      summary:
        "Code for fun is a non­profit organization, located in the San Francisco Bay Area, committed to exposing all students to computer science at an early age.",
      highlights: [
        "Taught students 7 to 16 years old the fundamentals of programming",
        "Wrote curriculums for the Web Development topic at Hack High School",
        "Conducted interviews for summer camp hiring",
      ],
    },
    {
      name: "Axlry",
      position: "Software Engineer",
      url: "https://axlry.com",
      startDate: "2018-01",
      endDate: "2019-05",
      summary:
        "Axlry is an app that helps connect independent artists and record labels to music video directors.",
      highlights: [
        "Front-end react-native developer",
        "Full stack web developer",
      ],
    },
    {
      name: "Lake Jericho",
      position: "Financial Technology Intern",
      url: "http://lakejericho.com",
      startDate: "2017-01",
      endDate: "2018-05",
      summary:
        "In charge of designing and implementing software solutions to assist with customer resource management and meeting Global Investment Performance Standard.",
      highlights: [
        "Created a custom CRM application using Electron, React JS, and NeDB.",
      ],
    },
    {
      name: "Tau Kappa Epsilon",
      position: "Historian & Webmaster",
      url: "http://tkeloyola.org",
      startDate: "2016-08",
      endDate: "2018-04",
      summary:
        "Responsible for improving Alumni involvement, developing chapter website, and coordinating online fundraising.",
      highlights: [
        "Member of Board of Advisors, Executive Board, Philanthropy and Recruitment Committees.",
        "Assisted with marketing, coordinating social media fundraising and creating event webpages.",
        "Coordinated and marketed events between alumni and undergraduates.",
        "Published quarterly newsletters and maintained Alumni Website.",
      ],
    },
    {
      name: "Midwest Pool Management",
      position: "Assistant Manager / Head Guard",
      url: "http://midwestpool.com/",
      startDate: "2012-05",
      endDate: "2016-07",
      summary:
        "Responsible for monitoring pool safety and responding to emergency situations.",
      highlights: [
        "Managed 20 guard staff",
        "resolved patron issues",
        "performed bi-hourly maintenance checks",
        "Substituted for Manager when needed",
      ],
    },
  ],
  education: [
    {
      institution: "42 - Silicon Valley",
      area: "Software Engineering",
      studyType: "Software Engineering",
      startDate: "2018-09",
      endDate: "2019-06",
      url: "https://www.42.us.org/",
      courses: ["Project based learning", "C"],
    },
    {
      institution: "Loyola University Chicago",
      area: "Computer Science",
      studyType: "Bachelor of Science",
      startDate: "2014-09",
      endDate: "2018-05",
      url: "https://www.luc.edu/",
      courses: ["Computer Science", "Mathematics", "Business Administration"],
    },
  ],
  volunteer: [
    {
      organization: "Hack High School",
      position: "Volunteer Mentor",
      url: "https://www.42.us.org/program/high-school-students-free-coding-program/",
      startDate: "2019-01",
      endDate: "2019-05",
      summary:
        "The goal of HackHighSchool is to provide equality of access to computer science and digital literacy for the 21st Century to all high school students age 14-18. HackHighSchool(H2S) is a free,8-month long coding club open from September to May.",
      highlights: [
        "Created Node JS Curriculum",
        "Taught JavaScript & Web Development",
        "Built app to help manage student check-in and daily reports.",
      ],
    },
    {
      organization: "St. Jude Children's Research Hospital",
      position: "Volunteer",
      url: "https://www.stjude.org/",
      startDate: "2016-02",
      endDate: "2018-05",
      summary:
        "The mission of St. Jude Children's Research Hospital is to advance cures, and means of prevention, for pediatric catastrophic diseases through research and treatment. I coordinated and participated in philanthropic events for St. Jude",
    },
    {
      organization: "Food Recovery Network",
      position: "Volunteer",
      url: "https://www.foodrecoverynetwork.org/illinois/#loyolauniversityofchicago",
      startDate: "2017-01",
      endDate: "2018-05",
      summary:
        "Participated in food recovery runs after campus events, recovering food that can be donated to a local food pantry. Assisted with food drives and helped coordinate volunteers from my fraternity.",
    },
    {
      organization: "KEEN",
      position: "Volunteer",
      url: "http://www.keenstlouis.org/",
      startDate: "2011-09",
      endDate: "2015-05",
      summary:
        "Played sports with mentally and physically disabled kids, mentoring them and building social skills.",
    },
    {
      organization: "Loyola Academy",
      position: "Volunteer",
      url: "http://www.loyolaacademy.org/",
      startDate: "2015-01",
      endDate: "2015-01",
      summary:
        "Served as a tutor and teacher's assistant at Loyola Academy, a Jesuit Middle School for boys who have the potential for college preparatory work, but whose progress may be impeded by economic or social circumstances",
    },
  ],
  skills: [
    {
      name: "Front-end Development",
      level: SkillLevel.Advanced,
      keywords: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "NextJS",
        "Vue",
        "React Native",
      ],
    },
    {
      name: "Back-end Development",
      level: SkillLevel.Expert,
      keywords: ["Node.js", "Express", "NestJS", "Python", "Ruby on Rails"],
    },
    {
      name: "Database",
      level: SkillLevel.Intermediate,
      keywords: ["MongoDB", "PostgreSQL", "Firestore", "Redis", "Snowflake"],
    },
    {
      name: "DevOps",
      level: SkillLevel.Advanced,
      keywords: [
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "CI/CD",
        "GitHub Actions",
      ],
    },
    {
      name: "AI Tools",
      level: SkillLevel.Proficient,
      keywords: ["Cursor", "Gemini AI", "V0", "Copilot"],
    },
  ],
};
