import { combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";
import postReducer from "./postReducer/postReducer";

const rootReducer = combineReducers({
	user: userReducer,
	post: postReducer
});

export default rootReducer;
