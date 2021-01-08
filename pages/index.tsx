import { GetStaticProps } from "next";
import { FunctionComponent } from "react";
import Layout from "../components/layout";
import { AdditionalSiteContent, ResumeSchema } from "../interfaces";

interface Props {
  resume: ResumeSchema;
  additionalContent: AdditionalSiteContent;
}

const PortfolioSite: FunctionComponent<Props> = ({
  resume,
  additionalContent,
}) => (
  <Layout name={resume.basics.name} profiles={resume.basics.profiles}>
    <About data={resume.basics} site={additionalContent} />
    <Resume data={resume} />
    {/* <Portfolio data={resume.portfolio} /> */}
    <References data={resume.references} />
  </Layout>
);

export default PortfolioSite;

export const getStaticProps: GetStaticProps = async () => {
  return { resume, additionalContent };
};
