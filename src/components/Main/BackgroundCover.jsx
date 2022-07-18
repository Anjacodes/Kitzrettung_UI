import React from 'react'

function BackgroundCover() {
  return (
    <div className="h-screen bg-[url('https://images.unsplash.com/photo-1591123195933-b2df071f444b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80')] bg-cover bg-neutral-700 bg-blend-overlay flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-6xl lg:text-9xl tracking-wider">KITZRETTUNG eV</h1>
    </div>
  )
}

export default BackgroundCover