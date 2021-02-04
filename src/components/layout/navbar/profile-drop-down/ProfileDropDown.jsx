import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image } from "semantic-ui-react";
import userImage from "../../../../assets/images/user.png";
// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

import { logout } from "../../../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const trigger = <Image src={userImage} avatar />;
const ProfileDropDown = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const { isAuthenticated, user } = auth;

	return (
		<Dropdown trigger={trigger} pointing="top right">
			<Dropdown.Menu>
				<Dropdown.Item as={Link} text="My Profile" to="/profile" />
				<Dropdown.Item as={Link} text="New Post" to="/new-post" />
				<Dropdown.Item as={Link} text="My Posts" to="/my-posts" />
				<Dropdown.Item
					as={Link}
					text="My Favorites"
					to="/my-favorites"
				/>
				<Dropdown.Item as="a" onClick={() => dispatch(logout())}>
					<i className="fas fa-sign-out-alt" />
					<span>Logout</span>
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default ProfileDropDown;
