import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import NewPostSchema from "./newPostSchema";
import CustomImageInput from "../../form/CustomImageInput";
import CustomTextField from "../../form/CustomTextField";
import { Button, FormField } from "semantic-ui-react";
import CustomImageUpload from "../../form/CustomImageUpload";

const NewPost = () => {
	const initialValues = {
		author: "logged in user",
		category: "",
		title: "",
		date: Date.now(),
		body: "",
		likes: null,
		views: null
	};

	const [post, setPost] = useState({
		initialValues: initialValues,
		postImage: null,
		imgError: null
	});

	// const { name, type, size } = event.target.files[0];
	// setImageData({ name, type, size });

	const handleFileChange = (imageData) => {
		setPost({ ...post, postImage: imageData });
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={NewPostSchema}
				handleSubmit
				onSubmit={(values) => console.log(values)}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
				}) => (
					<Form
						className="ui form"
						size="mini"
						onSubmit={handleSubmit}>
						<FormField>
							<input
								type="text"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.title}
								name="title"
							/>
							{errors.title && (
								<div style={{ color: "red" }}>
									{errors.title}
								</div>
							)}
						</FormField>
						<FormField>
							<CustomImageUpload
								name="postImage"
								onBlur={handleBlur}
								value={JSON.stringify(ImageData)}
								handleFileChange={handleFileChange}
							/>
						</FormField>

						<Button color="green" type="submit">
							Add Post
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default NewPost;
