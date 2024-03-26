import { useState } from 'react'
import './App.css'
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Manager />
      <Footer />
    </>
  )
}

export default App
