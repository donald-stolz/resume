import React from 'react';
import {BulletPoints} from '../../Common'

const Education = (props) => {

    var education = props.data.map((education, index, array) => {

			const nextIndex = index + 1;
			const divider = nextIndex === array.length ? (<br/>) : (<hr/>);
			var schoolImage = 'images/education/'+education.image;


			var info = education.studyType +" in " + education.area;
			if (education.area === " ") {
				info = education.studyType;
			}

      return (
				<div className="row item">

					<div className='three columns image-cont'>
							<img className='school-pic' src={schoolImage}/>
					</div>
					<div className='nine columns'>
		        <div key={education.institution}>
		          <h3>{education.institution}</h3>
		          <p className="info">{info}<span>&bull;</span>
		          <em className="date">{education.endDate}</em></p>
							<BulletPoints points={education.courses}/>
		        </div>
					</div>
					{divider}
				</div>
			)
    })

  return (
    <div className="row education">
       <div className="three columns header-col">
          <h1><span>Education</span></h1>
       </div>
       <div className="twelve columns main-col">
         {education}
       </div>
    </div>
  )
}

export default Education;
