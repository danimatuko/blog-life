import React from "react";
import { useField, ErrorMessage } from "formik";
import { FormField } from "semantic-ui-react";

const CustomTextField = ({ label, ...props }) => {
	const [field] = useField(props);

	return (
		<FormField>
			{label && <label>{label}</label>}
			<input {...field} {...props} type="text" />
			<ErrorMessage
				name={props.name}
				component="div"
				style={{ color: "red" }}
			/>
		</FormField>
	);
};

export default CustomTextField;
