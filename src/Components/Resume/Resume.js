import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import SkillsCard from './SkillsCard';

class Resume extends Component {
  render() {
		console.log(this.props.data);
		const {work, education, skills} = this.props.data;
    return (
      <section id="resume">
				<Experience data={work} />
				<Education data={education}/>
				<Skills data={skills}/>
				<SkillsCard data={skills}/>
      </section>
    );
  }
}

export default Resume;
