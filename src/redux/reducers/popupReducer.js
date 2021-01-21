export const popUpName = {
	LOGIN: "LOGIN",
	SIGN_UP: "SIGN_UP"
};

const { LOGIN, SIGN_UP } = popUpName;

// const initialState = [
// 	{
// 		name: LOGIN,
// 		isOpen: false
// 	},
// 	{
// 		name: SIGN_UP,
// 		isOpen: false
// 	}
// ];

const initialState = {
	isOpen: false,
	name: null
};

// const popupReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "OPEN":
// 			return [
// 				...state.map((popUp) =>
// 					popUp.name === action.payload ? { ...popUp, isOpen: true } : popUp
// 				)
// 			];

// 		case "CLOSE":
// 			return [
// 				...state.map((popUp) =>
// 					popUp.name === action.payload ? { ...popUp, isOpen: false } : popUp
// 				)
// 			];
// 		default:
// 			return state;
// 	}
// };

const popupReducer = (state = initialState, action) => {
	switch (action.type) {
		case "OPEN":
			return {
				...state,
				isOpen: true,
				name: action.payload
			};

		case "CLOSE":
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
