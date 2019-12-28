import React from 'react';
import Carousel from 'nuka-carousel';

const References = props => {
    var references = props.data.map(function(reference, index) {
        return (
            <div key={reference.name}>
                <blockquote>
                    <p>{reference.reference}</p>
                    <cite>{reference.name}</cite>
                </blockquote>
            </div>
        );
    });

    const carouselConfig = {
        autoplay: true,
        autoplayInterval: 5000,
        framePadding: '10px',
        cellSpacing: 30,
        wrapAround: true,
    };

    return (
        <section id="references">
            <div className="text-container">
                <div className="row">
                    <div className="two columns header-col">
                        <h1>
                            <span />
                        </h1>
                    </div>
                    <div className="columns flex-container">
                        <div className="flexslider">
                            <Carousel
                                autoplay={carouselConfig.autoplay}
                                autoplayInterval={
                                    carouselConfig.autoplayInterval
                                }
                                wrapAround={carouselConfig.wrapAround}
                                renderCenterLeftControls={null}
                                renderCenterRightControls={null}
                                renderBottomCenterControls={null}
                            >
                                {references}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default References;
