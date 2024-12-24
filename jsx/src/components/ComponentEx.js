export default function ComponentEx() {
    const func = () => alert('hello');
    //이벤트 처리 방법
    //https://ko.legacy.reactjs.org/docs/handling-events.html

    const items = ['item1', 'item2', 'item3'];

    return (
        <div>
            <h2>태그는 반드시 닫아야 됨, 단일태그도 포함</h2>
            <input type="text" placeholder="아이디를 입력해주세요"/>
            <hr></hr>
            <h2>이벤트 처리 방법</h2>
            <button onClick={func}>경고창 띄우기 - 1</button>
            <button onClick={() => alert('hello')}>경고창 띄우기 - 2</button>
            <hr />
            <h2>반복적인 UI 생성</h2>
            <ul>
                {items.map((item,idx) => <li key={idx}>{item}</li>)}    
            </ul>            
        </div>
    );
}