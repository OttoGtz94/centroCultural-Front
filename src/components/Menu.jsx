import React, { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import ScrollContext from '../hooks/scrollContext';

const Menu = () => {
	const scrollContext = useContext(ScrollContext);
	const {
		scroll,
		activaSticky,
		desactivaSticky,
	} = scrollContext;
	const navRef = useRef(0);

	const scrollHandler = () => {
		// const valorScroll = document.documentElement.scrollTop;
		const valorRef =
			navRef.current.ownerDocument.scrollingElement.scrollTop;
		if (valorRef > 397) {
			activaSticky();
		} else {
			desactivaSticky();
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		// eslint-disable-next-line
	}, [scroll]);

	return (
		<nav
			id='nav'
			ref={navRef}
			className={scroll ? 'navSticky' : null}>
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
