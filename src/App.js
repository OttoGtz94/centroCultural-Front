import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
// HOOKS
import ScrollState from './hooks/scrollState';

// COMPONENTES
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/page1/Home';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<ScrollState>
				<Router>
					<Header />
					<Menu />
					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route
							exact
							path='/home'
							component={Home}></Route>
					</Switch>
					<Footer />
				</Router>
			</ScrollState>
		</div>
	);
}

export default App;
