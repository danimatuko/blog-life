import types from "../action-types/authTypes";

const initialState = {
	isAuthenticated: false,
	loading: false,
	user: null,
	error: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload,
				error: null
			};
		case types.LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: null
			};

		default:
			return state;
	}
};

export default authReducer;
