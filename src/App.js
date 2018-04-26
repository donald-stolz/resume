import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import resume from './Data/RESUME';
import site from './Data/siteData'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { About, Contact } from './Components/Information/';
import { Resume, References, Portfolio, Highlights } from './Components/Sections/';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
			siteData: site,
			resume: resume,
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
		const { resume, siteData} = this.state;

    return (
      <div className="App">
        <Header data={resume.basics} site={siteData}/>
        <About data={resume.basics}/>
        <Resume data={resume}/>
        <Portfolio data={resume.portfolio}/>
        <References data={resume.references}/>
				<Footer data={resume.basics}/>
      </div>
    );
  }
}

export default App;
