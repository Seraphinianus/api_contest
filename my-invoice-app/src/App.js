import logo from './logo.svg';
import './App.css';
import Setup from '../src/boilerplates/1-first-request';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>sal ba</p>
        <Setup />
      </header>
    </div>
  );
}

export default App;
