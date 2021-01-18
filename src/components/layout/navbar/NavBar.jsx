import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./navbar.scss";
const NavBar = () => {
	return (
		<Menu as="nav" text className="main-nav">
			<Menu.Item header>Blog Life</Menu.Item>
			<Menu.Item as={Link} to="/" name="Home" active />
			<Menu.Item as={Link} to="About" name="about" />
			<Menu.Menu position="right">
				<Menu.Item>
					<i className="fas fa-sign-in-alt" />
					<span>Login</span>
				</Menu.Item>
				<Menu.Item>
					<i className="fas fa-user-plus" />
					<span>Register</span>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};

export default NavBar;
