import logo from './logo.svg';
import './App.css';
import Setup from '../src/boilerplates/1-first-request';
import Setup2 from '../src/boilerplates/2-headers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>sal ba</p>
        <Setup />
        <Setup2 />
      </header>
    </div>
  );
}

export default App;
