import { useRef } from 'react';
import './../css/Login.css';
import axios from 'axios';
export default function Login() {
  const id = useRef(null);
  const pwd = useRef(null);
  const loginHandler = () => {
    const data = {
      id : id.current.value,
      passwd : pwd.current.value
    }
    axios.post('http://localhost:9999/member/login', data)
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  }
  return (
    <div className="login-container">
      <h2>로그인</h2>
      <p>이곳은 로그인 페이지입니다.</p>
      <div className="login-form">
        <input type="text" ref={id} placeholder="아이디" />
        <input type="password" ref={pwd} placeholder="비밀번호" />
        <button type="button" onClick={loginHandler}>로그인</button>
      </div>
    </div>

  );
}