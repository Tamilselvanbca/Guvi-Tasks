import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import Login from './Login'
import Stocks from './Stocks'
import Cards from './Cards'


function App() {

  return (
   <div>
    <Router>
      <Routes>
      <Route exact path='/' element={<Login/>}></Route>
<Route exact path='/Stocks' element={<Stocks/>}></Route>
<Route exact path='/Dashboard' element={<Dashboard/>}></Route>
<Route exact path='/Cards' element={<Cards/>}></Route>
      </Routes>
    </Router>
   </div>
  )
}

export default App
