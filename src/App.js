import React from 'react';
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
	return (
		<div className='App'>
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
			</Router>
		</div>
	);
}

export default App;
