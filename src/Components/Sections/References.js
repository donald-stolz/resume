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
			// framePadding: '10px',
			// cellSpacing: 30,
			wrapAround: true
		};

    return (
      <section id="references">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>References</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <Carousel
										autoplay={carouselConfig.autoplay}
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
