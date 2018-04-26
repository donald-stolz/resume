import React, { Component } from 'react';

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

    return (
      <section id="references">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>References</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {references}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default References;
