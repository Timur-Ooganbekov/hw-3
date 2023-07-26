import React, { useEffect, useState } from "react";
import PostList from "../components/posts/PostList";
import axios from "axios";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/posts");
      console.log(data);
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default PostsPage;
