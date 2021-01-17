import React, { Fragment } from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
	<Fragment>
		<a>
			<Icon name="user" />
			16 Friends
		</a>
		<i className="far fa-thumbs-up" style={{ float: "right" }} />
	</Fragment>
);

const FeaturedPost = () => (
	<Card
		fluid
		image="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
		header="Elliot Baker"
		meta="Friend"
		description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
		extra={extra}
	/>
);

export default FeaturedPost;
