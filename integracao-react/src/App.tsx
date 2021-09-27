import Contador from './components/Contador';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Contador</h1>

      <Contador valorInicial={0} />

      <br />
      <hr />
      <br />

      <Contador valorInicial={0} />

      <br />
      <hr />
      <br />

      <Contador valorInicial={0} />
    </div>
  );
}

export default App;
