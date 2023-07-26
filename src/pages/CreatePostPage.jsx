import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
      userId: 1,
    };
    try {
      const { data } = await axios.post(
        "https://dummyjson.com/posts/add",
        newPost
      );
      console.log(data);
      navigate("/posts");
      setContent(data);
    } catch (error) {
      console.log("Ошибка", error);
    }
  };
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Содержимое"
        />
        <button type="submit">Создать пост</button>
      </form>
    </div>
  );
};

export default CreatePost;
