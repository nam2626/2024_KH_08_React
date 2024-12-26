export default function ButtonOK(props) {
    console.log(props);
    //버튼 
    //  클릭했을때 경고창 띄우기 - 메세지 내용을 var 속성값을 이용해 창출력
    //                           data 속성값을 100으로 변경
    const func = () => {
        alert(props.var);
        //props.data = 100;//props는 수정이 안됨
    };
    return <button onClick={func}>OK</button>;
}