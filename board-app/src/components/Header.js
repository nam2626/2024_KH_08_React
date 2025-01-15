import { Link } from "react-router-dom";

export default function Header() {

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}