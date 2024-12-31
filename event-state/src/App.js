import logo from './logo.svg';
import './App.css';
import TimeView from './components/TimeView';
import LoginForm from './components/LoginForm';
import ColorToggle from './components/ColorToggle';

function App() {
  return (
    <div className="App">
      <TimeView/>
      <hr/>
      <LoginForm/>
      <hr/>
      <ColorToggle/>
    </div>
  );
}

export default App;
