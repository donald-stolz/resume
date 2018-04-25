import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ImageIcon from '../Common/ImageIcon';
import Button from 'material-ui/Button';

// TODO: add highlights class to css
// TODO: Add icons or avatar
// NOTE: Line is white either consider changing bacground or figure out how to change style
const Highlights = (props) => {


  if (props.data) {
    var highlights = props.data.highlights.map(function(highlight) {
      return (
				<VerticalTimelineElement
	        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ImageIcon/>}
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
    <div className="row highlights">
      <div className="three columns header-col highlights-col">
        <h1><span>Highlights</span></h1>
      </div>
			<VerticalTimeline>
				{highlights}
			</VerticalTimeline>
    </div>
  );
}

export default Highlights;


// highlight : {
//   date:
//   title:
//   subtitle:
//   description:
// }
