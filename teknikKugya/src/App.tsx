import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TelefonNevek from './components/TelefonNevek'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TelefonNevek/>
    </>
  )
}

export default App
