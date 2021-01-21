import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Header } from "semantic-ui-react";
import { closePopUp } from "../../../redux/actions/popupActions";
import { popUpName } from "../../../redux/reducers/popupReducer";

const Login = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<Header as="h2" size="medium" textAlign="center" content="Login" />

			<Form size="mini">
				<Form.Field>
					<label>Email</label>
					<input placeholder="Email" />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input placeholder="Password" />
				</Form.Field>

				<Button type="submit" positive >
					Login
				</Button>
				<Button
					type="button"
					onClick={() => dispatch(closePopUp(popUpName.LOGIN))}>
					Cancel
				</Button>
			</Form>
		</div>
	);
};
export default Login;
