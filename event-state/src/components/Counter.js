import { useState } from "react";

export default () => {
    const [count, setCount] = useState(0);
    
    return (<div>
        <p>count 상태변수 값 : {count}</p>
        <p><button type="button" onClick={() => setCount(count + 1)}>카운트 증가</button></p>
    </div>);
}