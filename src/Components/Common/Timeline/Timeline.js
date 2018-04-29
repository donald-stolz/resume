import React from 'react';
import { withStyles } from 'material-ui/styles';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import {styles} from './styles'

const responsiveStyle = theme => ({
	container: {
		width: '100%',
		top: '16px',
		position: 'absolute',
		[theme.breakpoints.down('sm')]: {
			position: 'relative',
		}
	}
})

function Timeline(props) {

    var events = props.data.map(function(event, i) {
			var position = ((i%2) ? 'right' : 'left');
			const mirror = ((i%2) ? styles.leftContent : styles.rightContent)
			const mirrorPosition = {...responsiveStyle.container, mirror}
			console.log(mirrorPosition);
			return (
				<VerticalTimelineElement
					position={position}
					iconStyle={styles.icon}
					icon={<Icon style={styles.iconSize}> add_circle</Icon>}
				>
					{console.log(props)}
	        <h3>{event.title}</h3>
	        <h5>{event.date}</h5>
	        <p>{event.description}</p>
					<Button
							href={event.link}
							size="medium"
							variant="raised"
							>
						Learn More
					</Button>
					<span style={mirrorPosition}>
						<img
							style={styles.image}
							src="https://media.licdn.com/dms/image/C5103AQH7tdSf3cCB3A/profile-displayphoto-shrink_200_200/0?e=1530219600&v=beta&t=LtBiRYhL8LlUyfeCul4foXACUpzvTvBW5igs7Mo7yvo"
							alt="Smiley face"
						/>
					</span>
	      </VerticalTimelineElement>);
    })

  return (
		<section id="events">
	    <div className="row events">
	        <h1><span>events</span></h1>

				<VerticalTimeline>
					{events}
				</VerticalTimeline>
	    </div>
		</section>

  );
}

export default withStyles(responsiveStyle)(Timeline);
