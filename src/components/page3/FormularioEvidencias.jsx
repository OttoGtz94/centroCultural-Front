import React from 'react';

const FormularioEvidencias = () => {
	return (
		<form className='formEvidencias'>
			<select
				name='porNombre'
				id='porNombre'
				className='select'
				defaultValue>
				<option value='' key='' selected>
					Ordenar por
				</option>
				<option value='alfabetoDes' key='a-z'>
					A-Z
				</option>
				<option value='alfabetoAs' key='z-a'>
					Z-A
				</option>
				<option value='fechaAct' key='recientes'>
					Más recientes
				</option>
				<option value='fechaAnt' key='pasadas'>
					Más antiguos
				</option>
			</select>
			<input
				type='date'
				name='fecha'
				id='fecha'
				className='fecha'
			/>
			<input
				type='text'
				name='nombre'
				placeholder='Buscar'
				className='buscar'
			/>
		</form>
	);
};

export default FormularioEvidencias;
