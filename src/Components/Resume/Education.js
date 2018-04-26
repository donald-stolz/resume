import React from 'react';

const Education = (props) => {

    var education = props.data.map(function(education){
			var info = education.studyType +" in " + education.area;
			if (education.area === " ") {
				info = education.studyType;
			}

      return (
        <div key={education.institution}>
          <h3>{education.institution}</h3>
          <p className="info">{info}<span>&bull;</span>
          <em className="date">{education.endDate}</em></p>
          <p>{education.courses}</p>
        </div>)
    })

  return (
    <div className="row education">
       <div className="three columns header-col">
          <h1><span>Education</span></h1>
       </div>
       <div className="nine columns main-col">
          <div className="row item">
             <div className="twelve columns">
               {education}
             </div>
          </div>
       </div>
    </div>
  )
}

export default Education;
