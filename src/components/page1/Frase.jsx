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
		{
			id: 2,
			frase:
				'Bajo condiciones de tiranía es más fácil actuar que pensar.',
			autor: 'Hannah Arendt',
		},
		{
			id: 3,
			frase:
				'Hay un precepto bajo el cual he vivido: prepárate para lo peor, espera lo mejor y acepta lo que venga',
			autor: 'Hannah Arendt',
		},
	];

	let posicionFrase = 1;
	let primeraFrase = frases.find(
		frase => frase.id === posicionFrase,
	);

	const cambiarFrase = () => {
		posicionFrase = posicionFrase + 1;
		primeraFrase = frases.find(
			frase => frase.id === posicionFrase,
		);
		// console.log(posicionFrase);
		// console.log(primeraFrase);

		if (primeraFrase === undefined) {
			// console.log('Ya no hay frases');
			posicionFrase = 0;
			cambiarFrase();
			return;
		}

		document.querySelector('.frase').textContent =
			primeraFrase.frase;
		document.querySelector('.autorFrase').textContent =
			primeraFrase.autor;
		return;
	};

	return (
		<div className='contenedorFrase'>
			{/* {frases.map(frase => (
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
			))} */}
			<div
				className='idFrase'
				key={primeraFrase.id}
				onClick={() => cambiarFrase()}>
				<FontAwesomeIcon
					icon={faQuoteLeft}
					className='iconComilla'
				/>
				<span className='frase'>{primeraFrase.frase}</span>
				<FontAwesomeIcon
					icon={faQuoteRight}
					className='iconComilla'
				/>
				<span className='autorFrase'>
					{primeraFrase.autor}
				</span>
			</div>
		</div>
	);
};

export default Frase;
