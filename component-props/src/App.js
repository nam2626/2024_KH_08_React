import logo from './logo.svg';
import './App.css';
import ButtonOK from './components/ButtonOK';
import PropsEx from './components/PropsEx';
import ButtonCount from './components/ButtonCount';

const obj = {
    count : 0
}
function App() {

  const addCount = () => {
      obj.count += 1;
      console.log(obj.count);
  }

  return (
    <div className="App">
      <h2>컴포넌트 Props</h2>
      <ButtonOK data='데이터' var='확인' attr1='속성1'/>
      <hr></hr>
      <PropsEx name='홍길동' age='30'/>
      <hr/>
      <ButtonCount count={obj.count} addCount={addCount}/>
    </div>
  );
}

export default App;
