import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label>
          Your first name:
          <input id='first-name' name="firstName" />
        </label>
        <hr />
        <label>Your age:
          <input name="age" type="number" />
        </label>
      </header>
    </div>
  );
}

export default App;
