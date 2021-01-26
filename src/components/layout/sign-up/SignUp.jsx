import React from "react";
import { useDispatch } from "react-redux";
import { Button, Header } from "semantic-ui-react";
import { closePopUp } from "../../../redux/actions/popupActions";
import { popUpName } from "../../../redux/reducers/popupReducer";
import { Formik, Form } from "formik";
import CustomTextField from "../../form/CustomTextField";
import newUserSchema from "./validationSchema";
import axios from "axios";

const SignUp = () => {
	const dispatch = useDispatch();
	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: ""
	};

	const addNewUser = async (newUser) => {
		try {
			/* In the backend I need to check if a user alerady exist */
			await axios.post("/users", newUser);
			dispatch(closePopUp(popUpName.SIGN_UP));
		} catch (err) {
			console.log(err);
		}
	};

	const onSubmit = (values, { resetForm }) => {
		addNewUser(values);
		resetForm({});
	};

	return (
		<div>
			<Header as="h2" size="medium" textAlign="center" content="Sign Up" />

			<Formik
				initialValues={initialState}
				validationSchema={newUserSchema}
				onSubmit={onSubmit}>
				<Form className="ui form" size="mini ">
					<CustomTextField
						label="First Name"
						type="text"
						name="firstName"
						placeholder="First Name"
					/>

					<CustomTextField
						label="Last Name"
						placeholder="Last Name"
						name="lastName"
					/>

					<CustomTextField label="Email" placeholder="Email" name="email" />

					<CustomTextField
						label="Password"
						placeholder="Password"
						name="password"
					/>

					<CustomTextField
						label="Confirm Password"
						placeholder="Confirm Password"
						name="confirmPassword"
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
