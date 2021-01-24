import React from "react";
import {
	useField,
	Form,
	FormikProps,
	Formik,
	Field,
	ErrorMessage
} from "formik";
import { FormField } from "semantic-ui-react";

const CustomTextField = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);
	return (
		<FormField>
			<input {...props} {...field} />
			<ErrorMessage
				name={props.name}
				component="div"
				style={{ color: "red" }}
			/>
		</FormField>
	);
};

export default CustomTextField;
