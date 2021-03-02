import { NAV_STICKY, NAV_STICKY_INACTIVE } from '../types';

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case NAV_STICKY:
			return {
				...state,
				scroll: true,
			};
		case NAV_STICKY_INACTIVE:
			return {
				...state,
				scroll: false,
			};
		default:
			break;
	}
};
