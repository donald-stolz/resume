import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import data from './Data/resumeData'
import { Header, Footer } from './Components/Common/';
import { About, Contact } from './Components/Contact/';
import { Resume } from './Components/Resume/';
import { Testimonials, Portfolio, Highlights } from './Components/Featured/';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: data
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
		console.log(data);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
				<Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;

// <Highlights data={this.state.resumeData.resume}/>
// <Contact data={this.state.resumeData.main}/>
