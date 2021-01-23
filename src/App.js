import React from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/layout/navbar/NavBar";
import { Container } from "semantic-ui-react";
import Hero from "./components/layout/hero/Hero";
import Homepage from "./components/pages/hompage/homepage";
import {  useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/layout/login/Login";
import Popup from "./components/layout/popup/Popup";
import SignUp from "./components/layout/sign-up/SignUp";
import { popUpName } from "./redux/reducers/popupReducer";

const App = () => {
	const popUpType = useSelector((state) => state.popUp.name);

	return (
		<div id="app">
			<Popup>
				{popUpType === popUpName.LOGIN && <Login />}
				{popUpType === popUpName.SIGN_UP && <SignUp />}
			</Popup>
			<Router>
				<Container>
					<NavBar />
					<Hero />
					<Switch>
						<Route exact path="/" component={Homepage} />
					</Switch>
				</Container>
			</Router>
		</div>
	);
};

export default App;
