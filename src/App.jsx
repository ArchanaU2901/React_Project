// import { useState } from 'react'
import Nav from './Components/Nav'
import './App.css'
import Herosection from './Components/Herosection'
import Choose from './Components/Choose'
import Card from './Components/Card'
import card from './data/card'
import CardsItem from './Components/CardsItem'
// import Home from './Components/Home'
import First from './Components/First'
import Homeone from './Components/Homeone'
import Rtl from './Components/Rtl'
import FunctionClick from './Components/FunctionClick'
import DataFetching from './Components/DataFetching'

// import Available from './Components/Available'
// import Rate from './Components/Rate'
// import Rateitem from './Components/Rateitem'
// import rate from './data/rate'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div >

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<First />} />
          <Route path="/blog" element={<Card />} />
          <Route path="/data" element={<DataFetching />} />
          <Route path='/fun' element={<FunctionClick />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
