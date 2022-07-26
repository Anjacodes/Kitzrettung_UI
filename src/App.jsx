import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/AboutUs/About';
import Work from './components/AboutUs/Work/Work';

function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="App text-3xl">
      <Routes>
        <Route path="/" element={<Main menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>}/>
        <Route path="about" element={<About />}>
          <Route path="work" element={<Work />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
