import { useState } from "react"
import Display from "./components/Display"
import Form from "./components/Form"

function App() {
  
  const [ pokemonCard, setPokemonCard ] = useState([]);
  
  return (
    <>
      
      <div className="container mx-auto">
        <Form pokemonCard={pokemonCard} setPokemonCard={setPokemonCard} />
        <Display pokemonCard={pokemonCard} />
      </div>
      
    </>
  )
}

export default App
