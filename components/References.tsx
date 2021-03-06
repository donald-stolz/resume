import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Reference } from "../interfaces";

interface ReferencesProps {
  references: Reference[];
}

// TODO: Make this more generic while keeping ResumeJSON Schema
const CompanyInfo = {
  ud: {
    image: "unstoppable-domains-logo.png",
    website: "https://unstoppabledomains.com/",
  },
  axlry: { image: "axlry-logo.png", website: "https://axlry.com" },
  tke: { image: "tke-logo.jpg", website: "http://tkeloyola.org" },
};

const References: FunctionComponent<ReferencesProps> = ({ references }) => (
  <section id="references">
    <div className="row reference">
      <div className="three columns header-col ref-span">
        <h1>
          <span>References</span>
        </h1>
      </div>

      <div className="twelve columns main-col">
        {references.map((reference, index, array) => {
          const { name, reference: quote } = reference;
          const divider = index + 1 === array.length ? <br /> : <hr />;
          const company = name.includes("Unstoppable Domains")
            ? "ud"
            : name.includes("Elevator")
            ? "axlry"
            : "tke";
          const { website } = CompanyInfo[company];
          const workImage = `/images/work/${CompanyInfo[company].image}`;

          return (
            <div className="row item" key={index}>
              <div className="three columns image-cont">
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <div className="work-pic">
                    <Image
                      src={workImage}
                      alt={company}
                      height={200}
                      width={200}
                    />
                  </div>
                </a>
              </div>
              <div className="nine columns">
                <div key={company}>
                  <p className="details">"{quote}"</p>
                  <p className="info">{name}</p>
                </div>
              </div>
              {divider}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default References;
