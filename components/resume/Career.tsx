import React, { FunctionComponent } from "react";
import moment from "moment";
import BulletPoints from "../common/BulletPoints";
import { WorkExperience } from "../../interfaces";
import Image from "next/image";

interface CareerProps {
  experiences: WorkExperience[];
}

const Career: FunctionComponent<CareerProps> = ({ experiences }) => (
  <div className="row experience ">
    <div className="three columns header-col">
      <h1>
        <span>Experience</span>
      </h1>
    </div>

    <div className="twelve columns main-col">
      {experiences.map((experience, index, array) => {
        const nextIndex = index + 1;
        const divider = nextIndex === array.length ? <br /> : <hr />;
        var imagePath = "/images/work/" + experience.image;
        const startDate = moment(experience.startDate).format("MMMM YYYY");
        const endDate = experience.endDate
          ? moment(experience.endDate).format("MMMM YYYY")
          : "Present";

        return (
          <div className="row item" key={experience.company}>
            <div className="three columns image-cont">
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="work-pic">
                  <Image
                    alt={experience.company}
                    src={imagePath}
                    height={200}
                    width={200}
                  />
                </div>
              </a>
            </div>
            <div className="nine columns">
              <div key={experience.company}>
                <h3>{experience.company}</h3>
                <p className="info">
                  {experience.position}
                  <span>&bull;</span>
                  <em className="date">
                    {startDate} - {endDate}
                  </em>
                </p>
                <p className="details">{experience.summary}</p>
                {experience.highlights && (
                  <BulletPoints points={experience.highlights} />
                )}
              </div>
            </div>
            {divider}
          </div>
        );
      })}
    </div>
  </div>
);

export default Career;
