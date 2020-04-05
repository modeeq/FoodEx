import React from 'react';
import './footer.css';
import Search from '../Search/search.js';
import Header from '../Header/header';
const Footer = () => {
	return (
		<div className='footer'>
			<Header />
			<Search />
		</div>
	);
};

export default Footer;
