export default function Login() {

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <p>이곳은 로그인 페이지입니다.</p>
      <div className="login-form">
        <input type="text"  placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button type="button">로그인</button>
      </div>
    </div>

  );
}