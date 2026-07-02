import type React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import UserList from "./pages/users/UserList";
import PostList from "./pages/posts/PostList";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Info from "./pages/dashboard/Info";
import Setting from "./pages/dashboard/Setting";

const App: React.FC = () => {
  return (
    <Routes>
      {/* 상위 라우트 */}
      <Route path="/" element={<Layout />}>
        {/* 하위 라우트: <Outlet />에 표시된다. */}
        <Route index element={<Home />} />
        <Route path="users" element={<UserList />} />
        <Route path="posts" element={<PostList />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Info />} />
          <Route path="info" element={<Info />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
