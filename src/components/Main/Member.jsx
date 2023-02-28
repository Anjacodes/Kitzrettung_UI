import React from 'react'
import Form from '../sharedComponents/Form'

function Member() {
  return (
    <section className="w-screen relative mt-48 self-center h-[30rem] bg-[url('https://images.unsplash.com/photo-1473603477862-9d352d4615e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')] bg-repeat bg-cover bg-neutral-700 bg-blend-overlay">
        <div className="absolute top-[10%] lg:top-[20%] flex flex-col items-center w-full lg:w-full">
          <h3 className="text-white text-4xl tracking-wide">WERDE MITGLIED</h3>
          <p className="w-1/2 text-white text-xl text-center mt-6 mb-12">Fordere Informationen zur Mitgliedschaft und deinen Antrag per Email an.</p>
          <Form />
        </div>
    </section>
  )
}

export default Member