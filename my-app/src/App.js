import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordion';
import RandomColor from './components/randomColor';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />

      {/* Random color component */}
      <RandomColor />
    </div>
  );
}

export default App;
