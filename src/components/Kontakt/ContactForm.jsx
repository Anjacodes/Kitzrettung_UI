import React from 'react'
import { useState } from 'react'

function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <form className="text-center flex flex-col text-base items-center w-full my-48" action="https://formspree.io/f/mdojkowl" method="POST" onSubmit={handleSubmit}>
      <h2 className='mb-4 text-2xl tracking-wide'>SCHREIBE UNS!</h2>
      <p className='w-1/2 lg:w-1/3 mb-20'>Wir bearbeiten jede Anfrage persönlich. Daher kann es bis zu 48 Stunden dauern, bis du von uns hörst. Danke für dein Verständnis!</p>
      <input className="rounded-lg py-2 px-5 mb-4 w-1/2 bg-slate-100" type="text" name="name" placeholder='Your name...' value={name} onChange={event => {setName(event.target.value)}} />
      <input className="rounded-lg py-2 px-5 mb-4 w-1/2 bg-slate-100" type="email" name="email" placeholder='Your email...' value={email} onChange={event => {setEmail(event.target.value)}} />
      <textarea className="rounded-lg py-2 px-5 mb-4 w-1/2 bg-slate-100 h-40" name="message" type="textarea" placeholder='Your message...' value={message} onChange={event => {setMessage(event.target.value)}} />
      <div className="g-recaptcha" data-sitekey="6LfZmX0hAAAAAPRqwlBGUIlqKnDJ9KSL-JS5xxa5"></div>
      <button type="submit" className="bg-first mt-2 rounded-lg py-2 px-4 text-white text-base hover:bg-fourth w-1/2">Absenden</button>
</form>
  )
}

export default ContactForm