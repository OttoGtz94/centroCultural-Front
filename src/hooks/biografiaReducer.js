import {
	MOSTRAR_BIOGRAFIA,
	OCULTAR_BIOGRAFIA,
	BIOACTUAL,
} from '../types';
// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case MOSTRAR_BIOGRAFIA:
			return {
				...state,
				biografia: true,
			};

		case OCULTAR_BIOGRAFIA:
			return {
				...state,
				biografia: false,
			};
		case BIOACTUAL:
			return {
				...state,
				bioActual: state.integrantes.filter(
					integrante => integrante.id === action.payload,
				),
			};
		default:
			break;
	}
};
