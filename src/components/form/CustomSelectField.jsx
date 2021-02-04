import React from "react";
import { useField, ErrorMessage } from "formik";
import { FormField, Select } from "semantic-ui-react";

const CustomSelectField = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);
	return (
		<FormField>
			{label && <label>{label}</label>}
			<Select
				{...props}
				{...field}
				value={field.value || null}
				onChange={(e, data) => helpers.setValue(data.value)}
			/>
			<ErrorMessage
				name={props.name}
				component="div"
				style={{ color: "red" }}
			/>
		</FormField>
	);
};

export default CustomSelectField;
