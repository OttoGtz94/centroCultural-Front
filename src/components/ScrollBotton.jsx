import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
// hooks
import ScrollContext from '../hooks/scrollContext';

const ScrollBotton = ({ clickEvent }) => {
	const scrollContext = useContext(ScrollContext);
	const { scroll } = scrollContext;
	const estilosBoton = {
		cursor: 'pointer',
		position: 'fixed',
		bottom: '5%',
		right: '2%',
		fontSize: '35px',
		color: '#b99741',
	};
	const smoothAnimation = () => {
		const header = document.querySelector('.header');
		header.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div onClick={smoothAnimation}>
			{scroll ? (
				<FontAwesomeIcon
					icon={faChevronCircleUp}
					style={estilosBoton}
				/>
			) : null}
		</div>
	);
};

export default ScrollBotton;
