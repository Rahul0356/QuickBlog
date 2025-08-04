import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Bolg from './pages/Bolg'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/blog' element={<Bolg/>} />
      </Routes>
    </div>
  )
}

export default App