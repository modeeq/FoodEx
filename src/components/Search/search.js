import React from 'react';
import './search.css';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			radius: 20
		};
	}
	handleSearch_input = e => {
		this.setState({
			search: e.target.value
		});
	};
	handleSearch_radius = e => {
		this.setState({
			radius: e.target.value
		});
	};
	handleSubmit = () => {
		console.log('er');
		if (this.state.search !== '') {
			window.location.href =
				'/search/' + this.state.search + '/' + this.state.radius;
		} else {
			alert('please enter a valid restaurants name or food type ');
		}
	};

	render(props) {
		return (
			<div className='searchBox'>
				<input
					className='search_input'
					type='text'
					placeholder='search nearby restaurants...'
					onChange={this.handleSearch_input.bind(this)}
				/>
				<input
					className='search_radius'
					type='number'
					placeholder='radius'
					onChange={this.handleSearch_radius.bind(this)}
				/>
				<button className='submit' onClick={this.handleSubmit}>
					Search
				</button>
			</div>
		);
	}
}
