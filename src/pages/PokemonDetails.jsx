import React from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
  const params= useParams()
  return (
    <div>PokemonDetails {params}</div>
  )
}

export default PokemonDetails