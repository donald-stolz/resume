import React from 'react';
import PropTypes from 'prop-types';

function SocialIcons(props) {

	var profiles = props.data.map(function(profile){

		var iconClass;

		switch (profile.network) {
			case "Twitter":
				iconClass = "fa fa-twitter";
				break;
			case "Facebook":
				iconClass = "fa fa-facebook";
				break;
			case "LinkedIn":
				iconClass = "fa fa-linkedin";
				break;
			case "Instagram":
				iconClass = "fa fa-instagram";
				break;
			case "Github":
				iconClass = "fa fa-github";
				break;
			default:
				iconClass = "fa fa-certificate";
		}

		return (
			<li key={profile.network}>
				<a href={profile.url}>
					<i className={iconClass}></i>
				</a>
			</li>
	)})

	return (
		<ul className={props.className}>
			 {profiles}
		</ul>
	);
}

export default SocialIcons;