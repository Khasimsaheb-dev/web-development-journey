import { useState } from 'react'

import './App.css'
import Todo from './components/Todo'
import Heading from './components/Heading'

import Output from './components/Output'
function App() {
 const khaza =[
{
    id:" milk",
    date: "25/06/2024",
  },
  {
    id: "egg",
    date: "26/06/2024",
  },
  {
    id: "pyton",
    date: "27/06/2024",
  },
  {
    id: "java ",
    date: "28/06/2024",
  },
  
];
 
      
    

  return (
    
    <>

        <Heading/>
        <Todo/>
        <Output jamal={khaza}/>







    </>
  )
}

export default App
