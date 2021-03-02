import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	// const fecha = () => {
	// 	const anio = new Date();
	// 	console.log(anio.getFullYear());
	// };
	const anio = new Date();
	return (
		<footer>
			<div className='contactoFooter'>
				<p>
					<strong>Tel: </strong>
					55 2943 8239
				</p>
				<br />
				<p>
					<strong>Dir: </strong>Av. Piraña 100, Unidad
					Habitacional Cooperativa Allepetlalli (10.977,40
					km) 09960
				</p>
				<br />
				<a href='https://www.facebook.com/Centro-Hannah-Arendt-1375883559392126/'>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
			</div>
			<div className='mensajeFooter'>
				<p>
					Centro Hannah Arendt A.C. <br /> &copy;
					<span>{anio.getFullYear()}</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
