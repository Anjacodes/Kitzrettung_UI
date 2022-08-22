import React from 'react'
import { useNavigate } from 'react-router-dom';

function UnderConstruction() {

  const navigate = useNavigate();
  return (
    <div className="z-25 h-screen bg-[url('https://images.unsplash.com/photo-1544367261-fdb53972abee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80')] bg-cover bg-neutral-700 bg-blend-overlay flex flex-col justify-center items-center relative text-center">
      <i className="fa-solid fa-arrow-left text-white absolute top-28 lg:top-12 left-12 text-6xl hover:cursor-pointer hover:text-second" onClick={() => navigate(-1)}></i>
      <h2 className='text-white text-6xl mt-20 w-2/3 lg:w-full'>DIESE SEITE IST NOCH IN ARBEIT...</h2>
    </div>
  )
}

export default UnderConstruction;