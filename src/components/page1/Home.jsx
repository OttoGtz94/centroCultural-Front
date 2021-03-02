import React, { useContext } from 'react';
import Frase from './Frase';
import ScrollContext from '../../hooks/scrollContext';
// Components
import AboutUs from './AboutUs';
import Servicios from './Servicios';

const Home = () => {
	const scrollContext = useContext(ScrollContext);
	const { scroll } = scrollContext;
	return (
		<div
			id='home'
			className={scroll ? `pagina saltoPagina` : 'pagina'}>
			<Frase />
			<AboutUs />
			<Servicios />
			{/* <div
				style={{
					height: '900px',
				}}></div> */}
		</div>
	);
};

export default Home;
