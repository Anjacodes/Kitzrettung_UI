import React from 'react'
import Navbar from '../sharedComponents/Navbar'

function Cover({menuVisible, setMenuVisible}) {
  return (
    <section className="h-screen bg-[url('https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-neutral-700 bg-blend-overlay flex flex-col justify-center items-center">
      <Navbar menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
      <div className="flex flex-col lg:mt-20">
         <h1 className="text-white font-bold text-6xl lg:text-8xl tracking-wider">ÜBER UNS</h1>
      </div>
  </section>
  )
}

export default Cover