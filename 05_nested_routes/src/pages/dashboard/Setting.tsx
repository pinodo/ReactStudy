import type React from "react";
import type { DashboardData } from "./Dashboard";
import { useOutletContext } from "react-router-dom";

const Setting: React.FC = () => {
  // <Outlet context={data} /> 데이터 받아 처리
  const { data1, data2 } = useOutletContext<DashboardData>();

  return (
    <>
      <h1>Setting 페이지</h1>
      <div>{data1}</div>
      <div>{data2}</div>
    </>
  );
};

export default Setting;
