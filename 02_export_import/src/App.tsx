import React from "react";

//----- default export 처리하기
// 중괄호 없이 import
// import 시 이름을 바꿀 수 있다
import Post from "./components/Post";
import Member from "./components/User"; // 컴포넌트 이름을 Member로 수정 (비추)

//----- named export 처리하기
// 중괄호 안에 import
// 내보낸 이름과 동일한 이름으로 import
// 이름을 바꾸고 싶으면 as 키워드 활용
import { PI } from "./api/calculate";
import { getArea } from "./api/calculate";
import { feature as f } from "./api/calculate";

function App() {
  return (
    <>
      <Post />
      <Member />
      <div>{PI}</div>
      <div>{getArea(10)}</div>
      <div>{f.add(1, 2)}</div>
      <div>{f.sub(3, 1)}</div>
    </>
  );
}

export default App;
