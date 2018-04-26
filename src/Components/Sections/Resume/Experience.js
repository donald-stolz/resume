import React from 'react';

const Experience = (props) => {

    var experiences = props.data.map(function(experience){
			// TODO: Map highlights in a table or list for styling
      return(
      <div key={experience.company}><h3>{experience.company}</h3>
          <p className="info">{experience.position}
						<span>&bull;</span>
						<em className="date">{experience.startDate} -  {experience.endDate}</em>
					</p>
          <p>{experience.summary}</p>
					<p>{experience.highlights}</p>
      </div>)
    })

  return (
    <div className="row experience ">
      <div className="three columns header-col">
        <h1><span>Experience</span></h1>
      </div>

      <div className="nine columns main-col">
        {experiences}
      </div>
    </div>
  )
}

export default Experience;
