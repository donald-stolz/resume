import React, { FunctionComponent } from "react";
import { BasicInfo } from "../interfaces";

interface AboutProps {
  basics: BasicInfo;
  downloadUrl: string;
}

const About: FunctionComponent<AboutProps> = ({ basics, downloadUrl }) => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img
          className="profile-pic"
          src={basics.picture}
          alt="Donald Stolz Profile Pic"
        />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>

        <p>{basics.summary}</p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{basics.name}</span>
              {basics.location && (
                <>
                  <br />
                  <span>
                    {basics.location.address}
                    <br />
                    {basics.location.city} {basics.location.region}{" "}
                    {basics.location.postalCode}
                  </span>
                </>
              )}
              {basics.phone && (
                <>
                  <br />
                  <span>{basics.phone}</span>
                </>
              )}
              {basics.email && (
                <>
                  <br />
                  <span>{basics.email}</span>
                </>
              )}
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={downloadUrl} className="button">
                <i className="fa fa-download" />
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
