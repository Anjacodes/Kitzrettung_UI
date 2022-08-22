import React from 'react'
import { useState } from 'react'

function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    setName('');
    setEmail('');
  }

  return (
    <form className="text-center flex flex-col text-base align-center lg:mb-4" action="https://formspree.io/f/xknenklz" method="POST" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" className="rounded-lg py-2 px-5 mb-2" value={name} onChange={event => {setName(event.target.value)}} required />
      <input type="email" name="email" placeholder="Email" className="py-2 px-5 lg:mb-0 rounded-lg" value={email} onChange={event => {setEmail(event.target.value)}} required />
      <div className="g-recaptcha" data-sitekey="6LfZmX0hAAAAAPRqwlBGUIlqKnDJ9KSL-JS5xxa5"></div>
      <button type="submit" className="bg-first mt-2 rounded-lg py-2 px-4 text-white text-base hover:bg-fourth">Absenden</button>
    </form>
  )
}

export default Form