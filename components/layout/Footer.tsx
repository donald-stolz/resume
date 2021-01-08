import { FunctionComponent } from "react";
import { SocialProfile } from "../../interfaces";
import SocialIcons from "../common/SocialIcons";

interface FooterProps {
  profiles?: SocialProfile[];
}

const Footer: FunctionComponent<FooterProps> = ({ profiles }) => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        {profiles && <SocialIcons profiles={profiles} footer={true} />}
        <ul className="copyright">
          <li>
            Icons made by{" "}
            <a href="http://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </li>
          <li>
            Design by{" "}
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
          </li>
        </ul>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
