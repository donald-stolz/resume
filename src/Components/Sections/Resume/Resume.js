import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import {Timeline} from '../../../Components'
// import SkillsCard from './SkillsCard';

class Resume extends Component {
  render() {
		console.log(this.props.data);
		const {work, education, skills, volunteer} = this.props.data;
		const volunteerEvents = volunteer.map(function(event) {
			return {
				date: event.startDate + " - " + event.endDate,
				title: event.organization,
				subtitle: event.position,
				description: event.summary,
				link: event.website
			};
		} )
    return (
      <section id="resume">
				<Timeline data={volunteerEvents}/>
				<Experience data={work} />
				<Education data={education}/>
				<Skills data={skills}/>
      </section>
    );
  }
}

export default Resume;
