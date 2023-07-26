import React from "react";
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
