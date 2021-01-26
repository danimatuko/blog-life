import React from "react";
import { useDispatch } from "react-redux";
import { Button, Header } from "semantic-ui-react";
import { closePopUp } from "../../../redux/actions/popupActions";
import { login } from "../../../redux/actions/authActions";

import { popUpName } from "../../../redux/reducers/popupReducer";
import { Formik, Form } from "formik";
import CustomTextField from "../../form/CustomTextField";
import newUserSchema from "./loginSchema";
import axios from "axios";

const SignUp = () => {
	const dispatch = useDispatch();
	const initialState = {
		email: "",
		password: ""
	};

	const loginUser = async (currentUser) => {
		try {
			/* In the backend I need to check if a user alerady exist */
			const users = await axios.get("/users");
			if (!users) throw Error("There are no users");
			console.log("users", users);
			const authUser = users.data.find(
				(user) => user.email === currentUser.email
			);
			if (!authUser) throw Error("User does not exist");
			dispatch(closePopUp(popUpName.SIGN_UP));
			dispatch(login(authUser));
		} catch (err) {
			console.log(err);
		}
	};

	const onSubmit = (values, { resetForm }) => {
		loginUser(values);
		resetForm({});
	};

	return (
		<div>
			<Header as="h2" size="medium" textAlign="center" content="Sign In" />

			<Formik
				initialValues={initialState}
				validationSchema={newUserSchema}
				onSubmit={onSubmit}>
				<Form className="ui form" size="mini ">
					<CustomTextField label="Email" placeholder="Email" name="email" />

					<CustomTextField
						label="Password"
						placeholder="Password"
						name="password"
					/>

					<Button type="submit" positive>
						Sign-Up
					</Button>
					<Button
						type="button"
						onClick={() => dispatch(closePopUp(popUpName.SIGN_UP))}>
						Cancel
					</Button>
				</Form>
			</Formik>
		</div>
	);
};
export default SignUp;
