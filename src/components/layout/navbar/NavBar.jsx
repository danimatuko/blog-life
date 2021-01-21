import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useDispatch } from "react-redux";
import { openPopUp } from "../../../redux/actions/popupActions";
import { popUpName } from "../../../redux/reducers/popupReducer";

const NavBar = () => {
	const dispatch = useDispatch();

	return (
		<Menu as="nav" text className="main-nav">
			<Menu.Item header>Blog Life</Menu.Item>
			<Menu.Item as={Link} to="/" name="Home" active />
			<Menu.Item as={Link} to="About" name="about" />
			<Menu.Menu position="right">
				<Menu.Item as="a" onClick={() => dispatch(openPopUp(popUpName.LOGIN))}>
					<i className="fas fa-sign-in-alt" />
					<span>Login</span>
				</Menu.Item>
				<Menu.Item
					as="a"
					onClick={() => dispatch(openPopUp(popUpName.SIGN_UP))}>
					<i className="fas fa-user-plus" />
					<span>Sign Up</span>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};

export default NavBar;
