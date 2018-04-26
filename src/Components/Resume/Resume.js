import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
		console.log(this.props.data);

    return (
      <section id="resume">
				<Experience data={this.props.data} />
				<Education {...this.props}/>
				<Skills {...this.props} />
      </section>
    );
  }
}

export default Resume;
