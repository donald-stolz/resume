import React from 'react';

const Skills = (props) => {

  if (props.data) {
    var skillmessage = props.data.skillmessage;

    var skills = props.data.skills.map(function(skills){
      var className = 'bar-expand '+skills.name.toLowerCase();
      return (<li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>)
    })
  }

  return (
		<section id="skills">
	    <div className="row skill">

	       <div className="three columns header-col">
	          <h1><span>Skills</span></h1>
	       </div>

	       <div className="nine columns main-col">

	            <h3>{skillmessage}</h3>
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
