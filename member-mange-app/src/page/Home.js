import axios from 'axios';
import { useEffect, useState } from 'react';
import MemberItem from '../components/MemberItem';
export default function Home() {
  //axios 이용해서 전체 회원 데이터 읽어오는 코드 작성
  //   /member/list  <--- Get
  const [memberList,setMemberList] = useState([]);
  
  useEffect(() => {
      axios.get('http://localhost:9999/member/list').then(res => {
        setMemberList(res.data);
      }).catch(err => console.log(err));
  },[]);

  console.log(memberList);
  return (
    <div>
      <h2>회원 리스트</h2>
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>회원등급</th>
          </tr>
        </thead>
        <tbody>
          {
            memberList.map(item=><MemberItem id={item.id} username={item.userName} nickname={item.nickName} grade={item.grade}/>)
          }
        </tbody>
      </table>
    </div>
  );
}