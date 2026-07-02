import type React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Layout from "./pages/layouts/Layout";
// import UserList from "./pages/users/UserList";
// import PostList from "./pages/posts/PostList";
// import Home from "./pages/Home";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Info from "./pages/dashboard/Info";
// import Setting from "./pages/dashboard/Setting";

//----- lazy 로딩 도입: dynamic import() 문법으로 필요할 때만 불러옴
const Layout = lazy(() => import("./pages/layouts/Layout"));
const UserList = lazy(() => import("./pages/users/UserList"));
const PostList = lazy(() => import("./pages/posts/PostList"));
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Info = lazy(() => import("./pages/dashboard/Info"));
const Setting = lazy(() => import("./pages/dashboard/Setting"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>화면 불러오는 중...</div>}>
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
    </Suspense>
  );
};

export default App;
