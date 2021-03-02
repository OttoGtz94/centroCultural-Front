import React, { useContext } from 'react';
import Frase from './Frase';
import AboutUs from './AboutUs';
import ScrollContext from '../../hooks/scrollContext';

const Home = () => {
	const scrollContext = useContext(ScrollContext);
	const { scroll } = scrollContext;
	return (
		<div
			id='home'
			className={scroll ? `pagina saltoPagina` : 'pagina'}>
			<Frase />
			<AboutUs />
		</div>
	);
};

export default Home;
