import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Header, FormField } from "semantic-ui-react";
import { closePopUp } from "../../../redux/actions/popupActions";
import { popUpName } from "../../../redux/reducers/popupReducer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
		firstName: Yup.string(),
		lastName: Yup.string(),
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

	const handleSubmit = (e) => console.log(newUser);

	const { firstName, lastName, email, password, confirmPassword } = newUser;

	return (
		<div>
			<Header as="h2" size="medium" textAlign="center" content="Sign Up" />

			<Formik
				initialValues={initialState}
				validationSchema={newUserSchema}
				onChange={handleChange}
				onSubmit={handleSubmit}>
				<Form className="ui form" size="mini">
					<FormField>
						<label>First Name</label>
						<Field
							placeholder="First Name"
							name="firstName"
							value={firstName}
						/>
					</FormField>
					<FormField>
						<label>Last Name</label>
						<Field placeholder="Last Name" name="lastName" value={lastName} />
					</FormField>
					<FormField>
						<label>Email</label>
						<Field placeholder="Email" value={email} name="email" />
					</FormField>
					<FormField>
						<label>Password</label>
						<Field placeholder="Password" value={password} name="password" />
						<ErrorMessage name="password" component="div" />
					</FormField>
					<FormField>
						<label>Confirm Password</label>
						<Field
							placeholder="Confirm Password"
							value={confirmPassword}
							name="confirmPassword"
						/>
					</FormField>
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
