import logo from './logo.svg';
import './App.css';
import EffectEx from './components/EffectEx';
import LoginForm from './components/LoginForm';
import RefEx from './components/RefEx';
import MemoEx from './components/MemoEx';
import Callback from './components/Callback';

function App() {
  return (
    <div className="App">
      <EffectEx/>
      <hr/>
      <LoginForm/>
      <hr/>
      <RefEx/>
      <hr/>
      <MemoEx/>
      <hr/>
      <Callback/>
    </div>
  );
}

export default App;
