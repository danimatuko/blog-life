import { types } from "../action-types/userTypes";

const initialState = {
	id: null,
	firstName: null,
	lastName: null,
	email: null,
	posts: []
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SIGN_UP:
			return {
				...state,
				posts: action.payload
			};
		case types.LOGIN:
			return {
				...state,
				posts: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
