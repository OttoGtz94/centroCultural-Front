import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

const Menu = () => {
	return (
		<nav>
			<NavLink to='/home' className='elementoNav'>
				<img src={Logo} alt='logo' />
			</NavLink>
			<NavLink to='/objetivos' className='elementoNav'>
				OBJETIVOS
			</NavLink>
			<NavLink to='/evidencias' className='elementoNav'>
				EVIDENCIAS
			</NavLink>
			<NavLink to='/agradecimientos' className='elementoNav'>
				AGRADECIMIENTOS
			</NavLink>
			<NavLink to='/contacto' className='elementoNav'>
				CONTACTO
			</NavLink>
		</nav>
	);
};

export default Menu;
