import type React from "react";
import { useParams } from "react-router-dom";

const User: React.FC = () => {

  // 경로 변수를 처리하는 useParams
  // 경로 변수를 모두 모아서 객체 형태({})로 반환
  // useParams는 문자열 혹은 undefined 반환

  const { id } = useParams<{id: string}>();
  const userId = id ? Number(id) : NaN;

  return <h3>User 페이지 (UserId: {userId})</h3>;
};

export default User;
