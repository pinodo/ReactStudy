import type React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  // useNavigate: 프로그래밍적으로 이동
  const navigate = useNavigate();

  // 이벤트 핸들러 (이벤트 객체 타입 명시)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // data-post-id 값 꺼내기
    const postId = e.currentTarget?.dataset.postId;
    navigate(`/posts/${postId}`);
  };

  return (
    <>
      <h3>Home</h3>
      <button onClick={handleClick} data-post-id="1">
        <span>POST-1로 이동</span>
      </button>
      <button onClick={handleClick} data-post-id="2">
        POST-2로 이동
      </button>
    </>
  );
};

export default Home;
