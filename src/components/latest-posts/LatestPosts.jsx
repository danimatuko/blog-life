import React, { useEffect, useState } from "react";
import LatestPostItem from "../latest-post-item/LatestPostItem";
import axios from "axios";

const LatestPosts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		try {
			const posts = await axios.get("/posts");
			setPosts(posts.data);
		} catch (e) {
			console.log("error in getPosts");
		}
	};

	return (
		<div>
			{posts.map((post) => (
				<LatestPostItem key={post.id} post={post} />
			))}
		</div>
	);
};

export default LatestPosts;
