import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector(state => state.member.value);
  return (
    <div>
      <h2>게시글 목록을 출력하는 페이지 입니다.</h2>
      <p>{user.id} 님이 로그인하셨습니다.</p>
    </div>
  );
}