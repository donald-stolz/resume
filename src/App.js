import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import data from './Data/resumeData';
import resume from './Data/RESUME';
import site from './Data/siteData'
import { Header, Footer } from './Components/Common/';
import { About, Contact } from './Components/Contact/';
import { Resume } from './Components/Resume/';
import { Testimonials, Portfolio, Highlights } from './Components/Featured/';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
			siteData: site,
			resume: resume,
			resumeData: data,
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
		const { resume, resumeData, siteData} = this.state;

    return (
      <div className="App">
        <Header data={resume.basics} site={siteData}/>
        <About data={resume.basics}/>
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio}/>
        <Testimonials data={resumeData.testimonials}/>
				<Footer data={resumeData.main}/>
      </div>
    );
  }
}

export default App;

// <Highlights data={this.state.resumeData.resume}/>
// <Contact data={this.state.resumeData.main}/>
