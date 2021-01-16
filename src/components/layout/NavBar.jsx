import React from "react";
import { Menu, Segment } from "semantic-ui-react";

const NavBar = () => {
	return (
			<Menu as="nav" pointing secondary >
				<Menu.Item name="home" active />
				<Menu.Item name="messages" />
				<Menu.Item name="friends" />
				<Menu.Menu position="right">
					<Menu.Item name="logout" />
				</Menu.Menu>
			</Menu>
	);
};

export default NavBar;
