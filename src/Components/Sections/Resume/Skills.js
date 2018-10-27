import React from 'react';

const Entry = props => {
    const skills = props.skillDetails.map(skill => {
        var className = 'bar-expand ' + skill.name.toLowerCase();
        return (
            <li key={skill.name}>
                <span style={{ width: skill.level }} className={className} />
                <em>{skill.name}</em>
            </li>
        );
    });

    const summary = props.description.map((point, index) => {
        return (
            <p key={index} className="skill-summary">
                {point}
            </p>
        );
    });

    return (
        <div className="row ">
            <h3>{props.title}</h3>
            {summary}
            <div className="bars">
                <ul className="skills">{skills}</ul>
            </div>
        </div>
    );
};

// TODO: Update to skill card type component to display keywords
const Skills = props => {
    var skills = props.skillsData.map(skill => {
        return (
            <Entry
                key={skill.title}
                title={skill.title}
                description={skill.description}
                skillDetails={skill.skillDetails}
            />
        );
    });

    // var languages = props.languagesData.map((language) => {
    // 	return (
    // 		<div className='row '>
    // 				<h3>{language.name}:  {language.level}</h3>
    // 		</div>)
    // })

    return (
        <section id="skills">
            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>

                <div className="nine columns main-col">{skills}</div>
            </div>
            {/*<div className="row languages">

	       <div className="three columns header-col">
	          <h1><span>Languages</span></h1>
	       </div>

	       <div className="nine columns main-col">
				 	{languages}
	        </div>

	    </div>*/}
        </section>
    );
};

export default Skills;
