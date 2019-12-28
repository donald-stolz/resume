import React from 'react';
import moment from 'moment';
import { BulletPoints } from '../../Common';

const Education = props => {
    var education = props.data.map((education, index, array) => {
        const nextIndex = index + 1;
        const divider = nextIndex === array.length ? <br /> : <hr />;
        const schoolImage = 'images/education/' + education.image;
        // clean up this var assign
        var info = education.studyType + ' in ' + education.area;
        if (education.area === ' ') info = education.studyType;
        const date = moment(education.endDate).format('MMMM YYYY');

        return (
            <div className="row item" key={education.institution}>
                <div className="three columns image-cont">
                    <a
                        href={education.website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            alt={education.institution}
                            className="school-pic"
                            src={schoolImage}
                        />
                    </a>
                </div>
                <div className="nine columns">
                    <div key={education.institution}>
                        <h3>{education.institution}</h3>
                        <p className="info">
                            {info}
                            {education.endDate ? (
                                <span>
                                    <span>&bull;</span>
                                    <em className="date">{date}</em>
                                </span>
                            ) : null}
                        </p>
                        <BulletPoints points={education.highlights} />
                    </div>
                </div>
                {divider}
            </div>
        );
    });

    return (
        <div className="row education">
            <div className="three columns header-col">
                <h1>
                    <span>Education</span>
                </h1>
            </div>
            <div className="twelve columns main-col">{education}</div>
        </div>
    );
};

export default Education;
