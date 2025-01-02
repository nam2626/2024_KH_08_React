import logo from './logo.svg';
import './App.css';
import EffectEx from './components/EffectEx';
import LoginForm from './components/LoginForm';
import RefEx from './components/RefEx';
import MemoEx from './components/MemoEx';
import Callback from './components/Callback';
import ContextComponent from './components/ContextComponent';

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
      <hr/>
      <ContextComponent/>
    </div>
  );
}

export default App;
