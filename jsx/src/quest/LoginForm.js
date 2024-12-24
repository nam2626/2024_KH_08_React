export default () => {
    const login = () => {
        const email = document.querySelector('#email').value;
        const passwd = document.querySelector('#password').value;
        console.log(email, passwd);
    };
    return (
        <div>
            <h3>LoginForm</h3>
            <input type="email" id="email" placeholder="E-mail 입력하세요"/>
            <br/>
            <input type="password" id="password" placeholder="비밀번호 입력하기"/>
            <br/>
            <button type="button" onClick={login}>로그인하기</button>
        </div>
    );
}