import React from 'react';

const References = (props) => {
    const references = props.data.map(function (reference, index) {
        const divider = index + 1 === array.length ? <br /> : <hr />;
        const company = '';
        const website = '';
        const workImage = 'images/work/' + company; //Not correct

        return (
            <div className="row item" key={company}>
                <div className="three columns image-cont">
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        <img
                            alt={company}
                            className="work-pic"
                            src={workImage}
                        />
                    </a>
                </div>
                <div className="nine columns">
                    <div key={company}>
                        <h3>{company}</h3>
                        <p className="info">{reference.name}</p>
                        <p className="details">{reference.reference}</p>
                    </div>
                </div>
                {divider}
            </div>
        );
    });

    return (
        <section id="references">
            <div className="row reference ">
                <div className="three columns header-col">
                    <h1>
                        <span>References</span>
                    </h1>
                </div>

                <div className="twelve columns main-col">{references}</div>
            </div>
        </section>
    );
};

export default References;
