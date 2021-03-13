import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import BiografiaContext from '../../hooks/biografiaContext';

const Modal = ({ styleModal, onClick }) => {
	const biografiaContext = useContext(BiografiaContext);
	const { bioActual } = biografiaContext;
	return (
		<div className={styleModal}>
			<div className='modalBio'>
				<div className='contenedorCerrar'>
					<FontAwesomeIcon
						icon={faWindowClose}
						className='btnCerrar'
						onClick={onClick}
					/>
				</div>
				<div className='contenedorPerfil'>
					<div className='contenedorImg'>
						<img
							src={bioActual[0].foto}
							alt='image1'
							onClick={() => console.log(bioActual[0])}
						/>
					</div>
					<div className='contenedorNombreTitulo'>
						<h3>{bioActual[0].nombre}</h3>
						<h4>{bioActual[0].puesto}</h4>
					</div>
				</div>
				<p>{bioActual[0].bio}</p>
				<div className='contenedorRS'>
					<a href={bioActual[0].fb}>
						<FontAwesomeIcon
							icon={faFacebookSquare}
							className='fb'
						/>
					</a>
					<a href={bioActual[0].twi}>
						<FontAwesomeIcon
							icon={faTwitterSquare}
							className='twitter'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Modal;
