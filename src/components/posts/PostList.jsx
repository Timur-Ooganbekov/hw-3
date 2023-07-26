import React from "react";
import PostItem from "./PostItem";
import axios from "axios";

const PostList = ({ posts }) => {
  const deletePost = (id) => {
    axios
      .delete(`https://dummyjson.com/posts/${id}`)
      .then((data) => console.log(data));
  };

  return (
    <ul className="list">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          {...post}
          post={post}
          deletePost={() => deletePost(post.id)}
        />
      ))}
    </ul>
  );
};

export default PostList;
