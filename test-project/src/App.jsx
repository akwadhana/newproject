import { useState } from 'react'
import './App.css'
import NewsCatalouge from './module/NewsCatalouge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
 <NewsCatalouge/>
    </div>
    </>
  )
}

export default App
