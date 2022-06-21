import { useState, useEffect } from 'react'
import './App.css'
import { Button } from '../components/Button'

function App() {
  const [planets, setPlanets] = useState()
  useEffect(() => {
    getPlanets()
  }, [])

  const getPlanets = async () => {
    const planetsResponse = await (await fetch('/planets')).json()
    setPlanets(planetsResponse)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola Mundo!</h1>
        <Button>Click Me!</Button>
        <div>{JSON.stringify(planets)}</div>
      </header>
    </div>
  )
}

export default App
