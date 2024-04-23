import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter,setCounter]=useState(15)
  //let counter = 5


//ADD VALUE
  const addValue = ()=>{
    //console.log("clicked",counter);
    if(counter < 20) 
    setCounter(counter + 1)
  else
    alert('Maximum limit reached')
  
  }

  //REMOVE VALUE
  const removeValue = () => {
    if(counter > 0 ) 
    setCounter(counter -1)  
  else
    alert('No more items to remove')
  }

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter value :{counter}</h2>

      <button onClick ={addValue}>Add value {counter} </button>
      <br />

      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer:{counter}</p>


    </>
  )
}

export default App
