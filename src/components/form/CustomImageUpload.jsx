import React, { useState, useEffect } from "react";
import { useField, ErrorMessage } from "formik";

const CustomImageUpload = (props) => {
	const [field] = useField(props);
	const [file, setfile] = useState(null);

	useEffect(() => {
		props.handleFileChange(file);
	}, [file]);

	const handleChange = (event) => {
		const { name, type, size } = event.target.files[0];
		setfile({ name, type, size });
	};

	return (
		<>
			<input type="file" {...field} {...props} onChange={handleChange} />
			<ErrorMessage
				name={props.name}
				component="div"
				style={{ color: "red" }}
			/>
		</>
	);
};

export default CustomImageUpload;
