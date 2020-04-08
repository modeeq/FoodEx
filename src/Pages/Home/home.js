import React, { Component } from 'react';
import Header from '../../components/Header/header.js';
import Search from '../../components/Search/search.js';
import RestaurantCard from '../../components/Restaurant-card/restaurant-card.js';
import Footer from '../../components/Footer/footer.js';

import './home.css';
export default class Home extends Component {
	render() {
		return (
			<div className='home'>
				<Header />
				<img
					src='./images/bck1.jpg'
					alt='water splashes'
					className='main_img'
				/>
				<Search />
				<div className='suggestion'>
					<div className='r1'>
						<p>Chinese Food </p>
						<div className='res_list'>
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
						</div>
					</div>

					<div className='r2'>
						<p>Chinese Food </p>
						<div className='res_list'>
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
						</div>
					</div>

					<div className='r3'>
						<p>Chinese Food </p>
						<div className='res_list'>
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
							<RestaurantCard />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
