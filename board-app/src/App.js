import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
   <Router>
    <Header/>
    <hr/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </Router>
  );
}

export default App;
