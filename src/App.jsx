import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'

function App() {

  return (
    <div className="App text-3xl">
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </div>
  )
}

export default App
