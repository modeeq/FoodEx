import React from 'react';
import Header from '../../components/Header/header.js';
import BackButton from '../../components/BackButton/back';

import './directions.css';
const Direction = () => {
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
			<BackButton />
		</div>
	);
};

export default Direction;
