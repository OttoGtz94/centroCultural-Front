import React from 'react';
import { Parallax } from 'react-parallax';
// const backgroundImage = require('../images/header.jpg');
import backgroundImage from '../images/header.jpg';

const Header = () => {
	return (
		// <header>
		// 	<div className='titulos'>
		// 		<h1>
		// 			CENTRO <br /> HANNAH ARENDT A.C.
		// 		</h1>
		// 		<h2>
		// 			PARA EL DESARROLLO SOCIAL, CULTURAL Y ACADEMICO
		// 		</h2>
		// 	</div>
		// </header>
		<Parallax
			bgImage={backgroundImage}
			className='header'
			blur={{ min: -15, max: 15 }}>
			<div className='titulos'>
				<h1>
					CENTRO <br /> HANNAH ARENDT A.C.
				</h1>
				<h2>
					PARA EL DESARROLLO SOCIAL, CULTURAL Y ACADEMICO
				</h2>
			</div>
		</Parallax>
	);
};

export default Header;
