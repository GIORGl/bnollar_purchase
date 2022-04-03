import React from "react";
import NavBar from "../components/navBar/NavBar";
import Content from "../components/content/Content";
import MorePosts from "../components/morePosts/MorePosts";
import "./Posts.css";
function Posts() {
  return (
    <div className="postPage">
      <NavBar />
      <Content />
      <p className="morePostsText">More posts from Michael</p>
      <MorePosts />
    </div>
  );
}

export default Posts;
