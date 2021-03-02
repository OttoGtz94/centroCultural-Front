import React from 'react';
import { Parallax } from 'react-parallax';

const Servicio = ({ imagen, titulo, reverse, mensaje }) => {
	return (
		<div className={`servicio ${reverse}`}>
			<Parallax
				blur={{ min: -1, max: 3 }}
				bgImage={imagen}
				strength={1}
				className='circulo'
				renderLayer={precentage => (
					<div
						style={{
							position: 'absolute',
							width: `auto`,
							height: '64px',
							padding: '0 4px',
							background: `rgba(74, 105, 87, ${
								precentage * 1
							})`,
							left: '80px',
							top: '45%',
							transform: `translate(-20%, 0%) scale(${
								precentage * 1.1
							}`,
							color: '#A3AE9A',
							fontWeight: '700',
							fontSize: '25px',
							display: 'flex',
							flexWrap: 'wrap',
							textAlign: 'center',
							justifyContent: 'space-between',
							alignContent: 'center',
							borderRadius: '5px',
						}}>
						<p style={{}}>{titulo}</p>
					</div>
				)}
			/>
			<div className='descripcionServicio'>
				<p>{mensaje}</p>
			</div>
		</div>
	);
};

export default Servicio;
