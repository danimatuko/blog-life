import React from "react";
import { Menu } from "semantic-ui-react";
import "./category-menu.scss";

const CategoryMenu = () => {
	return (
		<Menu as="nav" text className="category-menu" attached="bottom">
			<Menu.Item name="Nature" active />
			<Menu.Item name="Sprot" />
			<Menu.Item name="Bussiness" />
			<Menu.Item name="Health" />
			<Menu.Item name="Culture" />
		</Menu>
	);
};

export default CategoryMenu;
