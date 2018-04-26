import React from 'react';
import { MediaCard } from '../Common'

// TODO: Update to skill card type component to display keywords
const SkillsCard = (props) => {

    var skills = props.data.map(function(skill){
      var className = 'bar-expand '+skill.name.toLowerCase();
      return (
				<MediaCard title>
					<span>text</span>
				</MediaCard>)
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

export default SkillsCard;
