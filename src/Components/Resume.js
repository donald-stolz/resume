import React, { Component } from 'react';
import Education from './ResumeSections/Education';
import Experience from './ResumeSections/Experience';
import Skills from './ResumeSections/Skills';
import Highlights from './ResumeSections/Highlights';

class Resume extends Component {
  render() {

    return (
      <section id="resume">

				<Experience {...this.props} />
        <Education {...this.props}/>

				<section id="skills">
	        <Skills {...this.props} />

					<Highlights {...this.props} />
				</section>
      </section>
    );
  }
}

export default Resume;
