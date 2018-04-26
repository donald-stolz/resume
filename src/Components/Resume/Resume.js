import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {

    return (
      <section id="resume">
				<Experience {...this.props} />
				<Education {...this.props}/>
				<Skills {...this.props} />
      </section>
    );
  }
}

export default Resume;