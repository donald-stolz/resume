import React, { FunctionComponent, useState } from "react";
import dayjs from "dayjs";
import BulletPoints from "../common/BulletPoints";
import { EducationExperience } from "../../interfaces";
import Image from "next/image";
import ShowMore from "./ShowMore";

interface EducationProps {
  experiences: EducationExperience[];
}

const Education: FunctionComponent<EducationProps> = ({ experiences }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const onShowMore = () => setShowAll((s) => !s);

  return (
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>Education</span>
        </h1>
      </div>
      <div className="twelve columns main-col">
        {experiences.map((education, index, array) => {
          if (!showAll && index > 2) return;
          const nextIndex = index + 1;
          const divider =
            nextIndex === array.length ? (
              <br />
            ) : nextIndex === 3 && !showAll ? (
              <br />
            ) : (
              <hr />
            );
          const imagePath = "/images/education/" + education.image;
          // clean up this var assign
          const info =
            education.area === " "
              ? education.studyType
              : education.studyType + " in " + education.area;
          const date = dayjs(education.endDate).format("MMMM YYYY");

          return (
            <div className="row item" key={education.institution}>
              <div className="three columns image-cont">
                <a
                  href={education.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work-pic">
                    <Image
                      alt={education.institution}
                      src={imagePath}
                      height={200}
                      width={200}
                    />
                  </div>
                </a>
              </div>
              <div className="nine columns">
                <div key={education.institution}>
                  <h3>{education.institution}</h3>
                  <p className="info">
                    {info}
                    {education.endDate ? (
                      <span>
                        <span>&bull;</span>
                        <em className="date">{date}</em>
                      </span>
                    ) : null}
                  </p>
                  {education.highlights && (
                    <BulletPoints points={education.highlights} />
                  )}
                </div>
              </div>
              {divider}
            </div>
          );
        })}
        {experiences.length > 3 && (
          <ShowMore onClick={onShowMore} open={showAll} />
        )}
      </div>
    </div>
  );
};

export default Education;
