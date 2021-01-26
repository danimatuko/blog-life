import * as Yup from "yup";

const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email("Please enter a correct email address")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password must contain at leats 6 characters")
		.required("Password is required")
});

export default loginSchema;
