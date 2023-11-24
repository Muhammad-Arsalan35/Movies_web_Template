import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenrMovieList from './components/GenrMovieList'

function App() {
 

  return (
    <div className=' bg-black-500'>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenrMovieList/>
      </div>
  )
}

export default App
