import Past from './Components/Past/Past'
import Ongoing from './Components/Ongoing/Ongoing'
import Upcoming from './Components/Upcoming/Upcoming'
import './App.css'
import { useState } from 'react'

function App() {

  var [variable, setVariable] = useState(0)

  var increment = () => {
    setVariable(current => current + 1)
  }

  var decrement = () => {
    setVariable(current => current - 1)
  }

  return (
    <div className="App">
      <Past />
      <Ongoing />
      <Upcoming />

      <div className="buttons">
        <button onClick={decrement}>-</button>
        <span>{variable}</span>
        <button onClick={increment}>+</button>
      </div>

    </div>
  );
}

export default App;
