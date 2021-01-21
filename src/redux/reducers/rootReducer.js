import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import popupReducer from "./popupReducer";

const rootReducer = combineReducers({
	user: userReducer,
	post: postReducer,
	popUp: popupReducer
});

export default rootReducer;
