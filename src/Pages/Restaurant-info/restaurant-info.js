import React from 'react';
import './restaurant-info.css';
import Header from '../../components/Header/header.js';
import BackButton from '../../components/BackButton/back';

export default class RestaurantInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			restaurant: [],
			user_reviews: [],
			active: true
		};
	}
	loadData() {
		const user_key = '**';
		const urls = [
			'https://developers.zomato.com/api/v2.1/restaurant?res_id=' +
				this.props.match.params.id,
			'https://developers.zomato.com/api/v2.1/reviews?res_id=' +
				this.props.match.params.id
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
				restaurant: members[0],
				user_reviews: members[1].user_reviews,
				isLoaded: true
			});
			console.log(members);
		});
	}
	componentDidMount() {
		this.loadData();
	}
	mostRecent() {
		this.setState({
			user_reviews: this.state.user_reviews.slice(0).reverse(),
			active: true
		});
	}
	oldest() {
		this.setState({
			user_reviews: this.state.user_reviews.slice(0).reverse(),
			active: false
		});
	}
	render() {
		return (
			<div className='about'>
				<Header />
				<BackButton />
				{this.state.isLoaded ? (
					<React.Fragment>
						<div className='images'>
							{this.state.restaurant.photos.map(photo => (
								<img src={photo.photo.thumb_url} alt='restaurant' />
							))}
						</div>
						<div className='reviewsSection'>
							<h1>{this.state.restaurant.name}</h1>
							<h5>{this.state.restaurant.location.address}</h5>
							<div className='tags'>
								{this.state.restaurant.establishment.map(establishment => (
									<button>{establishment}</button>
								))}
							</div>
							<div className='r_options'>
								<p>
									{this.state.restaurant.R.has_menu_status.delivery === -1 ? (
										<strike>Delivery</strike>
									) : (
										'Delivery'
									)}
								</p>
								<p>
									{this.state.restaurant.R.has_menu_status.takeaway === -1 ? (
										<strike>Takeaways</strike>
									) : (
										'Takeaways'
									)}
								</p>
							</div>
							<ul>
								<li
									className={this.state.active ? 'active' : ''}
									onClick={this.mostRecent.bind(this)}
								>
									most recent
								</li>
								<li
									className={!this.state.active ? 'active' : ''}
									onClick={this.oldest.bind(this)}
								>
									oldest
								</li>
								<li id='rating'>
									<img
										src={
											'/images/rating/' +
											Math.ceil(
												this.state.restaurant.user_rating.aggregate_rating / 0.5
											) *
												0.5 +
											'.png'
										}
										alt='rating'
									/>
								</li>
							</ul>
							{this.state.user_reviews.map(review => (
								<div className='review'>
									<img
										src={
											'/images/rating/' +
											Math.ceil(review.review.rating / 0.5) * 0.5 +
											'.png'
										}
										alt='rating'
									/>
									<p>{review.review.review_text} </p>
									<h6>
										Written by {review.review.user.name} from{' '}
										{review.review.review_time_friendly}
									</h6>
								</div>
							))}
						</div>
					</React.Fragment>
				) : (
					'loading'
				)}
			</div>
		);
	}
}
