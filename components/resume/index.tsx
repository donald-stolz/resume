import React, { FunctionComponent } from "react";
import {
  EducationExperience,
  Language,
  Skill,
  VolunteerExperience,
  WorkExperience,
} from "../../interfaces";
import Career from "./Career";
import Education from "./Education";
import Skills from "./Skills";
import Volunteer from "./Volunteer";

interface ResumeProps {
  work: WorkExperience[];
  volunteer: VolunteerExperience[];
  education: EducationExperience[];
  skills: Skill[];
  languages?: Language[];
  //   awards: Award[];
  //   publications: Publication[];
  //   interests: Interest[];
}

const Resume: FunctionComponent<ResumeProps> = ({
  work,
  volunteer,
  education,
  skills,
  languages,
}) => (
  <section id="resume">
    <Career experiences={work} />
    <Education experiences={education} />
    <Volunteer experiences={volunteer} />
    <Skills skillList={skills} languageList={languages} />
  </section>
);

export default Resume;
