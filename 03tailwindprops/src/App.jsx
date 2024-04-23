import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    name:"John",
    age:32
  }
  let newArr = [1,2,3,4,5,6,7]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'c> TailWind test </h1>
      <Card userName ="chai aur code" btnText="click me" />
      <Card userName="Vats" btnText ="Visit me"/>
    </>
  )
}

export default App
