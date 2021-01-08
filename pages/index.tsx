import React, { FunctionComponent } from "react";
import About from "../components/About";
import Layout from "../components/layout";
import Portfolio from "../components/Portfolio";
import References from "../components/References";
import Resume from "../components/resume";
// import { AdditionalSiteContent, ResumeSchema } from "../interfaces";
import resume from "../public/data/RESUME.json";
import additionalContent from "../public/data/AdditionalSiteContent.json";

// interface Props {
//   resume: ResumeSchema;
//   additionalContent: AdditionalSiteContent;
// }

const PortfolioSite: FunctionComponent = () => (
  <Layout name={resume.basics.name} profiles={resume.basics.profiles}>
    <About
      basics={resume.basics}
      downloadUrl={additionalContent.resumeDownload}
    />
    <Resume
      work={resume.work}
      volunteer={resume.volunteer}
      education={resume.education}
      skills={resume.skills}
      languages={resume.languages}
    />
    <Portfolio portfolioItems={resume.portfolio} />
    <References references={resume.references} />
  </Layout>
);

export default PortfolioSite;
