import types from "../action-types/authTypes";

export const login = (user) => {
	return {
		type: types.LOGIN,
		payload: user
	};
};
export const logout = () => {
	return {
		type: types.LOGOUT
	};
};
