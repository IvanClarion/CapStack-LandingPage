import React from 'react'
import { Routes, Route } from 'react-router'
import Index from '../screen/index'
import NavBar from '../components/navBar/MainNavBar'
function App() {
  return (
    <>
    <NavBar/>
    <main>
        <Routes>
          
            <Route path='/' element={<Index/>}/>
        </Routes>
    </main>
    </>
  )
}

export default App
