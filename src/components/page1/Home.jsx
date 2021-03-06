import React, { useContext } from 'react';
import Frase from './Frase';
import ScrollContext from '../../hooks/scrollContext';
// Components
import AboutUs from './AboutUs';
import Servicios from './Servicios';
import Donaciones from './Donaciones';

const Home = () => {
	const scrollContext = useContext(ScrollContext);
	const { scroll } = scrollContext;
	return (
		<section
			id='home'
			className={scroll ? `pagina saltoPagina` : 'pagina'}>
			<Frase />
			<AboutUs />
			<Servicios />
			<Donaciones />
			{/* <div
				style={{
					height: '900px',
				}}></div> */}
		</section>
	);
};

export default Home;
