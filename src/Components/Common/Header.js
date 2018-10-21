import React, { Component } from 'react';
import SocialIcons from './SocialIcons';

// TODO: proptypes

class Header extends Component {
    render() {
        const { name, profiles } = this.props.data;
        // TODO:
        //	<li><a className="smoothscroll" href="#highlights">Highlights</a></li>
        //	<li><a className="smoothscroll" href="#contact">Contact</a></li>
        return (
            <header id="home" style={{ backgroundPosition: 'right' }}>
                <nav id="nav-wrap">
                    <a
                        className="mobile-btn"
                        href="#nav-wrap"
                        title="Show navigation"
                    >
                        Show navigation
                    </a>
                    <a
                        className="mobile-btn"
                        href="#home"
                        title="Hide navigation"
                    >
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

                        <hr />
                        <SocialIcons data={profiles} className="social" />
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle" />
                    </a>
                </p>
            </header>
        );
    }
}

export default Header;
