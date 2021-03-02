import React, { useContext } from 'react';
// hooks
import ScrollContext from '../../hooks/scrollContext';
// components
import Objetivo from './Objetivo';

const Objetivos = () => {
	const scrollContext = useContext(ScrollContext);
	const { scroll } = scrollContext;
	return (
		<section
			className={
				scroll
					? 'pagina objetivos saltoPagina'
					: 'pagina objetivos'
			}>
			<h1>NUESTROS OBJETIVOS</h1>
			<Objetivo />
		</section>
	);
};

export default Objetivos;
