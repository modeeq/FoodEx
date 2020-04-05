import React, { Component } from 'react';
import Header from '../../components/Header/header.js';
import Search from '../../components/Search/search.js';
import RestaurantCard from '../../components/Restaurant-card/restaurant-card.js';
import Footer from '../../components/Footer/footer.js';

import './search.css';

export default class Search_result extends Component {
	render() {
		return (
			<div className='search_result'>
				<Header />
				<Search />
				<div className='result'>
					<p id='result'>Result </p>
					<div className='list'>
						<RestaurantCard />
						<RestaurantCard />
						<RestaurantCard />
						<RestaurantCard />
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
		);
	}
}
