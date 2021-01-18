import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import FeaturedPosts from "../../latest-posts/LatestPosts";

const Homepage = () => (
	<Grid>
		<Grid.Column width={12}>
			<FeaturedPosts />
		</Grid.Column>
		<Grid.Column width={4}>
			<Segment>
				<h2>Side Content</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum
					m saepe ex illo expedita recusandae. quis modi perferendis
					praesentium. Temporibus, dignissimos? amet consectetur adipisicing
					elit. Et voluptatum m saepe ex illo expedita recusandae. quis modi
					perferendis praesentium. Temporibus, dignissimos?
				</p>
			</Segment>
			<Segment>
				<h2>Side Content</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum
					m saepe ex illo expedita recusandae. quis modi perferendis
					praesentium. Tempo Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Et voluptatum m saepe ex illo expedita recusandae. quis modi
					perferendis praesentium. Tempo Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Et voluptatum m saepe ex illo expedita recusandae.
					quis modi perferendis praesentium. Temporibus, dignissimos?
				</p>
			</Segment>
		</Grid.Column>
	</Grid>
);

export default Homepage;
