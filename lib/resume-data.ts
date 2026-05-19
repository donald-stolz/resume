import { SkillLevel, type ResumeSchema } from "./resume-types";
import resumeJSON from "./RESUME.json";

const skillLevelValues = new Set<string>(Object.values(SkillLevel));
const isSkillLevel = (value: string): value is SkillLevel =>
  skillLevelValues.has(value);
const resumeFromJson = (json: typeof resumeJSON): ResumeSchema => ({
  ...json,
  skills: json.skills?.map((skill) => ({
    ...skill,
    level: skill.level && isSkillLevel(skill.level) ? skill.level : undefined,
  })),
});
export const resumeData: ResumeSchema = resumeFromJson(resumeJSON);
