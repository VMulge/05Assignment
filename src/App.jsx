import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button disabled={value.length < 1}>Submit</button>
    </>
  );
}

export default App
