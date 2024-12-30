import {useState} from 'react';

export default () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const updateId = (e) => {
        setId(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword((current) =>{
            console.log('바뀌기 전 값 : ', current,'바뀐 값 : ', e.target.value);
            return e.target.value; //바뀔값
        });
    }

    return (
        <div>
			<h1>DefaultForm</h1>
			<form method='get' onSubmit={(e) => {
                e.preventDefault();
                console.log('아이디 : ', id, '비밀번호 : ', password);
            }}>
				<input type='text' placeholder='아이디' onKeyUp={updateId} />
				<br />
				<input type='password' placeholder='비밀번호' onChange={updatePassword} />
				<br />
				<input type='submit' value='로그인' />
			</form>
		</div>
    );
}