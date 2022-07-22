import React from 'react'

function Member() {
  return (
    <section className="w-screen -ml-20 lg:-ml-52 mt-48 h-[30rem] relative bg-[url('https://images.unsplash.com/photo-1473603477862-9d352d4615e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')] bg-cover bg-neutral-700 bg-blend-overlay">
        <div className="absolute top-[20%] lg:top-[30%] flex flex-col items-center w-full">
          <h3 className="text-white text-4xl tracking-wide">WERDE MITGLIED</h3>
          <p className="w-1/2 text-white text-xl text-center mt-6 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex items-center">
            <input type="email" placeholder="Email" className="text-base py-2 px-5 rounded-l-lg"></input>
            <button className="rounded-r-lg bg-second py-2 px-4 text-white text-base hover:bg-third"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
    </section>
  )
}

export default Member