import logo from './logo.svg';
import './App.css';
import Nav from './components/nav_bar/nav';

function App() {
  const name = 'react'
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello wourld with {name}</h1>
      </header>
    </div>
  );
}

export default App;
