import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/layout/navbar/NavBar";
import { Container } from "semantic-ui-react";
import Hero from "./components/layout/hero/Hero";
import Homepage from "./components/pages/hompage/homepage";

const App = () => {
	return (
		<div>
			<Container>
				<NavBar />
				<Hero />
				<Homepage />
			</Container>
		</div>
	);
};

export default App;
