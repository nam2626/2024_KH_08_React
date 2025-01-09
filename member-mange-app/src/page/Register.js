import { useRef } from 'react';
import {navigate} from 'react-router-dom';
export default function Register() {
  const id = useRef(null);
  const password = useRef(null);
  const checkPwd = useRef(null);
  const username = useRef(null);
  const nickname = useRef(null);

  const navigate = useNavigate();
  const checkPassword = () => {
    if(password.current.value !== checkPwd.current.value) {
      window.alert('비밀번호가 일치하지 않습니다.');
      return false;
    }
    return true;
  }
  const register = () => {
    //axios 이용해서 회원등록 처리
    
  }
  const cancel = () => {
    navigate(-1);
  }
  return (
    <div>
      <h2>회원등록</h2>
      <ul>
        <li><input type="text" ref={id} placeholder="아이디를 입력하세요"/></li>
        <li><input type="password" ref={password} placeholder="비밀번호를 입력하세요"/></li>
        <li><input type="password" ref={checkPwd} placeholder="비밀번호를 다시 입력해주세요"/></li>
        <li><input type="text" ref={username} placeholder="이름 입력해주세요"/></li>
        <li><input type="text" ref={nickname} placeholder="닉네임 입력해주세요"/></li>
        <li><button onClick={register}>회원가입</button><button onClick={cancel}>취소</button></li>
      </ul>
    </div>
  );
}