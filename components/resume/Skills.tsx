import React, { FunctionComponent } from "react";
import { FluencyLevel, Language, Skill, SkillLevel } from "../../interfaces";

interface SkillProps {
  skillList?: Skill[];
  languageList?: Language[];
}

const Skills: FunctionComponent<SkillProps> = ({ skillList, languageList }) => {
  return (
    <section id="skills">
      {skillList && (
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {skillList.map((skill) => (
              <React.Fragment key={skill.name}>
                <Entry
                  name={skill.name}
                  level={skill.level}
                  keywords={skill.keywords}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      {languageList && (
        <div className="row languages">
          <div className="three columns header-col">
            <h1>
              <span>Languages</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {languageList.map((language) => (
              <React.Fragment key={language.language}>
                <Entry
                  name={language.language}
                  level={language.fluency}
                  // keywords={skill.keywords}
                  // Might be interesting to have places you've spent multiple months in
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;

interface EntryProps {
  name: string;
  level: SkillLevel | FluencyLevel;
  keywords?: string[];
}

const Entry: FunctionComponent<EntryProps> = ({ name, level }) => {
  const levelNum: any = SkillLevel[level] || FluencyLevel[level];
  const barSize =
    levelNum === 4 ? "100%" : `${levelNum * 23 + (Math.random() + 1) * 10}%`;
  return (
    <div className="row ">
      <h3>{name}</h3>
      <div className="bars">
        <ul className="skills">
          <li key={name}>
            <span
              style={{ width: barSize }}
              className={`bar-expand ${name.toLowerCase}`}
            />
            {/* <em>{name}</em> */}
            <em />
          </li>
        </ul>
        {/* TODO: 
			keywords.map(keyword => <></>)
		*/}
      </div>
    </div>
  );
};
