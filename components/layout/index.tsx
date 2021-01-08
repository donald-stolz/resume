import React, { FunctionComponent, ReactNode } from "react";
import { SocialProfile } from "../../interfaces";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  name: string;
  profiles?: SocialProfile[];
  // additionalContent: AdditionalSiteContent;
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  name,
  profiles,
}) => (
  <div className="App">
    <Header name={name} profiles={profiles} />
    {children}
    <Footer profiles={profiles} />
  </div>
);

export default Layout;
