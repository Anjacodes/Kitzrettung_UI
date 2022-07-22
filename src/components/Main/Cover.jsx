import React, {useState} from 'react'
import Navbar from '../sharedComponents/Navbar'
import Stats from './Stats'

function Cover() {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <section className="h-screen bg-[url('https://images.unsplash.com/photo-1591123195933-b2df071f444b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80')] bg-cover bg-neutral-700 bg-blend-overlay flex flex-col justify-center items-center">
      <Navbar menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
      <div className="flex flex-col">
         <p className="text-white text-lg self-start">KREIS EUSKIRCHEN</p>
         <h1 className="text-white font-bold text-4xl lg:text-8xl tracking-wider">REHKITZRETTUNG</h1>
         <p className="text-white text-xl self-end">eV</p>
      </div>
      <Stats menuVisible={menuVisible} />
    </section>
  )
}

export default Cover