import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Coins from './components/Coins'
import CoinDetails from './components/CoinDetails'
import Exchanges from './components/Exchanges'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>

    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/coins' element={<Coins/>} />
      <Route path='/exchanges' element={<Exchanges/>} />
      <Route path='/coins/:id' element={<CoinDetails/>} />
    </Routes>
    <Footer/>
    
    
    </BrowserRouter>
  )
}

export default App