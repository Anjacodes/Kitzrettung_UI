import React, { useState } from 'react'

function Form({displayName}) {

  return (
    <form className="text-center flex flex-col text-base lg:mb-4" action="https://formspree.io/f/xknenklz" method="POST">
        <div className="flex flex-col align-center">
          <input type="text" id="name" placeholder="Name" className="rounded-lg py-2 px-5 mb-2"></input>
          <input type="email" id="email" placeholder="Email" className="py-2 px-5 lg:mb-0 rounded-lg"></input>
          <div className="g-recaptcha" data-sitekey="6LfZmX0hAAAAAPRqwlBGUIlqKnDJ9KSL-JS5xxa5"></div>
          <button type="submit" className="bg-first mt-2 rounded-lg py-2 px-4 text-white text-base hover:bg-third">Absenden</button>
        </div>
    </form>
  )
}

export default Form