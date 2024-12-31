import logo from './logo.svg';
import './App.css';
import EffectEx from './components/EffectEx';
import LoginForm from './components/LoginForm';
import RefEx from './components/RefEx';

function App() {
  return (
    <div className="App">
      <EffectEx/>
      <hr/>
      <LoginForm/>
      <hr/>
      <RefEx/>
    </div>
  );
}

export default App;
