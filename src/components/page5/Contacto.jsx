import React, { useContext, useState } from 'react';
// components
import FormularioContacto from './FormularioContacto';
import Integrantes from './Integrantes';
import ModalBio from './Modal';
// hooks
import ScrollContext from '../../hooks/scrollContext';
// imagenes
import ImagePerfil1 from '../../images/perfil1.jpg';
import ImagePerfil2 from '../../images/perfil2.jpg';
import ImagePerfil3 from '../../images/perfil3.jpg';
// materialui
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	modal: {
		position: 'absolute',
		width: '80%',
		height: '500px',
		backgroundColor: '#dee0e1',
		border: '2px solid transparent',
		boxShadow: '0px 0px 30px black',
		padding: theme.spacing(2, 4, 3),
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		overflow: 'scroll',
	},
}));

const Contacto = () => {
	const integrantes = [
		{
			id: 1,
			nombre: 'Martin Perez Monte Negro',
			puesto: 'Presidente',
			foto: ImagePerfil1,
			bio:
				'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
			fb: 'www.fb.com/martin-perez',
			twi: 'www.twitter.com/martin-perez',
		},
		{
			id: 2,
			nombre: 'Karen Martinez Juarez',
			puesto: 'Secretaria',
			foto: ImagePerfil2,
			bio:
				'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel.',
			fb: 'www.fb.com/karen-martinez',
			twi: 'www.twitter.com/karen-martinez',
		},
		{
			id: 3,
			nombre: 'Genesis Cuevas Marín',
			puesto: 'Contadora',
			foto: ImagePerfil3,
			bio:
				'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel.',
			fb: 'www.fb.com/karen-martinez',
			twi: 'www.twitter.com/karen-martinez',
		},
	];
	const scrollContext = useContext(ScrollContext);
	const { scroll } = scrollContext;

	const styles = useStyles();
	const [modal, abrirModal] = useState(false);

	// // fn para abrir o cerrar modal
	const abrirCerraModal = () => {
		abrirModal(!modal);
	};
	return (
		<section
			className={
				scroll
					? 'pagina contacto saltoPagina'
					: 'pagina contacto'
			}>
			<h3>Contacto</h3>
			<FormularioContacto />
			<div className='contenedorIntegrantes'>
				{integrantes.map(integrante => (
					<Integrantes
						nombre={integrante.nombre}
						puesto={integrante.puesto}
						foto={integrante.foto}
						onClick={abrirCerraModal}
					/>
				))}
				{/* <Integrantes /> */}
				<Modal open={modal} onClose={abrirCerraModal}>
					{/* {body} */}
					<ModalBio
						styleModal={styles.modal}
						onClick={abrirCerraModal}
					/>
				</Modal>
			</div>
		</section>
	);
};

export default Contacto;
