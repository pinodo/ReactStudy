import type React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <>
      {/* 상단 헤더 (공통 화면) */}
      <Header />

      {/* 메인 화면 (하위 라우터에 의해 변경) */}
      <main>
        <Outlet />
      </main>

      {/* 하단 푸터 (공통 화면) */}
      <Footer />
    </>
  );
};

export default Layout;
