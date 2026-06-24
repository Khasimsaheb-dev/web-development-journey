import React from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx';


import Heading from './components/Heading.jsx' ;
import Middle from './components/middle.jsx';
import Time from './components/Time.jsx';

const App = ()=>{
  const user='madel';
  return(

    
    <div className='body'>
       <Navbar />
      <div className="card">
     
       <h1> hello khaza</h1>
      </div>
      <div className='bharta-clock'>
    <Heading/>
    <Middle/>
    <Time/>
    </div>
   </div>
  )
}

export default App
