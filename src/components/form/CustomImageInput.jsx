import React from "react";

const CustomImageInput = ({ form, field }) => {
	return (
		<input
			name={field.name}
			type="file"
			//accept="image/*"
			onChange={(e) => form.setFieldValue(field.name, e.target.files[0])}
		/>
	);
};

export default CustomImageInput;

// import React, { useState, useEffect } from "react";

// import * as Yup from "yup";

// const FILE_SIZE = 3 * 1024;
// //const SUPPORTED_FORMATS = ["jpg", "jpeg", "png"];
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

// const newPostSchema = Yup.object().shape({
// 	postImage: Yup.mixed().test("fileFormat", "Unsupported Format", (value) => {
// 		console.log("yup->", value);
// 		return value && SUPPORTED_FORMATS.includes(value.type);
// 	})
// });

// const CustomImageInput = () => {
// 	const [file, setFile] = useState(undefined);

// 	useEffect(() => {
// 		console.log(file);
// 	}, [file]);

// 	const handleChange = async (event) => {
// 		const { type, size } = event.target.files[0];
// 		try {
// 			await newPostSchema.validate(JSON.stringify({ fileFormat: type }));
// 		} catch (error) {
// 			console.log(error);
// 		}

// 		setFile({ type, size });
// 	};

// 	return <input type="file" onChange={handleChange} name="postImage" />;
// };

// export default CustomImageInput;
