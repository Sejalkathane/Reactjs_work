
import './App.css';

function App() {

  const names = ["Sk", "Pk", "Nk"];

  return (
    <div className="App">

      {/* //map */}
      {/* key= index of that element */}
      {/* value:name which actually have value */}
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>
      })}

    </div>
  );
}

export default App;
