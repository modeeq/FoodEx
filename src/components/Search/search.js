import React from 'react';
import './search.css';

const Search = () => {
	return (
		<div className='searchBox'>
			<input className='search_input' type='text' placeholder='search...' />
			<img
				className='search_icon'
				src='./images/search_icon.png'
				alt='search icon'
			/>
		</div>
	);
};

export default Search;
