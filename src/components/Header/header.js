import React from 'react';
import './header.css';

const Header = () => {
	return (
		<div className='header'>
			<a href='/'>
				<h1>
					Food<span id='ex'>Ex</span>
				</h1>
			</a>
		</div>
	);
};

export default Header;
