import type React from "react";
import { useSearchParams } from "react-router-dom";

const SearchResult: React.FC = () => {
  // useSearchParams: 파라미터(쿼리 스트링) 반환
  const [searchParams] = useSearchParams();
  const keyword: string =
    searchParams.get("keyword") || "전달안되면사용할기본값";

  return (
    <>
      <h3>SearchResult</h3>
      <p>파라미터: {searchParams.toString()}</p>
      <p>검색어: {keyword}</p>
    </>
  );
};

export default SearchResult;
