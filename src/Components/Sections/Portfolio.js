import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
					<a target="_blank" href={projects.url} title={projects.title}>
	           <div className="item-wrap">
	             <img alt={projects.title} src={projectImage} />
	             <div className="overlay">
	                <div className="portfolio-item-meta">
	               <h5>{projects.title}</h5>
	                   <p>{projects.description}</p>
	                </div>
	              </div>
	            <div className="link-icon"><i className="fa fa-link"></i></div>
	          </div>
					</a>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">
				<h1><span> Portfolio </span> </h1>

         <div className="twelve columns collapsed">

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
