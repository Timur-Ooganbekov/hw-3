import PostsPage from "./pages/PostsPage";
import CreatePost from "./pages/CreatePostPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CreatePost />} />
          <Route path="/posts" element={<PostsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
