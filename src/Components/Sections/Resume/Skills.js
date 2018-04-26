import React from 'react';

// TODO: Update to skill card type component to display keywords
const Skills = (props) => {

    var skills = props.data.map(function(skill){
      var className = 'bar-expand '+skill.name.toLowerCase();
      return (
				<li key={skill.name}>
					<span style={{width:skill.level}}className={className}></span>
					<em>{skill.name}</em>
				</li>)
    })

  return (
		<section id="skills">
	    <div className="row skill">

	       <div className="three columns header-col">
	          <h1><span>Skills</span></h1>
	       </div>

	       <div className="nine columns main-col">
				 		{/*<h3>Skills Message </h3>*/}
	        <div className="bars">

	           <ul className="skills">
	            {skills}
	          </ul>
	        </div>
	      </div>
	    </div>
		</section>
  )
}

export default Skills;
