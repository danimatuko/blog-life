import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/layout/navbar/NavBar";
import { Container } from "semantic-ui-react";
import Hero from "./components/layout/hero/Hero";
import Homepage from "./components/pages/hompage/homepage";
import axios from "axios";

const App = () => {
	const getUsers = async () => {
		try {
			const users = await axios.get("/users");
			console.log("users", users.data);
		} catch (e) {
			console.log("error in getUsers");
		}
	};
	const getPosts = async () => {
		try {
			const posts = await axios.get("/posts");
			console.log("posts", posts.data);
		} catch (e) {
			console.log("error in getUsers");
		}
	};
	useEffect(() => {
		console.log("useEffect");
		getUsers();
		getPosts();
	}, []);
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
