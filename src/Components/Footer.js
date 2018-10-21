import React, { Component } from 'react';
import { SocialIcons } from './Common';

class Footer extends Component {
    render() {
        const { profiles } = this.props.data;

        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <SocialIcons data={profiles} className="social-links" />
                        <ul className="copyright">
                            <li>
                                Icons made by{' '}
                                <a
                                    href="http://www.freepik.com"
                                    title="Freepik"
                                >
                                    Freepik
                                </a>{' '}
                                from{' '}
                                <a
                                    href="https://www.flaticon.com/"
                                    title="Flaticon"
                                >
                                    www.flaticon.com
                                </a>{' '}
                                is licensed by{' '}
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
                                Design by{' '}
                                <a
                                    title="Styleshout"
                                    href="http://www.styleshout.com/"
                                >
                                    Styleshout
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="go-top">
                        <a
                            className="smoothscroll"
                            title="Back to Top"
                            href="#home"
                        >
                            <i className="icon-up-open" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
