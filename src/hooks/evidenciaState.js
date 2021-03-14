import { useReducer } from 'react';
import { LISTAR_EVIDENCIAS } from '../types';
import evidenciaContext from './evidenciaContext';
import evidenciaReducer from './evidenciaReducer';

const EvidenciaState = props => {
	const evidencias = [
		{
			id: 1,
			titulo: 'Lectura en voz alta',
			titulo2: 'Libro club 06-09-2019',
			fechaRealizada: '10-06-2019',
			urlImage:
				'https://scontent.fmex11-3.fna.fbcdn.net/v/t1.0-9/160219604_2745520382428430_7120003806402423753_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=973b4a&_nc_ohc=OKQSAwuqSI8AX-bF3Ne&_nc_ht=scontent.fmex11-3.fna&oh=0a24365e422d5d1beaaae42c4677a9ee&oe=60725A44',
			descripcion:
				'Centro Hannah Arendt A.C., en conjunto con la cooperativa Allepetlalli te ofrece servicios de Club de Lecturas, un espacio en el que podrás leer revistas, artículos y libros.',
			fechaPublicada: 'Sabado 13 de Marzo de 2021',
		},
		{
			id: 2,
			titulo: 'Jornadas Sociales',
			titulo2: 'SEDESO',
			fechaRealizada: '11-07-2019',
			urlImage:
				'https://scontent.fmex11-1.fna.fbcdn.net/v/t1.0-9/158094169_2745107365803065_2565521953222925877_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=_q0FO78jeXEAX8xlfgT&_nc_ht=scontent.fmex11-1.fna&oh=1e2b5cfba81a7018f3d4e86d71ea7e7d&oe=607361E8',
			descripcion:
				'1.LENTES GRATIS (a las primeras 100 personas), 2. LA TARJETA CAPITAL SOCIAL, 3. REGISTRO EN EL SISTEMA DE ALERTA SOCIAL, Estudios de Laboratorio (CHOPO) y Anteojos a Bajo Costo.',
			fechaPublicada: 'Sabado 17 de Marzo de 2021',
		},
		{
			id: 3,
			titulo: 'Jornadas Sociales',
			titulo2: 'SEDESO',
			fechaRealizada: '19-01-2020',
			urlImage:
				'https://scontent.fmex11-1.fna.fbcdn.net/v/t1.0-9/159243868_2744062245907577_4484704770325530312_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=973b4a&_nc_ohc=xftZsiONcoYAX-X3O6d&_nc_ht=scontent.fmex11-1.fna&oh=a2a85515209e1fcb14c443cf7d5aebff&oe=60734F83',
			descripcion:
				'El ingenioso hidalgo Don Quijote de la Mancha, narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante nombrando a sí mismo como Don Quijote de la Mancha.',
			fechaPublicada: 'Lunes 17 de Marzo de 2021',
		},
		{
			id: 4,
			titulo: 'Jornadas Sociales',
			titulo2: 'SEDESO',
			fechaRealizada: '19-01-2020',
			urlImage:
				'https://scontent.fmex11-1.fna.fbcdn.net/v/t1.0-9/159243868_2744062245907577_4484704770325530312_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=973b4a&_nc_ohc=xftZsiONcoYAX-X3O6d&_nc_ht=scontent.fmex11-1.fna&oh=a2a85515209e1fcb14c443cf7d5aebff&oe=60734F83',
			descripcion:
				'El ingenioso hidalgo Don Quijote de la Mancha, narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante nombrando a sí mismo como Don Quijote de la Mancha. narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante nombrando a sí mismo como Don Quijote de la Mancha narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante nombrando a sí mismo como Don Quijote de la Mancha',
			fechaPublicada: 'Lunes 17 de Marzo de 2021',
		},
	];
	const initialState = {
		evidencia: null,
		evidencias,
	};

	const [state, dispatch] = useReducer(
		evidenciaReducer,
		initialState,
	);

	const listarEvidencias = () => {
		dispatch({
			type: LISTAR_EVIDENCIAS,
			payload: evidencias,
		});
	};

	return (
		<evidenciaContext.Provider
			value={{
				evidencia: state.evidencia,
				// evidencias: state.evidencias,
				listarEvidencias,
			}}>
			{props.children}
		</evidenciaContext.Provider>
	);
};

export default EvidenciaState;
