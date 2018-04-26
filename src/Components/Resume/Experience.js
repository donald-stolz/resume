import React from 'react';

const Experience = (props) => {

  if (props.data) {
    var experience = props.data.experience.map(function(experience){
      return(
      <div key={experience.company}><h3>{experience.company}</h3>
          <p className="info">{experience.title}<span>&bull;</span> <em className="date">{experience.years}</em></p>
          <p>{experience.description}</p>
      </div>)
    })
  }

  return (
    <div className="row experience ">
      <div className="three columns header-col">
        <h1><span>Experience</span></h1>
      </div>

      <div className="nine columns main-col">
        {experience}
      </div>
    </div>
  )
}

export default Experience;
