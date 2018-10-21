import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Volunteer from './Volunteer';

const Resume = props => {
    const { work, education, skills, languages, volunteer } = props.data;
    return (
        <section id="resume">
            <Experience data={work} />
            <Education data={education} />
            <Volunteer data={volunteer} />
            <Skills skillsData={skills} languagesData={languages} />
        </section>
    );
};

export default Resume;
