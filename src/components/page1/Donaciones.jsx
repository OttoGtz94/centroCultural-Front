import React from 'react';
// imagen
import ImageDonacion from '../../images/donacion.png';

const Donaciones = () => {
	return (
		<section className='donaciones'>
			<h3>DONACIONES</h3>
			<div className='contenedorImagen'>
				<img src={ImageDonacion} alt='donacion' />
			</div>
			<div className='contenedorCuenta'>
				<span>Cuenta Banorte: 0276138904</span>
				<br /> <br />
				<span>CLABE: 072 180 00276183908 3</span>
				<br /> <br />
				<span>RFC: CHA141108HZ1</span>
				<br /> <br />
				<span>CLUNI: CHA1411080900A</span>
			</div>
		</section>
	);
};

export default Donaciones;
