import React, { useContext } from 'react';
// hooks
import ScrollContext from '../../hooks/scrollContext';
// components
import Objetivo from './Objetivo';

const Objetivos = () => {
	const listaObjetivos = [
		{
			id: 1,
			msg:
				'La atención a requerimientos básicos de subsistencia en materia de alimentación, vestido o vivienda mediante la participación organizada de la población en las acciones que mejoren sus propias condiciones en beneficio de la comunidad',
		},
		{
			id: 2,
			msg:
				'Fomentar el desarrollo e integración de personas de escasos recursos, en zonas marginadas, urbanas, suburbanas, rurales e indígenas, proporcionando a niños, adolescentes, mujeres, madres solteras, personas de la tercera edad y/o con discapacidad, a través de la atención médica general, nutricional, psicológica y jurídica, así como crear e impartir cursos y/o talleres en base a programas que desarrollen integralmente su independencia personal, sus valores morales y su responsabilidad social.',
		},
		{
			id: 3,
			msg:
				'Impulsar espacios que permitan el desarrollo integral y la participación de los individuos en la sociedad.',
		},
		{
			id: 4,
			msg:
				'Promover entre la población la prevencion y control de la contaminación del agua, del aire y del suelo, la prevención del ambiente y de la preservación y restauración del equilibrio ecológico, a través del desarrollo de campañas y la creación de un Centro de Desarrollo de Materiales Impresos, Audiovisuales y Digitales.',
		},
		{
			id: 5,
			msg:
				'La defensa de los derechos de la persona; la protección y desarrollo de la familia; contribuir a evitar la violencia de género, la preservación de la dignidad del hombre y de la mujer, al desarrollo humano y a la equidad de género.',
		},
		{
			id: 6,
			msg:
				'Promover mediante la enseñanza y la educación el respeto de los derechos humanos y la dignidad de las personas, para garantizar el reconocimiento y aplicación efectivos, tanto de los individuos como de la comunidad',
		},
		{
			id: 7,
			msg:
				'La realización de programas, cursos y actividades que contribuyan a evitar la discriminación y a la erradicación de la violencia de género',
		},
		{
			id: 8,
			msg:
				'Promover la educación cívica, artística y cultural y a la participación ciudadana para beneficio de la población.',
		},
		{
			id: 9,
			msg:
				'La difusión de las artes, la litaratura, costumbrees y tradiciones; así como la estimulación y desarrollo en las personas de su sensibilidad artística y cultural.',
		},
		{
			id: 10,
			msg:
				'La difusión de la participación organizada de la población en las acciones que mejoren sus propias condiciones de subsistencia en beneficio de la comunidad.',
		},
		{
			id: 11,
			msg:
				'Apoyo para el desarrollo de los pueblos y comunidades indígenas.',
		},
		{
			id: 12,
			msg:
				'La adquisición, arrendamiento y sabarrendamiento de toda clase de muebles e inmuebles, así como la celebración de toda clase de actos y de contratos que sean necesarios para la realización del objeto social.',
		},
	];

	const scrollContext = useContext(ScrollContext);
	const { scroll } = scrollContext;
	return (
		<section
			className={
				scroll
					? 'pagina objetivos saltoPagina'
					: 'pagina objetivos'
			}>
			<h3>NUESTROS OBJETIVOS</h3>
			{listaObjetivos.map(objetivo => (
				<Objetivo
					key={objetivo.id}
					id={objetivo.id}
					msg={objetivo.msg}
				/>
			))}

			{/* <Objetivo id={listaObjetivos.id} /> */}
		</section>
	);
};

export default Objetivos;
