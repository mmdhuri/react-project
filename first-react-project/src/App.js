//import Contact from "./Contact"
import {useState} from 'react'
function App() {
 let [counter,setCounter] = useState(1);
  const addValue = () =>{
    counter = counter + 1;
    setCounter(counter);
  }

  const decreaseValue = () =>{
    counter = counter - 1;
    setCounter(counter);
  }
  return (
    <div>
      <h1>Counter App {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </div>
  );
}

export default App;
