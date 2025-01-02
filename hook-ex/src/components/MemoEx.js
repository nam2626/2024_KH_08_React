import { useMemo, useRef, useState } from 'react';
export default function MemoEx() {
    const [list, setList] = useState([]);
    const input = useRef(null);
    const addNumber = () => {
        setList([...list, Number(input.current.value)]);
    }
    const getAverage = (arr) => {
        console.log("평균 계산중.....");
        if(arr.length === 0) return 0;
        //평균을 구해서 리턴
        return arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
    }
    const getAverageMemo =  useMemo(() => getAverage(list), [list]);

    const [temp, setTemp] = useState(0);

    return (<>
        <h2>useMemo 테스트</h2>
        <p>{list.join(', ')} / 평균 : {getAverageMemo}  </p>
        <p>
            <input type="number" ref={input} />
            <button onClick={addNumber}>숫자 추가</button>
        </p>
        <p><button onClick={() => setTemp(temp + 1)}>테스트</button></p>
    </>);   
}