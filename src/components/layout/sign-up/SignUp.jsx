import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Header } from "semantic-ui-react";
import { closePopUp } from "../../../redux/actions/popupActions";
import { popUpName } from "../../../redux/reducers/popupReducer";

const SignUp = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<Header as="h2" size="medium" textAlign="center" content="Sign Up" />

			<Form size="mini">
				<Form.Field>
					<label>Email</label>
					<input placeholder="Email" />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input placeholder="Password" />
				</Form.Field>

				<Button type="submit" positive>
					Sign-Up
				</Button>
				<Button
					type="button"
					onClick={() => dispatch(closePopUp(popUpName.SIGN_UP))}>
					Cancel
				</Button>
			</Form>
		</div>
	);
};
export default SignUp;
