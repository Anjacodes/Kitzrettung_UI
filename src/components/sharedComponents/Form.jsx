import React, { useState } from 'react'
// import ReCAPTCHA from "react-google-recaptcha"
// import { useForm } from '@formspree/react';

function Form({displayName}) {

  const [isVerified, setIsVerified] = useState(false);
  const [hasInfo, setHasInfo] = useState(false);
  const [isDesktop] = useState(window.innerWidth > 650);
  // const [state] = useForm("xknenklz");
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

  const handleOnChange = () => {
    setIsVerified(true);
  }

  const handleOnChangeForm = () => {
    setHasInfo(true);
  }

  console.log(displayName)

  return (
    <form className="text-center flex flex-col text-base lg:mb-4" action="https://formspree.io/f/xknenklz" method="POST">
        <div className="flex flex-col align-center">
          <input type="text" id="name" placeholder="Name" className="rounded-lg py-2 px-5 mb-2"></input>
          <input onChange={handleOnChangeForm} type="email" id="email" placeholder="Email" className="py-2 px-5 lg:mb-0 rounded-lg"></input>
          <div className="g-recaptcha" data-sitekey="6LfZmX0hAAAAAPRqwlBGUIlqKnDJ9KSL-JS5xxa5"></div>
          <button type="submit" className="bg-first mt-2 rounded-lg py-2 px-4 text-white text-base hover:bg-third">Absenden</button>
        </div>
      {/* {hasInfo &&
        <ReCAPTCHA className={`${displayName === "Footer" || !isDesktop ? "ml-0" : "ml-[25%]"} block mt-4`} sitekey={import.meta.env.VITE_SITE_KEY} onChange={handleOnChange} />
      } */}
    </form>
  )
}

export default Form