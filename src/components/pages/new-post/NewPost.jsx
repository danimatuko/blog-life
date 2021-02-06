import React from "react";
import { Formik, Form, Field } from "formik";
import NewPostSchema from "./newPostSchema";
import CustomImageInput from "../../form/CustomImageInput";

const NewPost = () => {
	const initialState = {
		author: "logged in user",
		category: "",
		title: "",
		date: Date.now(),
		body: "",
		postImage: "",
		likes: null,
		views: null
	};

	return (
		<Formik
			initialValues={initialState}
			validationSchema={NewPostSchema}
			validateOnChange={false}
			onSubmit={(values) => console.log(values)}>
			{(props) => (
				<Form>
					<Field name="postImage" component={CustomImageInput} />
					{props.errors.postImage && (
						<div id="feedback">{props.errors.postImage}</div>
					)}

					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default NewPost;
