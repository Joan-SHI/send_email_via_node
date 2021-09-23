import logo from './logo.svg';
import './App.css';
import ContactForm from './ContactForm.js';
import background from "./Brian.JPG";

function App() {
  return (
    <div className="App">   
      <header className="App-header" style={{ backgroundImage: `url(${background})`,backgroundSize: "cover" }}>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <ContactForm /> 
        {/* <div style={{ backgroundImage: `url(${background})` }}>
      Hello World
    </div> */}
      </header>
    </div>
  );
}

export default App;
