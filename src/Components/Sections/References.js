import React from 'react';

const CompanyInfo = {
    ud: {
        image: 'unstoppable-domains-logo.png',
        website: 'https://unstoppabledomains.com/',
    },
    axlry: { image: 'axlry-logo.png', website: 'https://axlry.com' },
    tke: { image: 'tke-logo.jpg', website: 'http://tkeloyola.org' },
};

const References = (props) => {
    console.log(props);
    const references = props.data.map(function (reference, index, array) {
        const { name, reference: quote } = reference;
        const divider = index + 1 === array.length ? <br /> : <hr />;
        let company = '';
        if (name.includes('Unstoppable Domains')) {
            company = 'ud';
        } else if (name.includes('Elevator')) {
            company = 'axlry';
        } else if (name.includes('TKE')) {
            company = 'tke';
        }
        const { website } = CompanyInfo[company];
        const workImage = `images/work/${CompanyInfo[company].image}`;

        return (
            <div className="row item" key={index}>
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
                        <p className="details">"{quote}"</p>
                        <p className="info">{name}</p>
                    </div>
                </div>
                {divider}
            </div>
        );
    });

    return (
        <section id="references">
            <div className="row reference">
                <div className="three columns header-col ref-span">
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
