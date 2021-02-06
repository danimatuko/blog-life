import React, { Fragment } from "react";
import { Menu} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { openPopUp } from "../../../redux/actions/popupActions";
import { popUpName } from "../../../redux/reducers/popupReducer";
import ProfileDropDown from "./profile-drop-down/ProfileDropDown";

const NavBar = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	const { isAuthenticated, user } = auth;
	return (
		<Menu as="nav" text className="main-nav">
			<Menu.Item header>Blog Life</Menu.Item>
			<Menu.Item as={Link} to="/" name="Home" active />
			<Menu.Item as={Link} to="About" name="about" />
			<Menu.Menu position="right">
				{!isAuthenticated ? (
					<Fragment>
						<Menu.Item
							as="a"
							onClick={() =>
								dispatch(openPopUp(popUpName.LOGIN))
							}>
							<i className="fas fa-sign-in-alt" />
							<span>Login</span>
						</Menu.Item>

						<Menu.Item
							as="a"
							onClick={() =>
								dispatch(openPopUp(popUpName.SIGN_UP))
							}>
							<i className="fas fa-user-plus" />
							<span>Sign Up</span>
						</Menu.Item>
					</Fragment>
				) : (
					<Fragment>
						<Menu.Item as="span">Hi {user.firstName}</Menu.Item>
						<Menu.Item>
							<ProfileDropDown />
						</Menu.Item>
					</Fragment>
				)}
			</Menu.Menu>
		</Menu>
	);
};

export default NavBar;
