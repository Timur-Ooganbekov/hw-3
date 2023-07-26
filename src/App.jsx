import PostsPage from "./pages/PostsPage";
import CreatePost from "./pages/CreatePostPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/posts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
