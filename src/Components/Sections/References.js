import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class References extends Component {
  render() {

    var references = this.props.data.map(function(reference){
      return  <li key={reference.name}>
          <blockquote>
             <p>{reference.reference}</p>
             <cite>{reference.name}</cite>
          </blockquote>
       </li>
    })

		const carouselConfig = {
			autoplay: true,
			decorators: [],
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
							<div style={{height: '60vh', display: 'flex', alignContent: 'center',}}>
                  <Carousel
										autoplay={carouselConfig.autoplay}
										decorators={carouselConfig.decorators}
										wrapAround={carouselConfig.wrapAround}
									>
                      {references}
                  </Carousel>
									</div>
             </div>
         </div>
   </section>
    );
  }
}

export default References;
