import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../../images/perfil1.jpg';

const Modal = ({ styleModal, onClick }) => {
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
						<img src={Image1} alt='image1' />
					</div>
					<div className='contenedorNombreTitulo'>
						<h3>Martin Perez Monte Negro</h3>
						<h4>Presidente</h4>
					</div>
				</div>
				<p>
					Sed ut perspiciatis unde omnis iste natus error
					sit voluptatem accusantium doloremque laudantium,
					totam rem aperiam, eaque ipsa quae ab illo
					inventore veritatis et quasi architecto beatae
					vitae dicta sunt explicabo. Nemo enim ipsam
					voluptatem quia voluptas sit aspernatur aut odit
					aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Neque porro
					quisquam est, qui dolorem ipsum quia dolor sit
					amet, consectetur, adipisci velit, sed quia non
					numquam eius modi tempora incidunt ut labore et
					dolore magnam aliquam quaerat voluptatem. Ut enim
					ad minima veniam, quis nostrum exercitationem
					ullam corporis suscipit laboriosam, nisi ut.{' '}
					<br /> <br />
					aliquid ex ea commodi consequatur? Quis autem vel
					eum iure reprehenderit qui in ea voluptate velit
					esse quam nihil molestiae consequatur, vel illum
					qui dolorem eum fugiat quo voluptas nulla
					pariatur.
				</p>
				<div className='contenedorRS'>
					<a href='#!'>
						<FontAwesomeIcon
							icon={faFacebookSquare}
							className='fb'
						/>
					</a>
					<a href='#!'>
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
