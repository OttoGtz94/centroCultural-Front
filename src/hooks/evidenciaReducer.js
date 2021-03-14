import { LISTAR_EVIDENCIAS } from '../types';
// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case LISTAR_EVIDENCIAS:
			return {
				...state,
				evidencia: action.payload,
			};
		default:
			break;
	}
};
