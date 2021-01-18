import React from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/layout/navbar/NavBar";
import { Container } from "semantic-ui-react";
import Hero from "./components/layout/hero/Hero";
import Homepage from "./components/pages/hompage/homepage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Container>
					<NavBar />
					<Hero />
					<Switch>
						<Route exact path="/" component={Homepage} />
					</Switch>
				</Container>
			</Router>
		</Provider>
	);
};

export default App;
