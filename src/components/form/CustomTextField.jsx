import React from "react";
import { useField, Form, FormikProps, Formik, Field } from "formik";
import { FormField } from "semantic-ui-react";

const CustomTextField = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);
	return (
		<>
			<FormField>
				<label>
					{label}
					<input {...field} {...props} />
				</label>
				{meta.touched && meta.error ? (
					<div className="error" style={{ color: "red" }}>
						{meta.error}
					</div>
				) : null}
			</FormField>
		</>
	);
};

export default CustomTextField;
