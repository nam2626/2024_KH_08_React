import { useState } from 'react';
export default function ColorToggle() {
    const [fcolor , setColor] = useState(true);

    const toggleFunction = () => setColor(!fcolor);
    return (
        <div>
            <p style={ {color : fcolor ? 'red' : 'blue'} }>이 텍스트의 색상을 변경해 보세요!</p>        
            <button onClick={toggleFunction}>글자 색깔 변경</button>
        </div>
    );
}