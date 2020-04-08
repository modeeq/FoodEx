import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/home';
import About from './Pages/Restaurant-info/restaurant-info';
import Search from './Pages/Search/search';
import Directions from './Pages/Directions/directions';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/' component={Home} />
				<Route path='/Search' component={Search} />
				<Route path='/About' component={About} />
				<Route path='/direction' component={Directions} />
			</BrowserRouter>
		</div>
	);
}

export default App;
