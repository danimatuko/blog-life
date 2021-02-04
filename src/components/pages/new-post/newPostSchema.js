import * as Yup from "yup";

const newPost = Yup.object().shape({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	email: Yup.string()
		.email("Please enter a correct email address")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password must contain at leats 6 characters")
		.required("Password is required"),
	confirmPassword: Yup.string()
		.required("Confirm Password is required")
		.oneOf([Yup.ref("password"), null], "Passwords must match")
});

export default newPost;
