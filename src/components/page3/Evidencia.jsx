import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
// imagen
import ImageEvidencia from '../../images/evidencia3.png';

const Evidencia = () => {
	return (
		<div className='cardEvidencia'>
			<div className='cardImage'>
				<FontAwesomeIcon
					className='iconoBook'
					icon={faBookReader}
				/>
				<h4>Libro Club 20-15-2016</h4>
				<img src={ImageEvidencia} alt='evidencia' />
			</div>
			<div className='cardBody'>
				<h4>Lectura en voz alta</h4>
				<p>
					Centro Hannah Arendt A.C., en conjunto con la
					cooperativa Allepetlalli te ofrece servicios de
					Club de Lecturas, un espacio en el que podrás leer
					revistas, artículos y libros.
				</p>
			</div>
			<div className='cardFooter'>
				<span>08-Jun-2016</span>
			</div>
		</div>
	);
};

export default Evidencia;
