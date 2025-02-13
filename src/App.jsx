import React from 'react'
import LandingPage from './LandingPage'
import HomeCare from './HomeCare'
import Login from './LoginPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to="/login" replace/>}/>
            <Route path='/home' element={
              <div>
                <LandingPage></LandingPage>
                <HomeCare></HomeCare>
              </div>
            } />
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </Router>
      </div>
      
      
  )
}

export default App