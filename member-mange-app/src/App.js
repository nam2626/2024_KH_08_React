import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <hr/>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
