import React, { Component } from 'react';
import Header from '../../components/Header/header.js';
import Search from '../../components/Search/search.js';
import RestaurantCard from '../../components/Restaurant-card/restaurant-card.js';
import Footer from '../../components/Footer/footer.js';
import './home.css';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			fineDining: [],
			casualDining: [],
			Trending: [],
			lon: '-84.3880',
			lat: '33.7490'
		};
	}

	loadData = (lat, lon) => {
		const api = 'https://developers.zomato.com/api/v2.1/search?';
		const user_key = '*****';
		const urls = [
			api +
				'establishment_type=18&radius=50&count=10&lat=' +
				this.state.lat +
				'&lon=' +
				this.state.lon +
				'&sort=rating&order=desc',
			api +
				'establishment_type=16&radius=50&count=10&lat=' +
				this.state.lat +
				'&lon=' +
				this.state.lon +
				'&sort=rating&order=desc',

			api +
				'collection_id=1&radius=50&count=10&lat=' +
				this.state.lat +
				'&lon=' +
				this.state.lon +
				'&sort=rating&order=desc'
		];
		Promise.all(
			urls.map(url =>
				fetch(url, {
					headers: new Headers({
						'user-key': user_key
					})
				}).then(res => res.json())
			)
		).then(members => {
			this.setState({
				fineDining: members[0].restaurants,
				casualDining: members[1].restaurants,
				Trending: members[2].restaurants,
				isLoaded: true
			});
			console.log(members);
		});
	};
	componentDidMount() {
		this.loadData();
	}

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
						<p>Fine Dining</p>
						<div className='res_list'>
							{this.state.isLoaded
								? this.state.fineDining.map(restaurants => (
										<RestaurantCard
											restaurant={restaurants.restaurant}
											key={restaurants.restaurant.id}
										/>
								  ))
								: 'loading'}
						</div>
					</div>
					<div className='r2'>
						<p>Casual Dining </p>
						<div className='res_list'>
							{this.state.isLoaded
								? this.state.casualDining.map(restaurants => (
										<RestaurantCard
											restaurant={restaurants.restaurant}
											key={restaurants.restaurant.id}
										/>
								  ))
								: 'loading'}
						</div>
					</div>
					<div className='r3'>
						<p>Trending This Week </p>
						<div className='res_list'>
							{this.state.isLoaded
								? this.state.Trending.map(restaurants => (
										<RestaurantCard
											restaurant={restaurants.restaurant}
											key={restaurants.restaurant.id}
										/>
								  ))
								: 'loading'}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
