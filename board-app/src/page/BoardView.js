import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import '../css/main.css';
import '../css/BoardViewPage.css';

export default function BoardView() {
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  const [board, setBoard] = useState({});
  const [file, setFileList] = useState([]);
  const user = useSelector(state => state.member.value);
  const bno = useParams().bno;
  const commentContent = useRef('');
  const commentCount = useRef(1);
  const navigator = useNavigate();
  // axios로 게시글 데이터를 요청해서 받음
  
  useEffect(() => {
    axios.get(`http://localhost:9999/board/${bno}`)
    .then(res => {
      console.log(res.data);
      setData(res.data);
      setBoard(res.data.board);
      setFileList(res.data.fileList);
      setComment(res.data.commentList);
    })
    .catch(err => console.log(err));
  },[]);

  // 게시글 출력
  // 첨부파일 목록 출력
  // 댓글 목록 출력
 
  return (
    <div id="board_view_container">
      <table>
        <tbody>
        <tr>
          <th>글번호</th>
          <td>{board.bno}</td>
        </tr>
        <tr>
          <th>제목 : </th>
          <td>{board.title}</td>
        </tr>
        <tr>
          <th>작성자 : </th>
          <td>{board.nickName}</td>
        </tr>
        <tr>
          <th>조회수 : </th>
          <td>{board.bcount}</td>
        </tr>
        <tr>
          <td colSpan="2"> 
            {/* html 적용하여 출력 */}
            <div dangerouslySetInnerHTML={{__html: board.content}}></div>
          </td>
        </tr>
        <tr>
          <td colSpan="2"> 
            <a href="#" id="btn_like" >좋아요 : <span id="like_count">{board.blike}</span> </a>
            <a href="#" id="btn_hate">싫어요 : <span id="hate_count">{board.bhate}</span> </a>
          </td>
        </tr>
        
        <tr>
             <td colSpan="2">
                 
        {
          user.token == null ? <div className="comment_form">
                      <p>로그인 후 작성가능</p>
                  </div> : <div className="comment_form">
                        <textarea name="content" placeholder="댓글을 입력하세요"></textarea>
                        <button type="button" >댓글작성</button>
                </div>
        }
             </td>
         </tr>
     <tr>
       <td colSpan="2">
        <h3>첨부파일 목록</h3>
        <ul>
         
        </ul>
        </td>
     </tr>
     </tbody>
      </table>
      <hr/>
      <div className="comment_container">
       
        </div>
        <button type="button" id="btn_more" >댓글 더보기</button>            
    </div>
  );
}