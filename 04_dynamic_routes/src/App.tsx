import type React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Post from "./pages/Post";

const App: React.FC = () => {
  return (
    <>
      <header>
        <h1>Welcome</h1>
        <nav>
          <Link to={"/"}>HOME</Link>
          <Link to={"/users/1"}>USER</Link>
          <Link to={"/posts/2/comments/3"}>POST</Link>
        </nav>
      </header>
      <main>
        {/* 경로 변수는 ":변수" 형태로 사용합니다. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/posts/:pid/comments/:cid" element={<Post />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
