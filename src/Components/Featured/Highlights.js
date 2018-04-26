import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ImageIcon } from '../Common/';
import Button from 'material-ui/Button';

// TODO: Add icons or avatar prop

const Highlights = (props) => {


  if (props.data) {
    var highlights = props.data.highlights.map(function(highlight) {
      return (
				<VerticalTimelineElement
					icon={<ImageIcon />}
				>
	        <h3 className="vertical-timeline-element-title">{highlight.title}</h3>
	        <h4 className="vertical-timeline-element-subtitle date">{highlight.date}</h4>
	        <p>{highlight.description}</p>
					<Button
							href={highlight.link}
							size="medium"
							variant="raised"
							color="primary"
							className="vertical-timeline-button">
						Learn More
					</Button>
	      </VerticalTimelineElement>);
    })
  }

  return (
		<section id="highlights">
	    <div className="row highlights">
	        <h1><span>Highlights</span></h1>

				<VerticalTimeline>
					{highlights}
				</VerticalTimeline>
	    </div>
		</section>

  );
}

export default Highlights;


// highlight : {
//   date:
//   title:
//   subtitle:
//   description:
// }
