import logo from './logo.svg';
import './App.css';
import Nav from './components/nav_bar/nav';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('react by Quyet')
  const handelEven = () => {
    console.log(name);
    const result = document.getElementById('input').value
    setName(result)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello wourld with {name}</h1>
        <input id='input' type="text" name="" />
        <button type="button" onClick={() => handelEven()}>click</button>

      </header>
    </div>
  );
}

export default App;
