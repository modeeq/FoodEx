import React, { Component } from 'react';
import Header from '../../components/Header/header.js';
import Search from '../../components/Search/search.js';
import RestaurantCard from '../../components/Restaurant-card/restaurant-card.js';
import BackButton from '../../components/BackButton/back';
import './search.css';

export default class Search_result extends Component {
	constructor(props) {
		super(props);
		this.state = {
			radius: this.props.match.params.radius,
			term: this.props.match.params.term.replace(' ', '%'),
			lon: '-84.3880',
			lat: '33.7490',
			results: [],
			isLoaded: false
		};
	}
	loadData = () => {
		const user_key = '***';
		const url =
			'https://developers.zomato.com/api/v2.1/search?q=' +
			this.state.term +
			'&lat=' +
			this.state.lat +
			'&lon=' +
			this.state.lon +
			'&radius=' +
			this.state.radius;
		fetch(url, {
			headers: new Headers({
				'user-key': user_key
			})
		})
			.then(res => res.json())
			.then(data =>
				this.setState({ results: data.restaurants, isLoaded: true })
			);
	};
	componentDidMount() {
		this.loadData();
	}
	render(props) {
		return (
			<div className='search_result'>
				<BackButton />
				<Header />
				<Search />
				<div className='result'>
					<p id='results'>Result </p>
					<div className='list'>
						{this.state.isLoaded
							? this.state.results.map(restaurants => (
									<RestaurantCard
										restaurant={restaurants.restaurant}
										key={restaurants.restaurant.id}
									/>
							  ))
							: 'loading'}
					</div>
				</div>
			</div>
		);
	}
}
