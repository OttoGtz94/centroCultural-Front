import React from 'react';
import { Parallax } from 'react-parallax';
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
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Ad voluptatum corrupti, harum, commodi corporis
				facilis animi doloribus cumque amet aut atque sunt
				cupiditate tempora quibusdam delectus veritatis eum
				similique quo error dicta natus exercitationem? Quae,
				consequatur. Hic architecto culpa quibusdam, odio
				corporis ratione, tempore atque error nam temporibus
				expedita obcaecati. Alias, molestias iste consequatur
				quas voluptatem perferendis earum exercitationem nemo
				corrupti ipsum id ex suscipit adipisci similique, quo
				rem amet cum illum? Dolores, dolor. Aliquid quibusdam
				temporibus consectetur. Sequi velit cupiditate optio
				similique quisquam ea voluptatum culpa reiciendis
				esse, debitis consequuntur nesciunt officiis quia sed
				reprehenderit tenetur beatae ipsum. Maxime iure vero
				rem impedit consequatur voluptates explicabo vitae
				hic, harum necessitatibus, odio tenetur? Consectetur
				vero eveniet labore, fugiat natus provident ipsam
				illo iste architecto rem sunt ipsum esse optio
				distinctio veritatis neque molestiae culpa ducimus
				cum ratione repellendus est eaque? Asperiores labore
				debitis rerum pariatur commodi eveniet ab dignissimos
				molestiae?
			</p>
			{/* <div className='servicio'>
				<Parallax
					blur={{ min: -1, max: 3 }}
					bgImage={ImageIztapalapa}
					strength={1}
					className='circulo'
					renderLayer={precentage => (
						<div
							style={{
								position: 'absolute',
								width: '30%',
								height: '64px',
								background: `rgba(74, 105, 87, ${
									precentage * 1
								})`,
								left: '80px',
								top: '45%',
								transform: `translate(-20%, 0%) scale(${
									precentage * 2
								}`,
								color: '#A3AE9A',
								fontWeight: '700',
								display: 'flex',
								flexWrap: 'wrap',
								textAlign: 'center',
								alignContent: 'center',
								borderRadius: '5px',
							}}>
							<p>DESARROLLO COMUNITARIO</p>
						</div>
					)}
				/>
				<div className='descripcionServicio'>
					<p>
						Ofrece servicios de atención en la unidad
						Allepetlalli, Iztapalapa así como a los
						habitantes de la delegación Tláhuac
					</p>
				</div>
			</div> */}
		</section>
	);
};

export default Servicios;
