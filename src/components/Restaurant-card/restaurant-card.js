import React from 'react';
import './restaurant-card.css';

const RestaurantCard = () => {
	return (
		<div className='restaurant-card'>
			<div className='img'>
				<img src='./images/img2.png' alt='food' />
			</div>
			<div className='name'>
				<p>Atlanta Breakfast Club</p>
			</div>
			<div className='rating'>
				<img src='images/rating.png' alt='rating' />
			</div>
			<div className='info'>
				<p> cafe, Desserts</p>
				<p id='reviews'>5 reviews</p>
				<p>open now</p>
			</div>
			<div className='action'>
				<button onClick={event => (window.location.href = '/about')}>
					Learn More
				</button>
				<button onClick={event => (window.location.href = '/direction')}>
					Directions
				</button>
			</div>
			<div className='options'>
				<p>Delivery</p>
				<p>Takeaways</p>
			</div>
		</div>
	);
};
export default RestaurantCard;
