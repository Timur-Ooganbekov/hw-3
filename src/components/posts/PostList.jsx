import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <ul className="list">
      {posts.map((post) => (
        <PostItem key={post.id} {...post} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
