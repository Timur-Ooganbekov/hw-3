import React from "react";
import { Link } from "react-router-dom";
const PostItem = ({ id, title, body }) => {
  return (
    <li>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
    </li>
  );
};

export default PostItem;
