import React from 'react';

const BulletPoints = (props) => {

	return (
		<div className='bullet-points'>
				{props.points.map(function (point, index) {
						return (
								<p key={index} className='point'>
										<span className='bullet-point'> &bull; </span>
										{point}
								</p>
						);
				})}
		</div>
 )
}

export default BulletPoints;
