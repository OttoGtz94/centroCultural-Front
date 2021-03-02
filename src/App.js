import React, { useState, useEffect, useRef } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
// COMPONENTES
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/page1/Home';

function App() {
	// state scroll
	const [scroll, setScroll] = useState(false);

	// ref scroll
	const navRef = useRef(0);

	// fn scroll
	const scrollHandler = () => {
		const valorScroll = document.documentElement.scrollTop;
		// const valorRef =
		// 	navRef.current.ownerDocument.scrollingElement.scrollTop;
		if (valorScroll > 397) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
	}, [scroll]);

	return (
		<div className='App'>
			<Router>
				<Header />
				<Menu
					// ref={navRef}
					referencia={navRef}
					sticky={scroll ? 'navSticky' : null}
				/>
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route
						exact
						path='/home'
						component={Home}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
