import React from 'react';

const Entry = (props) => {

var skills = props.skillDetails.map(function(skill){
	var className = 'bar-expand '+skill.name.toLowerCase();
	return (
		<li key={skill.name}>
			<span style={{width:skill.level}}className={className}></span>
			<em>{skill.name}</em>
		</li>)
})

	const summary = props.description.map((point, index) => {
		return (
				<p key={index} className='skill-summary'>{point}</p>
		);
	});

	return (
		<div className='row '>
				<h3>{props.title}</h3>
				{summary}
				<div className='bars'>
						<ul className='skills'>
								{skills}
						</ul>
				</div>
		</div>)
}

// TODO: Update to skill card type component to display keywords
const Skills = (props) => {

    var skills = props.data.map((skill) => {

      return (<Entry
								title={skill.title}
								description={skill.description}
								skillDetails={skill.skillDetails}
							/>)
    })

  return (
		<section id="skills">
	    <div className="row skill">

	       <div className="three columns header-col">
	          <h1><span>Skills</span></h1>
	       </div>

	       <div className="nine columns main-col">
				 		{/*<h3>Skills Message </h3>*/}
	            {skills}
	        </div>

	    </div>
		</section>
  )
}

export default Skills;
