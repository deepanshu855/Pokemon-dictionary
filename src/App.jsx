import axios from 'axios'
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllPokemons from './pages/AllPokemons'
import PokemonDetails from './pages/PokemonDetails'

const App = () => {

  return (
    <div className='min-h-screen bg-black text-white'>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/pokemons' element={<AllPokemons />}/>
            <Route path='/pokemons/:name' element={<PokemonDetails />}/>
        </Routes>
    </div>
  )
}

export default App