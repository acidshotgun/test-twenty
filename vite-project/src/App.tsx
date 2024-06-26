import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./redux/slices/posts";
import { Routes, Route } from "react-router-dom";
//pages
import MainPage from "./pages/MainPage/MainPage";
import PostPage from "./pages/PostPage/PostPage";

import { AppThunkDispatch } from "./redux/store";

import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
