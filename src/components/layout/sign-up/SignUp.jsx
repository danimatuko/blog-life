import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Header, FormField, Label, Message } from "semantic-ui-react";
import { closePopUp } from "../../../redux/actions/popupActions";
import { popUpName } from "../../../redux/reducers/popupReducer";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import CustomTextField from "../../form/CustomTextField";

const SignUp = () => {
	const dispatch = useDispatch();
	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: ""
	};
	const [newUser, setNewUser] = useState(initialState);

	const newUserSchema = Yup.object().shape({
		firstName: Yup.string().required("First name is required"),
		lastName: Yup.string().required("Last name is required"),
		email: Yup.string()
			.email("Please enter a correct email address")
			.required("Email is required"),
		password: Yup.string()
			.min(6, "Password must contain at leats 6 characters")
			.required("Password is required"),
		confirmPassword: Yup.string().oneOf(
			[Yup.ref("password"), null],
			"Passwords must match"
		)
	});

	const handleChange = ({ target: { name, value } }) =>
		setNewUser({ ...newUser, [name]: value });

	const handleSubmit = (values) => newUserSchema.validate(values);

	const { firstName, lastName, email, password, confirmPassword } = newUser;

	return (
		<div>
			<Header as="h2" size="medium" textAlign="center" content="Sign Up" />

			<Formik
				initialValues={initialState}
				validationSchema={newUserSchema}
				onSubmit={(values) => console.log("values", values)}>
				<Form className="ui form" size="mini">
					<CustomTextField
						label="First Name"
						type="text"
						name="firstName"
						placeholder="custom"
						onChange={(e) => handleChange(e)}
						value={firstName}
					/>

					<CustomTextField
						label="Last Name"
						placeholder="Last Name"
						name="lastName"
						value={lastName}
						onChange={(e) => handleChange(e)}
					/>

					<CustomTextField
						label="Email"
						placeholder="Email"
						value={email}
						name="email"
						onChange={(e) => handleChange(e)}
					/>

					<CustomTextField
						label="Password"
						placeholder="Password"
						value={password}
						name="password"
						onChange={(e) => handleChange(e)}
					/>

					<CustomTextField
						label="Confirm Password"
						placeholder="Confirm Password"
						value={confirmPassword}
						name="confirmPassword"
						onChange={(e) => handleChange(e)}
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

/* 

	
*/
