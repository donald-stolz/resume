import React, { Component } from 'react';
import Education from './ResumeSections/Education';
import Experience from './ResumeSections/Experience';
import Skills from './ResumeSections/Skills'

class Resume extends Component {
  render() {

    return (
      <section id="resume">

        <Education {...this.props}/>

        <Experience {...this.props} />

        <Skills {...this.props} />

      </section>
    );
  }
}

export default Resume;
