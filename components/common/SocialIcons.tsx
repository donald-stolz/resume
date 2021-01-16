import React, { FunctionComponent } from "react";
import { SocialProfile } from "../../interfaces";

interface SocialIconsProps {
  profiles: SocialProfile[];
  footer?: boolean;
}

const SocialIcons: FunctionComponent<SocialIconsProps> = ({
  profiles,
  footer,
}) => {
  const socials = profiles.map((profile) => {
    let iconClass: string;

    switch (profile.network) {
      case "Twitter":
        iconClass = "fa fa-twitter";
        break;
      case "Facebook":
        iconClass = "fa fa-facebook";
        break;
      case "LinkedIn":
        iconClass = "fa fa-linkedin";
        break;
      case "Instagram":
        iconClass = "fa fa-instagram";
        break;
      case "Github":
        iconClass = "fa fa-github";
        break;
      default:
        iconClass = "fa fa-certificate";
    }

    return (
      <li key={profile.network}>
        <a href={profile.url} target="_blank" rel="noopener noreferrer">
          <i className={iconClass} />
        </a>
      </li>
    );
  });

  return <ul className={footer ? "social-links" : "social"}>{socials}</ul>;
};

export default SocialIcons;
