import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Button, Header, Label, FormField } from "semantic-ui-react";
import { closePopUp } from "../../../redux/actions/popupActions";
import { popUpName } from "../../../redux/reducers/popupReducer";
import { Formik, Form, Field } from "formik";
import CustomTextField from "../../form/CustomTextField";
import CustomTextArea from "../../form/CustomTextArea";
import newPostSchema from "./newPostSchema";
import axios from "axios";
import categoryOptions from "../../layout/category-menu/category-options";
import CustomSelectField from "../../form/CustomSelectField";

const NewPost = () => {
	const dispatch = useDispatch();
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

	const addPost = async (newUser) => {
		try {
			/* In the backend I need to check if a user alerady exist */
			await axios.post("/users", newUser);
			dispatch(closePopUp(popUpName.SIGN_UP));
		} catch (err) {
			console.log(err);
		}
	};

	const onSubmit = (values, { resetForm }) => {
		addPost(values);
		resetForm({});
	};

	return (
		<Fragment>
			<Header
				as="h2"
				size="medium"
				textAlign="center"
				content="Add New Post"
			/>

			<Formik
				initialValues={initialState}
				validationSchema={newPostSchema}
				onSubmit={onSubmit}>
				<Form className="ui form" size="mini">
					<CustomTextField
						label="Title"
						type="text"
						name="title"
						placeholder="title"
					/>

					<CustomSelectField
						name="category"
						label="Category"
						options={categoryOptions}
					/>

					<CustomTextArea
						label="Post Body"
						type="text"
						name="body"
						placeholder="title"
					/>

					<Button type="submit" positive>
						Add Post
					</Button>
					<Button
						type="button"
						onClick={() => dispatch(closePopUp(popUpName.SIGN_UP))}>
						Cancel
					</Button>
				</Form>
			</Formik>
		</Fragment>
	);
};
export default NewPost;
