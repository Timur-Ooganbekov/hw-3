import React from "react";
const PostItem = ({ id, title, body, deletePost }) => {
  return (
    <li>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={deletePost}>удалить</button>
    </li>
  );
};

export default PostItem;
