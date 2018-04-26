import React, { Component } from 'react';

class About extends Component {

	constructor(props){
		super(props);

		const { data } = this.props;
		var profilepic = "/images/"+ data.picture;
		this.state = {
			data,
			profilepic
		}
	}

  render() {

		const { data } = this.state;
		const { location } = data;
		console.log(data);

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={this.state.profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{data.summary}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{data.name}</span><br />
						   <span>{location.address}<br />
						         {location.city} {location.region}, {location.postalCode}
                   </span><br />
						   <span>{data.phone}</span><br />
                     <span>{data.email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={data.resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
