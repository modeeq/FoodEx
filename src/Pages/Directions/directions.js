import React from 'react';
import Header from '../../components/Header/header.js';
import './directions.css';
const Direction = () => {
	const back = () => {
		window.history.back();
	};

	return (
		<div className='directions'>
			<Header />
			<h1>Atlanta Breakfast Club</h1>
			<h5>
				Main Road 5, Aurangabad, Maharashtra, 431003 Cidco Cannoughe Aurangabad
				India
			</h5>
			<div className='direction'>
				<img src='images/map.png' alt=''></img>
			</div>
			<button onClick={back}>Back</button>
		</div>
	);
};

export default Direction;
