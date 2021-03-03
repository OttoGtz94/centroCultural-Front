import React, { useContext } from 'react';
// hooks
import ScrollContext from '../../hooks/scrollContext';
// components
import Evidencia from './Evidencia';
import FormularioEvidencias from './FormularioEvidencias';

const Evidencias = () => {
	const scrollContext = useContext(ScrollContext);
	const { scroll } = scrollContext;

	// evidencias prueba
	const nEvidencias = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
	];
	return (
		<section
			className={
				scroll
					? 'pagina evidencias saltoPagina'
					: 'pagina evidencias'
			}>
			<h3>EVIDENCIAS</h3>
			<FormularioEvidencias />
			{nEvidencias.map(evidencia => (
				<Evidencia key={evidencia} />
			))}
		</section>
	);
};

export default Evidencias;
