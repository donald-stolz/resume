"use client"

import { useState } from "react"
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  FileDown,
  Printer,
  Star,
  Calendar,
  Building,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { HeroSection } from "@/components/hero-section"
import type { ResumeSchema } from "@/lib/resume-types"

export function ResumeDisplay({ resume }: { resume: ResumeSchema }) {
  const [activeTab, setActiveTab] = useState("all")

  const handlePrint = () => {
    window.print()
  }

  // Function to get a color for a skill based on its name (for visual variety)
  const getSkillColor = (skillName: string) => {
    const colors = [
      "bg-purple-100 text-purple-800",
      "bg-pink-100 text-pink-800",
      "bg-blue-100 text-blue-800",
      "bg-green-100 text-green-800",
      "bg-yellow-100 text-yellow-800",
      "bg-indigo-100 text-indigo-800",
    ]

    // Simple hash function to get consistent colors for the same skill name
    const hash = skillName.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return colors[hash % colors.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection resume={resume} />

      <div id="resume-content" className="container mx-auto py-8 px-4 max-w-4xl print:py-2">
        <div className="flex justify-between items-center print:hidden mb-6">
          <h1 className="text-2xl font-bold gradient-text">My Resume</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint} className="gap-1">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 gap-1"
            >
              <FileDown className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden print:shadow-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 md:p-8 border-b">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <Avatar className="h-24 w-24 border-2 border-white shadow-md">
                <AvatarImage
                  src={resume.basics.image || "/placeholder.svg?height=96&width=96"}
                  alt={resume.basics.name}
                />
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {resume.basics.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold gradient-text">{resume.basics.name}</h1>
                <p className="text-xl text-gray-600 mt-1">{resume.basics.label}</p>
                <div className="mt-3 flex flex-wrap gap-3 justify-center md:justify-start">
                  {resume.basics.email && (
                    <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                      <Mail className="h-4 w-4 mr-1 text-purple-500" />
                      <a href={`mailto:${resume.basics.email}`} className="hover:underline">
                        {resume.basics.email}
                      </a>
                    </div>
                  )}
                  {resume.basics.phone && (
                    <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                      <Phone className="h-4 w-4 mr-1 text-pink-500" />
                      <a href={`tel:${resume.basics.phone}`} className="hover:underline">
                        {resume.basics.phone}
                      </a>
                    </div>
                  )}
                  {resume.basics.location && (
                    <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                      <MapPin className="h-4 w-4 mr-1 text-purple-500" />
                      <span>
                        {resume.basics.location.city}, {resume.basics.location.region}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-3 flex gap-2 justify-center md:justify-start">
                  {resume.basics.profiles?.map((profile, index) => (
                    <a
                      key={index}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 bg-white p-2 rounded-full shadow-sm hover:shadow transition-all"
                    >
                      {profile.network === "LinkedIn" && <Linkedin className="h-5 w-5 text-blue-600" />}
                      {profile.network === "GitHub" && <Github className="h-5 w-5 text-gray-800" />}
                      {!["LinkedIn", "GitHub"].includes(profile.network) && (
                        <Globe className="h-5 w-5 text-purple-600" />
                      )}
                      <span className="sr-only">{profile.network}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {resume.basics.summary && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
                  <span>About Me</span>
                </h2>
                <p className="text-gray-700 bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
                  {resume.basics.summary}
                </p>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <Tabs defaultValue="all" className="print:hidden" onValueChange={setActiveTab}>
              <TabsList className="mb-6 bg-gray-100 p-1">
                <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
                >
                  Skills
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                {/* Work Experience */}
                {resume.work && resume.work.length > 0 && (
                  <section>
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <Briefcase className="h-5 w-5 text-purple-600" />
                      </div>
                      <h2 className="text-xl font-bold gradient-text">Work Experience</h2>
                    </div>
                    <div className="space-y-6">
                      {resume.work.map((job, index) => (
                        <Card key={index} className="overflow-hidden card-hover border-none">
                          <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                          <CardContent className="p-5">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                              <div>
                                <div className="flex items-center">
                                  <Building className="h-4 w-4 mr-2 text-gray-500" />
                                  <h3 className="font-semibold text-lg">{job.position}</h3>
                                </div>
                                <div className="text-gray-700 ml-6">
                                  {job.name}
                                  {job.location && <span> · {job.location}</span>}
                                </div>
                              </div>
                              <div className="text-sm text-gray-600 whitespace-nowrap flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                                {job.startDate} — {job.endDate || "Present"}
                              </div>
                            </div>
                            {job.summary && (
                              <p className="mt-3 text-gray-700 bg-gray-50 p-3 rounded-lg">{job.summary}</p>
                            )}
                            {job.highlights && job.highlights.length > 0 && (
                              <ul className="mt-3 space-y-2 text-gray-700">
                                {job.highlights.map((highlight, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="inline-block h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                                      ✓
                                    </span>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}

                {/* Education */}
                {resume.education && resume.education.length > 0 && (
                  <section>
                    <div className="flex items-center mb-4">
                      <div className="bg-pink-100 p-2 rounded-lg mr-3">
                        <GraduationCap className="h-5 w-5 text-pink-600" />
                      </div>
                      <h2 className="text-xl font-bold gradient-text">Education</h2>
                    </div>
                    <div className="space-y-4">
                      {resume.education.map((edu, index) => (
                        <Card key={index} className="overflow-hidden card-hover border-none">
                          <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                          <CardContent className="p-5">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                              <div>
                                <h3 className="font-semibold text-lg">
                                  {edu.studyType} {edu.area}
                                </h3>
                                <div className="text-gray-700">{edu.institution}</div>
                              </div>
                              <div className="text-sm text-gray-600 whitespace-nowrap flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                                {edu.startDate} — {edu.endDate || "Present"}
                              </div>
                            </div>
                            {edu.score && (
                              <div className="mt-3 text-gray-700 flex items-center">
                                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                                GPA: {edu.score}
                              </div>
                            )}
                            {edu.courses && edu.courses.length > 0 && (
                              <div className="mt-3 bg-gray-50 p-3 rounded-lg">
                                <div className="text-sm font-medium mb-2">Relevant Courses:</div>
                                <div className="flex flex-wrap gap-2">
                                  {edu.courses.map((course, i) => (
                                    <Badge key={i} variant="secondary" className="bg-white shadow-sm">
                                      {course}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}

                {/* Skills */}
                {resume.skills && resume.skills.length > 0 && (
                  <section>
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <Code className="h-5 w-5 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold gradient-text">Skills</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {resume.skills.map((skill, index) => (
                        <Card key={index} className="overflow-hidden card-hover border-none">
                          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                          <CardContent className="p-5">
                            <h3 className="font-semibold">{skill.name}</h3>
                            {skill.level && (
                              <div className="mt-3">
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="font-medium">{skill.level}</span>
                                  <span>
                                    {skill.level === "Beginner" && "40%"}
                                    {skill.level === "Intermediate" && "60%"}
                                    {skill.level === "Advanced" && "80%"}
                                    {skill.level === "Expert" && "95%"}
                                  </span>
                                </div>
                                <Progress
                                  value={
                                    skill.level === "Beginner"
                                      ? 40
                                      : skill.level === "Intermediate"
                                        ? 60
                                        : skill.level === "Advanced"
                                          ? 80
                                          : skill.level === "Expert"
                                            ? 95
                                            : 50
                                  }
                                  className="h-2 bg-gray-100"
                                />
                              </div>
                            )}
                            {skill.keywords && skill.keywords.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {skill.keywords.map((keyword, i) => (
                                  <span key={i} className={`skill-badge ${getSkillColor(keyword)}`}>
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}

                {/* Awards */}
                {resume.awards && resume.awards.length > 0 && (
                  <section>
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                        <Award className="h-5 w-5 text-yellow-600" />
                      </div>
                      <h2 className="text-xl font-bold gradient-text">Awards</h2>
                    </div>
                    <div className="space-y-4">
                      {resume.awards.map((award, index) => (
                        <Card key={index} className="overflow-hidden card-hover border-none">
                          <div className="h-2 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                          <CardContent className="p-5">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                              <div>
                                <h3 className="font-semibold flex items-center">
                                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                                  {award.title}
                                </h3>
                                <div className="text-gray-700 ml-5">{award.awarder}</div>
                              </div>
                              <div className="text-sm text-gray-600 flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                                {award.date}
                              </div>
                            </div>
                            {award.summary && (
                              <p className="mt-3 text-gray-700 bg-gray-50 p-3 rounded-lg">{award.summary}</p>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}

                {/* Languages */}
                {resume.languages && resume.languages.length > 0 && (
                  <section>
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <Globe className="h-5 w-5 text-green-600" />
                      </div>
                      <h2 className="text-xl font-bold gradient-text">Languages</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {resume.languages.map((language, index) => (
                        <Card key={index} className="overflow-hidden card-hover border-none">
                          <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500"></div>
                          <CardContent className="p-5 text-center">
                            <h3 className="font-semibold text-lg">{language.language}</h3>
                            <div className="text-gray-700 mt-1">{language.fluency}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}
              </TabsContent>

              <TabsContent value="experience" className="space-y-8">
                {/* Work Experience */}
                {resume.work && resume.work.length > 0 && (
                  <section>
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <Briefcase className="h-5 w-5 text-purple-600" />
                      </div>
                      <h2 className="text-xl font-bold gradient-text">Work Experience</h2>
                    </div>
                    <div className="space-y-6">
                      {resume.work.map((job, index) => (
                        <Card key={index} className="overflow-hidden card-hover border-none">
                          <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                          <CardContent className="p-5">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                              <div>
                                <div className="flex items-center">
                                  <Building className="h-4 w-4 mr-2 text-gray-500" />
                                  <h3 className="font-semibold text-lg">{job.position}</h3>
                                </div>
                                <div className="text-gray-700 ml-6">
                                  {job.name}
                                  {job.location && <span> · {job.location}</span>}
                                </div>
                              </div>
                              <div className="text-sm text-gray-600 whitespace-nowrap flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                                {job.startDate} — {job.endDate || "Present"}
                              </div>
                            </div>
                            {job.summary && (
                              <p className="mt-3 text-gray-700 bg-gray-50 p-3 rounded-lg">{job.summary}</p>
                            )}
                            {job.highlights && job.highlights.length > 0 && (
                              <ul className="mt-3 space-y-2 text-gray-700">
                                {job.highlights.map((highlight, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="inline-block h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                                      ✓
                                    </span>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}
              </TabsContent>

              <TabsContent value="education" className="space-y-8">
                {/* Education */}
                {resume.education && resume.education.length > 0 && (
                  <section>
                    <div className="flex items-center mb-4">
                      <div className="bg-pink-100 p-2 rounded-lg mr-3">
                        <GraduationCap className="h-5 w-5 text-pink-600" />
                      </div>
                      <h2 className="text-xl font-bold gradient-text">Education</h2>
                    </div>
                    <div className="space-y-4">
                      {resume.education.map((edu, index) => (
                        <Card key={index} className="overflow-hidden card-hover border-none">
                          <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                          <CardContent className="p-5">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                              <div>
                                <h3 className="font-semibold text-lg">
                                  {edu.studyType} {edu.area}
                                </h3>
                                <div className="text-gray-700">{edu.institution}</div>
                              </div>
                              <div className="text-sm text-gray-600 whitespace-nowrap flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                                {edu.startDate} — {edu.endDate || "Present"}
                              </div>
                            </div>
                            {edu.score && (
                              <div className="mt-3 text-gray-700 flex items-center">
                                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                                GPA: {edu.score}
                              </div>
                            )}
                            {edu.courses && edu.courses.length > 0 && (
                              <div className="mt-3 bg-gray-50 p-3 rounded-lg">
                                <div className="text-sm font-medium mb-2">Relevant Courses:</div>
                                <div className="flex flex-wrap gap-2">
                                  {edu.courses.map((course, i) => (
                                    <Badge key={i} variant="secondary" className="bg-white shadow-sm">
                                      {course}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}
              </TabsContent>

              <TabsContent value="skills" className="space-y-8">
                {/* Skills */}
                {resume.skills && resume.skills.length > 0 && (
                  <section>
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <Code className="h-5 w-5 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold gradient-text">Skills</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {resume.skills.map((skill, index) => (
                        <Card key={index} className="overflow-hidden card-hover border-none">
                          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                          <CardContent className="p-5">
                            <h3 className="font-semibold">{skill.name}</h3>
                            {skill.level && (
                              <div className="mt-3">
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="font-medium">{skill.level}</span>
                                  <span>
                                    {skill.level === "Beginner" && "40%"}
                                    {skill.level === "Intermediate" && "60%"}
                                    {skill.level === "Advanced" && "80%"}
                                    {skill.level === "Expert" && "95%"}
                                  </span>
                                </div>
                                <Progress
                                  value={
                                    skill.level === "Beginner"
                                      ? 40
                                      : skill.level === "Intermediate"
                                        ? 60
                                        : skill.level === "Advanced"
                                          ? 80
                                          : skill.level === "Expert"
                                            ? 95
                                            : 50
                                  }
                                  className="h-2 bg-gray-100"
                                />
                              </div>
                            )}
                            {skill.keywords && skill.keywords.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {skill.keywords.map((keyword, i) => (
                                  <span key={i} className={`skill-badge ${getSkillColor(keyword)}`}>
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}

                {/* Languages */}
                {resume.languages && resume.languages.length > 0 && (
                  <section>
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <Globe className="h-5 w-5 text-green-600" />
                      </div>
                      <h2 className="text-xl font-bold gradient-text">Languages</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {resume.languages.map((language, index) => (
                        <Card key={index} className="overflow-hidden card-hover border-none">
                          <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500"></div>
                          <CardContent className="p-5 text-center">
                            <h3 className="font-semibold text-lg">{language.language}</h3>
                            <div className="text-gray-700 mt-1">{language.fluency}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}
              </TabsContent>
            </Tabs>

            {/* Print version - always visible when printing */}
            <div className={`space-y-8 ${activeTab !== "all" ? "hidden" : ""} print:block`}>
              {/* Work Experience */}
              {resume.work && resume.work.length > 0 && (
                <section>
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg mr-3 print:hidden">
                      <Briefcase className="h-5 w-5 text-purple-600" />
                    </div>
                    <h2 className="text-xl font-bold gradient-text">Work Experience</h2>
                  </div>
                  <div className="space-y-6">
                    {resume.work.map((job, index) => (
                      <div key={index} className="print:border-t print:pt-4 first:print:border-t-0 first:print:pt-0">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                          <div>
                            <h3 className="font-semibold text-lg">{job.position}</h3>
                            <div className="text-gray-700">
                              {job.name}
                              {job.location && <span> · {job.location}</span>}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 whitespace-nowrap">
                            {job.startDate} — {job.endDate || "Present"}
                          </div>
                        </div>
                        {job.summary && <p className="mt-2 text-gray-700">{job.summary}</p>}
                        {job.highlights && job.highlights.length > 0 && (
                          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                            {job.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Education */}
              {resume.education && resume.education.length > 0 && (
                <section>
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 p-2 rounded-lg mr-3 print:hidden">
                      <GraduationCap className="h-5 w-5 text-pink-600" />
                    </div>
                    <h2 className="text-xl font-bold gradient-text">Education</h2>
                  </div>
                  <div className="space-y-4">
                    {resume.education.map((edu, index) => (
                      <div key={index} className="print:border-t print:pt-4 first:print:border-t-0 first:print:pt-0">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {edu.studyType} {edu.area}
                            </h3>
                            <div className="text-gray-700">{edu.institution}</div>
                          </div>
                          <div className="text-sm text-gray-600 whitespace-nowrap">
                            {edu.startDate} — {edu.endDate || "Present"}
                          </div>
                        </div>
                        {edu.score && <div className="mt-2 text-gray-700">GPA: {edu.score}</div>}
                        {edu.courses && edu.courses.length > 0 && (
                          <div className="mt-2">
                            <div className="text-sm font-medium mb-1">Relevant Courses:</div>
                            <div className="flex flex-wrap gap-1">
                              {edu.courses.map((course, i) => (
                                <span key={i} className="inline-block bg-gray-100 px-2 py-1 text-xs rounded mr-1 mb-1">
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Skills */}
              {resume.skills && resume.skills.length > 0 && (
                <section>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3 print:hidden">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold gradient-text">Skills</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
                    {resume.skills.map((skill, index) => (
                      <div key={index} className="print:border print:border-gray-200 print:rounded print:p-3">
                        <h3 className="font-semibold">{skill.name}</h3>
                        {skill.level && (
                          <div className="mt-2 print:hidden">
                            <div className="flex justify-between text-sm mb-1">
                              <span>{skill.level}</span>
                            </div>
                            <Progress
                              value={
                                skill.level === "Beginner"
                                  ? 40
                                  : skill.level === "Intermediate"
                                    ? 60
                                    : skill.level === "Advanced"
                                      ? 80
                                      : skill.level === "Expert"
                                        ? 95
                                        : 50
                              }
                            />
                          </div>
                        )}
                        {skill.keywords && skill.keywords.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {skill.keywords.map((keyword, i) => (
                              <span key={i} className="inline-block bg-gray-100 px-2 py-1 text-xs rounded mr-1 mb-1">
                                {keyword}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Languages */}
              {resume.languages && resume.languages.length > 0 && (
                <section>
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-lg mr-3 print:hidden">
                      <Globe className="h-5 w-5 text-green-600" />
                    </div>
                    <h2 className="text-xl font-bold gradient-text">Languages</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 print:grid-cols-3">
                    {resume.languages.map((language, index) => (
                      <div key={index} className="print:border print:border-gray-200 print:rounded print:p-3">
                        <h3 className="font-semibold">{language.language}</h3>
                        <div className="text-gray-700">{language.fluency}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
