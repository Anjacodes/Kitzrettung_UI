import React from 'react'

function ContactForm() {

  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

  return (
    <form className="text-center flex flex-col text-base items-center w-full my-48" action="https://formspree.io/f/mdojkowl" method="POST">
      <h2 className='mb-4 text-2xl tracking-wide'>SCHREIBE UNS!</h2>
      <p className='w-2/3 lg:w-1/3 mb-5'>Wir bearbeiten jede Anfrage persönlich. Daher kann es bis zu 48 Stunden dauern, bis du von uns hörst. Danke für dein Verständnis!</p>
      <p className='w-2/3 mb-5'>Gerne erreichst du uns auch telefonisch unter 0151 742 549 53.</p>
      <p className='w-2/3 mb-20'>Alternativ kannst du auch gleich eine <a href="https://order.webaro.cloud/?portal=rehkitzrettung-euskirchen.webaro.cloud" className='text-second hover:cursor-pointer hover:underline' rel="noopener noreferrer" target="_blank">Befliegungsanfrage stellen</a>.</p>
      <input className="contact rounded-lg py-2 px-5 mb-4 w-2/3 bg-slate-100" type="text" name="name" placeholder='Dein Name...' required />
      <input className="contact rounded-lg py-2 px-5 mb-4 w-2/3 bg-slate-100" type="email" name="email" placeholder='Deine Email...' required />
      <textarea className="contact rounded-lg py-2 px-5 mb-4 w-2/3 bg-slate-100 h-40" name="message" type="textarea" placeholder='Deine Nachricht...' required />
      <div className="g-recaptcha" data-sitekey="6LfZmX0hAAAAAPRqwlBGUIlqKnDJ9KSL-JS5xxa5"></div>
      <button type="submit" className="bg-first mt-2 rounded-lg py-2 px-4 text-white text-base hover:bg-third w-2/3">Absenden</button>
</form>
  )
}

export default ContactForm