import logo from './logo.svg';
import './App.css';
import ButtonOK from './components/ButtonOK';

function App() {
  return (
    <div className="App">
      <h2>컴포넌트 Props</h2>
      <ButtonOK data='데이터' var='확인' attr1='속성1'/>
    </div>
  );
}

export default App;
