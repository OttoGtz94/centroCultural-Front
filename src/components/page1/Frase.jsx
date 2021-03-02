import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faQuoteLeft,
	faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';

const Frase = () => {
	const frases = [
		{
			id: 1,
			frase:
				'Nada de lo que usemos, escuchemos o toquemos podrá expresarse en palabras de igual manera a como lo percibimos a través de los sentidos',
			autor: 'Hannah Arendt',
		},
		// {
		// 	id: 2,
		// 	frase:
		// 		'Bajo condiciones de tiranía es más fácil actuar que pensar.',
		// 	autor: 'Hannah Arendt',
		// },
		// {
		// 	id: 3,
		// 	frase:
		// 		'Hay un precepto bajo el cual he vivido: prepárate para lo peor, espera lo mejor y acepta lo que venga',
		// 	autor: 'Hannah Arendt',
		// },
	];
	return (
		<div className='contenedorFrase'>
			{frases.map(frase => (
				<div key={frase.id}>
					<FontAwesomeIcon
						icon={faQuoteLeft}
						className='iconComilla'
					/>
					<span className='frase'>{frase.frase}</span>
					<FontAwesomeIcon
						icon={faQuoteRight}
						className='iconComilla'
					/>
					<span className='autorFrase'>{frase.autor}</span>
				</div>
			))}
		</div>
	);
};

export default Frase;
