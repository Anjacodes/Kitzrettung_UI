import React from 'react'
import Form from '../sharedComponents/Form'

function Member() {
  return (
    <section className="w-screen -ml-20 lg:-ml-52 mt-48 h-[30rem] relative bg-[url('https://images.unsplash.com/photo-1473603477862-9d352d4615e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')] bg-cover bg-neutral-700 bg-blend-overlay">
        <div className="absolute top-[5%] lg:top-[30%] flex flex-col items-center w-full">
          <h3 className="text-white text-4xl tracking-wide">WERDE MITGLIED</h3>
          <p className="w-2/3 lg:w-1/2 text-white text-xl text-center mt-6 mb-6 lg:mb-12">Trage deinen Namen und Email Adresse ein und erhalte Informationen zur Mitgliedschaft und deinen Antrag per Email.</p>
          <Form />
        </div>
    </section>
  )
}

export default Member