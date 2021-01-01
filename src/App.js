import Past from './Components/Past/Past'
import Ongoing from './Components/Ongoing/Ongoing'
import Upcoming from './Components/Upcoming/Upcoming'
import './App.css'
import { useState } from 'react'

function App() {


  return (
    <div className="App">
      <Past />
      <Ongoing />
      <Upcoming />

      <div className="buttons">


      </div>

    </div>
  );
}

export default App;
