import React, { useContext, useEffect } from 'react';
// hooks
import ScrollContext from '../../hooks/scrollContext';
// components
import Evidencia from './Evidencia';
import FormularioEvidencias from './FormularioEvidencias';

// hooks
import EvidenciaContext from '../../hooks/evidenciaContext';

const Evidencias = () => {
	const scrollContext = useContext(ScrollContext);
	const { scroll } = scrollContext;

	const evidenciaContext = useContext(EvidenciaContext);
	const { listarEvidencias, evidencia } = evidenciaContext;

	// evidencias prueba
	// const nEvidencias = [
	// 	1,
	// 	2,
	// 	3,
	// 	4,
	// 	5,
	// 	6,
	// 	7,
	// 	8,
	// 	9,
	// 	10,
	// 	11,
	// 	12,
	// 	13,
	// 	14,
	// 	15,
	// 	16,
	// ];

	useEffect(() => {
		listarEvidencias();
		// eslint-disable-next-line
	}, []);

	return (
		<section
			className={
				scroll
					? 'pagina evidencias saltoPagina'
					: 'pagina evidencias'
			}>
			<h3>EVIDENCIAS</h3>

			<FormularioEvidencias />

			{/* {nEvidencias.map(evidencia => (
				<Evidencia key={evidencia} />
			))} */}
			{evidencia ? (
				evidencia.map(ev => (
					<Evidencia
						key={ev.id}
						titulo={ev.titulo}
						titulo2={ev.titulo2}
						fechaRealizada={ev.fechaRealizada}
						urlImage={ev.urlImage}
						descripcion={ev.descripcion}
						fechaPublicada={ev.fechaPublicada}
					/>
				))
			) : (
				<p>No hay evidencias</p>
			)}
		</section>
	);
};

export default Evidencias;
