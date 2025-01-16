import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [pageNo, setPageNo] = useState(1);
  const [pageContentEa, setPageContentEa] = useState(20);
  const [boardList, setBoardList] = useState([]);
  const [pagging, setPagging] = useState({});

  // 홈 컴포넌트가 렌더링 될때 게시글 목록을 출력
  // axios 이용해서 첫번째 페이지 데이터를 가져옴
  // 게시글, 페이징 목록을 가져옴
  const pageRequest = useCallback(() => {
    axios
      .get(
        `http://localhost:9999/board/list?pageNo=${pageNo}&pageContentEa=${pageContentEa}`
      )
      .then((res) => {
        console.log(res.data);
        setBoardList(res.data.boardList);
        setPagging(res.data.pagging);
      });
  }, []);

  useEffect(() => {
    pageRequest();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
            <th>좋아요</th>
            <th>싫어요</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
}
