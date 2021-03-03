import React, { useContext } from 'react';
// hooks
import ScrollContext from '../../hooks/scrollContext';
// components
import Agradecimiento from './Agradecimiento';

const Agradecimientos = () => {
	const agradecimientos = [
		{
			id: 1,
			nombre: 'SEDESO',
			msg:
				'(Secretaría de Desarrollo Social de la Ciudad de México) Por las actividades de apoyo social en comunidades en Tláhuac',
			encargados:
				'Director Ejecutivo, Dr. Porfirio Ramírez García, Jefe de Unidad Departamental, Lic. Teodoro Villamonte Ek, Lic. Política y Gestión Social, Brenda Janelli García Díaz',
		},
		{
			id: 2,
			nombre: 'SEDU',
			msg:
				'(Secretaría de Educación de la Ciudad de México) A través de la donación de materiales bibliográficos para los clubes de lecturas.',
			encargados:
				'Directora General de Bibliotecas, Mtra. Karina Estévez Rivera (DGB), Lic. Alvaro Cartagena Rivero',
		},
		{
			id: 3,
			nombre: 'Prepa Sí',
			msg: '',
			encargados: 'Profesor, Óscar Valverde Galicia',
		},
		{
			id: 4,
			nombre:
				'AUTORIDAD DE LA ZONA PATRIMONIO DE LA HUMANIDAD',
			msg: '',
			encargados:
				'Coordinador General de la Autoridad de la Zona Patrimonio Mundial, Natural y Cultural de la Humanidad en Xochimilco, Tláhuac y Milpa Alta, C. Erasto Ensástiga Santiago.',
		},
		{
			id: 5,
			nombre: 'FARO TLÁHUAC',
			msg:
				'Fábrica de Artes y Oficios de Tláhuac. Por el apoyo logístico, de las instalaciones y su invaluable calor humano.',
			encargados:
				'Alejandro Rincón Gutiérrez, Papik Noé Carmona Campos, Verónica Monserrat Landeros Sori, Delia Vega, Nayma Fernández Pérez, Alicia Martínez Sánchez, Dorian Adrián Torres García, Arturo Vázquez Torres',
		},
	];
	const scrollContext = useContext(ScrollContext);
	const { scroll } = scrollContext;
	return (
		<section
			className={
				scroll
					? 'pagina agradecimientos saltoPagina'
					: 'pagina agradecimientos'
			}>
			<h3>AGRADECIMIENTOS</h3>
			{agradecimientos.map(agradecimiento => (
				<Agradecimiento
					key={agradecimiento.id}
					nombre={agradecimiento.nombre}
					msg={agradecimiento.msg}
					encargados={agradecimiento.encargados}
				/>
			))}
			{/* <Agradecimiento /> */}
		</section>
	);
};

export default Agradecimientos;
