import React from 'react';
import './restaurant-card.css';

const RestaurantCard = props => {
	return (
		<div className='restaurant-card'>
			<div className='img'>
				<img src={props.restaurant.thumb} alt='food' />
			</div>
			<div className='name'>
				<p>{props.restaurant.name}</p>
			</div>
			<div className='rating'>
				{/* round rating to closest .5 */}
				<img
					src={
						'/images/rating/' +
						Math.ceil(props.restaurant.user_rating.aggregate_rating / 0.5) *
							0.5 +
						'.png'
					}
					alt='rating'
				/>
			</div>
			<div className='info'>
				<p>{props.restaurant.cuisines.split(',')[0]}</p>
				<p id='reviews'>{props.restaurant.all_reviews_count} reviews</p>
				<p>{props.restaurant.location.locality.split(',')[0]}</p>
			</div>
			<div className='action'>
				<button
					onClick={event =>
						(window.location.href = '/about/' + props.restaurant.id)
					}
				>
					Learn More
				</button>
				<button
					onClick={event =>
						(window.location.href = '/direction/' + props.restaurant.id)
					}
				>
					Directions
				</button>
			</div>
			<div className='options'>
				<p>{props.restaurant.phone_numbers.substring(0, 14)}</p>
				<p>10 miles</p>
			</div>
		</div>
	);
};
export default RestaurantCard;
