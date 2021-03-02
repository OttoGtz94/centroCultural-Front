import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

const Menu = () => {
	return (
		<nav>
			<NavLink to='/home' className='navLogo'>
				<img src={Logo} alt='logo' />
			</NavLink>
			<NavLink to='/objetivos' className='itemNav'>
				OBJETIVOS
			</NavLink>
			<NavLink to='/evidencias' className='itemNav'>
				EVIDENCIAS
			</NavLink>
			<NavLink to='/agradecimientos' className='itemNav'>
				AGRADECIMIENTOS
			</NavLink>
			<NavLink to='/contacto' className='itemNav'>
				CONTACTO
			</NavLink>
		</nav>
	);
};

export default Menu;
