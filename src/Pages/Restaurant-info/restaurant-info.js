import React from 'react';
import './restaurant-info.css';
import Header from '../../components/Header/header.js';
const RestaurantInfo = () => {
	return (
		<div className='about'>
			<Header />
			<button id='back' onClick={event => (window.location.href = '/')}>
				back
			</button>
			<div className='images'>
				<img src='images/img.png' alt='restaurant' />
				<img src='images/img2.png' alt='restaurant' />
				<img src='images/img.png' alt='restaurant' />
				<img src='images/img2.png' alt='restaurant' />
				<img src='images/img.png' alt='restaurant' />
				<img src='images/img2.png' alt='restaurant' />
				<img src='images/img.png' alt='restaurant' />
				<img src='images/img2.png' alt='restaurant' />
				<img src='images/img.png' alt='restaurant' />
			</div>
			<div className='reviewsSection'>
				<h1>Atlanta Breakfast Club</h1>
				<h5>
					Main Road 5, Aurangabad, Maharashtra, 431003 Cidco Cannoughe
					Aurangabad India
				</h5>
				<div className='tags'>
					<button>Maharashintrain</button>
					<button>Italian</button>
					<button>cheap</button>
					<button>fast food</button>
					<button>downtown</button>
				</div>
				<div className='r_options'>
					<p>Delivery</p>
					<p>Takeaways</p>
				</div>
				<ul>
					<li>most recent</li>
					<li>oldest</li>
					<li id='rating'>
						<img src='images/rating.png' alt='rating' />
					</li>
				</ul>
				<div className='reviews'>
					<div className='review'>
						<img src='images/rating.png' alt='rating' />
						<p>
							I had ordered mango milk shake n mango mastani from Cafe Creme
							cidco branch on swiggy I had ordered mango milk shake n mango
							mastani from Cafe Creme cidco branch on swiggy I had ordered mango
							milk shake n mango mastani from Cafe Creme cidco branch on swiggy
							More
						</p>
						<h6>Written by Devid Alba from 10 months ago</h6>
					</div>
					<div className='review'>
						<img src='images/rating.png' alt='rating' />
						<p>
							I had ordered mango milk shake n mango mastani from Cafe Creme
							cidco branch on swiggy I had ordered mango milk shake n mango
							mastani from Cafe Creme cidco branch on swiggy I had ordered mango
							milk shake n mango mastani from Cafe Creme cidco branch on swiggy
							More
						</p>
						<h6>Written by Devid Alba from 10 months ago</h6>
					</div>
					<div className='review'>
						<img src='images/rating.png' alt='rating' />
						<p>
							I had ordered mango milk shake n mango mastani from Cafe Creme
							cidco branch on swiggy I had ordered mango milk shake n mango
							mastani from Cafe Creme cidco branch on swiggy I had ordered mango
							milk shake n mango mastani from Cafe Creme cidco branch on swiggy
							More
						</p>
						<h6>Written by Devid Alba from 10 months ago</h6>
					</div>
				</div>
			</div>
		</div>
	);
};
export default RestaurantInfo;
