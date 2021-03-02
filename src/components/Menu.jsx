import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

const Menu = ({ sticky, referencia }) => {
	// state
	// const [scroll, setScroll] = useState(false);

	// // ref
	// const navRef = useRef(0);

	// const scrollHandler = () => {
	// 	// const valorScroll = document.documentElement.scrollTop;
	// 	const valorRef =
	// 		navRef.current.ownerDocument.scrollingElement.scrollTop;
	// 	// console.log(valorScroll);
	// 	// console.log(navRef);
	// 	// console.log(
	// 	// 	navRef.current.ownerDocument.scrollingElement.scrollTop,
	// 	// );
	// 	// console.log(
	// 	// 	navRef.current.ownerDocument.scrollingElement
	// 	// 		.scrollHeight,
	// 	// );
	// 	if (valorRef > 397) {
	// 		setScroll(true);
	// 	} else {
	// 		setScroll(false);
	// 	}
	// };
	// useEffect(() => {
	// 	window.addEventListener('scroll', scrollHandler);
	// 	// const nav = document.querySelector('#nav');
	// 	// nav.addEventListener('scroll', scrollHandler);
	// 	// if (scroll) {
	// 	// 	alert('Scroll top');
	// 	// }
	// 	// console.log(
	// 	// 	navRef.current.ownerDocument.scrollingElement
	// 	// 		.clientHeight,
	// 	// );
	// }, [scroll]);

	return (
		<nav
			id='nav'
			ref={referencia}
			// className={scroll ? 'navSticky' : null}
			className={sticky}>
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
