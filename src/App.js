import logo from './logo.svg';
import './App.css';
import { Button, Heading, Paragraph } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />
        <Heading />
        <Paragraph>
          Basic converter of binary numbers to decimal numbers, please introduce
          only 0s and 1s and then hit the button
        </Paragraph>
      </header>
    </div>
  );
}

export default App;
