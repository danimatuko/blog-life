import React  from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
	<div>
		<Icon name="eye" />
		<span>16 </span>
		<Icon name="thumbs up outline" />
		<span>9 </span>
	</div>
);

const LatestPostItem = ({ post }) => {
	const { imageURL, title, body, author } = post;

	return (
		<Card
			fluid
			image={imageURL}
			header={title}
			meta={author}
			description={body}
			extra={extra}
		/>
	);
};

export default LatestPostItem;
