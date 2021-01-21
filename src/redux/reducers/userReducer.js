const initialState = {
	id: null,
	name: null,
	email: null,
	posts: []
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_POSTS":
			return {
				...state,
				posts: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
