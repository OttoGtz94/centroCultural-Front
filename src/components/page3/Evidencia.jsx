import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

const Evidencia = ({
	titulo,
	titulo2,
	fechaRealizada,
	urlImage,
	descripcion,
	fechaPublicada,
}) => {
	return (
		<div className='cardEvidencia'>
			<div className='cardImage'>
				<FontAwesomeIcon
					className='iconoBook'
					icon={faBookReader}
				/>
				<h4>
					{titulo2}
					<span>{fechaRealizada}</span>
				</h4>
				<img src={urlImage} alt='evidencia' />
			</div>
			<div className='cardBody'>
				<h4>{titulo}</h4>
				<p>{descripcion}</p>
			</div>
			<div className='cardFooter'>
				<span>{fechaPublicada}</span>
			</div>
		</div>
	);
};

export default Evidencia;
