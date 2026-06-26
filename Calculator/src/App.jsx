import { useState } from 'react'
import Button from './Components/Button'



import './App.css'

function App() {
 const buttons = [
  "C", "⌫", "%", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
];

  return (
   <div id='claculator'>
<input type="text " id='display' />

  <Button data={buttons}/>



   </div>
  )
}

export default App
