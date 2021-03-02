import React, { useReducer } from 'react';
import scrollContext from './scrollContext';
import scrollReducer from './scrollReducer';
import { NAV_STICKY, NAV_STICKY_INACTIVE } from '../types';

const ScrollState = props => {
	const initialState = {
		scroll: false,
	};

	const activaSticky = () => {
		dispatch({
			type: NAV_STICKY,
		});
	};

	const desactivaSticky = () => {
		dispatch({
			type: NAV_STICKY_INACTIVE,
		});
	};
	const [state, dispatch] = useReducer(
		scrollReducer,
		initialState,
	);

	return (
		<scrollContext.Provider
			value={{
				scroll: state.scroll,
				activaSticky,
				desactivaSticky,
			}}>
			{props.children}
		</scrollContext.Provider>
	);
};

export default ScrollState;
