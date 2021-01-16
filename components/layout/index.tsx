import React, { FunctionComponent, ReactNode } from "react";
import { SocialProfile } from "../../interfaces";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  name: string;
  profiles?: SocialProfile[];
  description?: string;
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  name,
  profiles,
  description,
}) => (
  <div className="App">
    <Header name={name} profiles={profiles} description={description} />
    {children}
    <Footer profiles={profiles} />
  </div>
);

export default Layout;
