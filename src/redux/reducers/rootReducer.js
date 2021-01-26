import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import popupReducer from "./popupReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
	user: userReducer,
	post: postReducer,
	popUp: popupReducer,
	auth: authReducer
});

export default rootReducer;
