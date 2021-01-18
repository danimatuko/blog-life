export const setPosts = () => {
    console.log("setPostsState");
    return {
        type: "SET_POSTS",
        payload: ["post1", "post2"]
    };
};