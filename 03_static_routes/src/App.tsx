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
          <Link to={"/users"}>USER</Link>
          <Link to={"/posts"}>POST</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/posts" element={<Post />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
