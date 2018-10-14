import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Volunteer from './Volunteer';

class Resume extends Component {
  render() {
		console.log(this.props.data);
		const { work, education, skills, languages, volunteer} = this.props.data;
		// const volunteerEvents = volunteer.map(function(event) {
		// 	return {
		// 		date: event.startDate + " - " + event.endDate,
		// 		title: event.organization,
		// 		subtitle: event.position,
		// 		description: event.summary,
		// 		link: event.website
		// 	};
		// } )
    return (
      <section id="resume">
				<Experience data={work} />
				<Education data={education}/>
				<Volunteer data={volunteer}/>
				<Skills skillsData={skills} languagesData={languages}/>
      </section>
    );
  }
}

export default Resume;
