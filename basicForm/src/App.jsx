import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicForm1 from './components/BasicForm1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicForm1></BasicForm1>
    </>
  )
}

export default App
