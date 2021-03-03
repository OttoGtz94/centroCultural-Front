import React from 'react';

const FormularioContacto = () => {
	return (
		<form className='formularioContacto'>
			<input type='text' name='nombre' placeholder='Nombre' />
			<input
				type='email'
				name='correo'
				placeholder='Correo'
			/>
			<textarea
				name='mensaje'
				cols='30'
				rows='10'
				placeholder='Escribenos un mensaje'
			/>
			<button>Enviar</button>
		</form>
	);
};

export default FormularioContacto;
