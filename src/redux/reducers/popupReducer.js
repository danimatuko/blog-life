import types from "../action-types/popUpTypes";

export const popUpName = {
	LOGIN: "LOGIN",
	SIGN_UP: "SIGN_UP"
};

const initialState = {
	isOpen: false,
	name: null
};

const popupReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.OPEN:
			return {
				...state,
				isOpen: true,
				name: action.payload
			};

		case types.CLOSE:
			return {
				...state,
				isOpen: false,
				name: null
			};
		default:
			return state;
	}
};

export default popupReducer;
