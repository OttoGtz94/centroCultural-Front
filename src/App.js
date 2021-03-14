import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
// HOOKS
import ScrollState from './hooks/scrollState';
import BiografiaState from './hooks/biografiaState';
import EvidenciaState from './hooks/evidenciaState';

// COMPONENTES
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/page1/Home';
import Objetivos from './components/page2/Objetivos';
import Evidencias from './components/page3/Evidencias';
import Agradecimientos from './components/page4/Agradecimientos';
import Contacto from './components/page5/Contacto';
import Footer from './components/Footer';
import ScrollBotton from './components/ScrollBotton';

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
						<Route
							exact
							path='/objetivos'
							component={Objetivos}
						/>
						<EvidenciaState>
							<Route
								exact
								path='/evidencias'
								component={Evidencias}
							/>
						</EvidenciaState>
						<Route
							exact
							path='/agradecimientos'
							component={Agradecimientos}
						/>
						<BiografiaState>
							<Route
								exact
								path='/contacto'
								component={Contacto}
							/>
						</BiografiaState>
					</Switch>
					<ScrollBotton />
					<Footer />
				</Router>
			</ScrollState>
		</div>
	);
}

export default App;
