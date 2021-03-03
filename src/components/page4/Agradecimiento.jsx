import React from 'react';

const Agradecimiento = ({ nombre, msg, encargados }) => {
	return (
		<div className='agradecimiento'>
			<div className='contenedorCuadrado'>
				<div className='cuadradoAgradecimiento'>
					<span>{nombre}</span>
				</div>
			</div>
			<div className='agradecimientoTexto'>
				<p>{msg}</p>
				<br />
				<span>{encargados}</span>
			</div>
		</div>
	);
};

export default Agradecimiento;
