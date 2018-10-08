import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class References extends Component {
  render() {

    var references = this.props.data.map(function(reference){
      return(
				<div>
          <blockquote>
             <p>{reference.reference}</p>
             <cite>{reference.name}</cite>
          </blockquote>
				</div>
		 )
    })

		const carouselConfig = {
			autoplay: true,
			framePadding: '10px',
			cellSpacing: 30,
			wrapAround: true
		};

    return (
      <section id="references">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span></span></h1>
            </div>
						<div className='columns flex-container'>
							<div className='flexslider'>
                  <Carousel
										autoplay={carouselConfig.autoplay}
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
  }
}

export default References;
