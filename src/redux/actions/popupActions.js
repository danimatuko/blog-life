import types from "../action-types/popUpTypes";

export const openPopUp = (popUpName) => {
	return {
		type: types.OPEN,
		payload: popUpName
	};
};
export const closePopUp = (popUpName) => {
	return {
		type: types.CLOSE,
		payload: popUpName
	};
};
