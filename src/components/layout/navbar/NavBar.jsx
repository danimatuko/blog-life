import React from "react";
import { Menu } from "semantic-ui-react";

import "./navbar.scss";
const NavBar = () => {
	return (
		<Menu as="nav" text className="main-nav">
			<Menu.Item header>Blog Life</Menu.Item>
			<Menu.Item name="home" active />
			<Menu.Item name="messages" />
			<Menu.Item name="friends" />
			<Menu.Menu position="right">
				<Menu.Item name="Login" />
				<Menu.Item name="Register" />
			</Menu.Menu>
		</Menu>
	);
};

export default NavBar;
