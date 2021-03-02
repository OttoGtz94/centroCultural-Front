import React from 'react';
// components
import Servicio from './Servicio';
// imagenes
import ImageCDMX from '../../images/circuloCDMX.png';
import ImageIEMS from '../../images/circuloIEMS.png';
import ImageIztapalapa from '../../images/circuloIztapalapa.png';

const Servicios = () => {
	const mensaje1 =
		'Ofrece servicios de atención en la unidad Allepetlalli, Iztapalapa así como a los habitantes de la delegación Tláhuac';
	const mensaje2 =
		'Programa de intervención para contener la violencia y por una cultura de paz';
	const mensaje3 =
		'Programa que vincula al sector educativo con la realidad social a través de la propuesta y puesta en marcha de programas de intervención social a partir de la experiencia de los profesionales de las diferentes carreras de las instituciones con las que tenemos convenio (Universidad Autónoma de la Ciudad de México, UACM; Universidad Autónoma Metropolitana, unidad Xochimilco, UAM-X e Instituto Tecnológico de Tláhuac,  ITT).';

	return (
		<section className='servicios'>
			<Servicio
				imagen={ImageIztapalapa}
				titulo={'DESARROLLO COMUNITARIO'}
				mensaje={mensaje1}
			/>
			<Servicio
				imagen={ImageCDMX}
				titulo={'PROYECTO DE VIDA'}
				reverse='reverse'
				mensaje={mensaje2}
			/>
			<Servicio
				imagen={ImageIEMS}
				titulo={'SERVICIO SOCIAL'}
				mensaje={mensaje3}
			/>
		</section>
	);
};

export default Servicios;
