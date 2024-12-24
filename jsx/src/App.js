import logo from './logo.svg';
import './App.css';
import NoJSX from './components/NoJSX';
import ComponentEx from './components/ComponentEx';
import LoginForm from './quest/LoginForm';
import RegisterForm from './quest/RegisterForm';
function App() {
  return (
    <div className="App">
     <NoJSX />
     <hr/>
     <ComponentEx />
     <hr/>
     <LoginForm/>
     <hr/>
     <RegisterForm/>
    </div>
  );
}

export default App;
