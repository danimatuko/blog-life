import * as Yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const NewPostSchema = Yup.object().shape({
	postImage: Yup.mixed()
		.test("fileFormat", "Unsupported Format", (value) => {
			console.log("yup->", value);
			return value && SUPPORTED_FORMATS.includes(value.type);
		})
		.test("fileSize", "Your image is too big :(", (value) => {
			console.log(value.size / 1000);

			return value && value.size / 1000 <= 1024 * 3;
		})
});

export default NewPostSchema;
