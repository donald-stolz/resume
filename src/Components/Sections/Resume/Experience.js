import React from 'react';
import moment from 'moment';
import { BulletPoints } from '../../Common';

const Experience = props => {
    var experiences = props.data.map((experience, index, array) => {
        // TODO: Map highlights into a table or list for styling
        const nextIndex = index + 1;
        const divider = nextIndex === array.length ? <br /> : <hr />;
        var workImage = 'images/work/' + experience.image;
        const startDate = moment(experience.startDate).format('MMMM YYYY');
        const endDate = experience.endDate
            ? moment(experience.endDate).format('MMMM YYYY')
            : 'Present';

        return (
            <div className="row item" key={experience.company}>
                <div className="three columns image-cont">
                    <a href={experience.website} target="_blank">
                        <img
                            alt={experience.company}
                            className="work-pic"
                            src={workImage}
                        />
                    </a>
                </div>
                <div className="nine columns">
                    <div key={experience.company}>
                        <h3>{experience.company}</h3>
                        <p className="info">
                            {experience.position}
                            <span>&bull;</span>
                            <em className="date">
                                {startDate} - {endDate}
                            </em>
                        </p>
                        <p className="details">{experience.summary}</p>
                        <BulletPoints points={experience.highlights} />
                    </div>
                </div>
                {divider}
            </div>
        );
    });

    return (
        <div className="row experience ">
            <div className="three columns header-col">
                <h1>
                    <span>Experience</span>
                </h1>
            </div>

            <div className="twelve columns main-col">{experiences}</div>
        </div>
    );
};

export default Experience;
