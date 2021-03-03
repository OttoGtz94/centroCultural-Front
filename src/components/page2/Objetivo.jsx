import React from 'react';

const Objetivo = ({ id, msg }) => {
	return (
		<div className='objetivo'>
			<div className='contenedorCirculo'>
				<div className='circuloObjetivo'>
					<span>{id}</span>
				</div>
			</div>
			<div className='objetivoTexto'>
				<p>{msg}</p>
			</div>
		</div>
	);
};

export default Objetivo;
