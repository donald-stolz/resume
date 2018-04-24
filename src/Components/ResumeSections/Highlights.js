import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

// TODO: add highlights class to css
const Highlights = (props) => {


  if (props.data) {
    var highlights = props.data.highlights.map(function(highlight) {
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={highlight.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">{highlight.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{highlight.subtitle}</h4>
        <p>{highlight.description}</p>
        <p>Add Link Here</p>
      </VerticalTimelineElement>
    })
  }

  return (
    <div className="row highlights">
      <div className="three columns header-col">
        <h1><span>Highlights</span></h1>
      </div>
      <div className="nine columns main-col">
        <VerticalTimeline>
          {highlights}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Highlights;


highlight : {
  date:
  title:
  subtitle:
  description:
}
