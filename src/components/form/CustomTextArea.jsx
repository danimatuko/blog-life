import React from "react";
import { useField, ErrorMessage } from "formik";
import { FormField } from "semantic-ui-react";

const CustomTextArea = ({ label, ...props }) => {
	const [field] = useField(props);
	return (
		<FormField>
			{label && <label>{label}</label>}
			<textarea {...props} {...field} />
			<ErrorMessage
				name={props.name}
				component="div"
				style={{ color: "red" }}
			/>
		</FormField>
	);
};

export default CustomTextArea;
