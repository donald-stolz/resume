import { FunctionComponent } from "react";
import { SocialProfile } from "../../interfaces";
import SocialIcons from "../common/SocialIcons";

interface HeaderProps {
  name: string;
  profiles?: SocialProfile[];
  description?: string;
}

const Header: FunctionComponent<HeaderProps> = ({
  name,
  profiles,
  description,
}) => (
  <header id="home" style={{ backgroundPosition: "right" }}>
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <li className="current">
          <a className="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#references">
            References
          </a>
        </li>
      </ul>
    </nav>

    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">Hi, I'm {name}</h1>
        <h3>{description}</h3>
        <hr />
        {profiles && <SocialIcons profiles={profiles} />}
      </div>
    </div>

    <p className="scrolldown">
      <a className="smoothscroll" href="#about">
        <i className="icon-down-circle" />
      </a>
    </p>
  </header>
);

export default Header;
