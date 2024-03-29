import React from 'react'
import Stats from './Stats'

function Cover({menuVisible}) {

  return (
    <header className="h-screen bg-[url('https://images.unsplash.com/photo-1506099914961-765be7a97019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-neutral-800 bg-blend-overlay flex flex-col justify-center items-center">
      <div className="flex flex-col lg:mt-20">
         <h1 className="text-white font-bold text-4xl lg:text-8xl tracking-wider">REHKITZRETTUNG</h1>
         <p className="text-white text-xl self-end">KREIS EUSKIRCHEN e.V.</p>
      </div>
      <Stats menuVisible={menuVisible}/>
    </header>
  )
}

export default Cover