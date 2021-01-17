import React from "react";
import { Header, Segment } from "semantic-ui-react";
import CategoryMenu from "../category-menu/CategoryMenu";
import "./hero.scss";

const Hero = () => {
	return (
		<Segment attached="top" className="page-header">
			<Header as="h1">Hello, world!</Header>
			<p>
				This is a template for a simple marketing or informational website. It
				includes a large callout called a jumbotron and three supporting pieces
				of content. Use it as a starting point to create something more unique.
			</p>
			<CategoryMenu />
		</Segment>
	);
};

export default Hero;
