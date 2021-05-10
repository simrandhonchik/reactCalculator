import './App.css';
import { Button } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core';
import Greet from './Greet.js';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <header className="App-header">
        <p>
          Test
        </p>
        <div>   
            <Button className = "numbers">1</Button>
            <button className = "numbers">2</button>
            <button className = "numbers">3</button>
        </div>
        <div>
            <button className = "numbers">4</button>
            <button className = "numbers">5</button>
            <button className = "numbers">6</button>
        </div>
        <div>
            <button className = "numbers">7</button>
            <button className = "numbers">8</button>
            <button className = "numbers">9</button>
        </div>
        <div>
        <button className = "number0" color="primary">0</button>
        <button className = "numberD" color="primary">.</button>
        </div>
        <div className = "operations">
            <button className = "divide">&#247;</button>
            <button className = "multiply">x</button>
            <button className = "subtract">-</button>
            <button className = "add">+</button>
            <button className = "equals">9</button>
        </div>

        <div>
          add(props);
        </div>
        <Greet />

      </header>
    </div>
    </ThemeProvider>


  );

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
}

export default App;
