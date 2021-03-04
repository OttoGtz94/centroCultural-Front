import React from 'react';

const Integrantes = ({ nombre, puesto, foto, onClick }) => {
	return (
		<div className='integrante' onClick={onClick}>
			<div className='foto'>
				<img src={foto} alt='perfil' />
			</div>
			<div className='informacion'>
				<h4>{nombre}</h4>
				<h5>{puesto}</h5>
			</div>
		</div>
	);
};

export default Integrantes;
